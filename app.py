import os
import re
import requests
from dotenv import load_dotenv
import nest_asyncio
from llama_index.core import Settings, SimpleDirectoryReader
from llama_index.llms.openrouter import OpenRouter
from llama_index.embeddings.huggingface import HuggingFaceEmbedding
from llama_index.core.node_parser import SemanticSplitterNodeParser
from llama_index.core.llama_pack import download_llama_pack
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS

load_dotenv()
nest_asyncio.apply()

app = Flask(__name__)
CORS(app)

query_engine = None

def configure_ai(api_key):
    """
    Configures the AI model and settings.
    """
    llm = OpenRouter(
        api_key=api_key,
        model="meta-llama/llama-3.3-70b-instruct:free",
        max_tokens=512,
        temperature=0.1,
        timeout=60,
        system_prompt=(
            "You are an expert RAG system that answers ONLY using the provided context. "
            "Never hallucinate. Never guess. If the answer is not in the context, say so. "
            "Provide short, clear, factual responses with 2–4 evidence bullets."
        ),
    )
    embed_model = HuggingFaceEmbedding(model_name="BAAI/bge-small-en-v1.5")
    Settings.llm = llm
    Settings.embed_model = embed_model
    print("✅ AI model and settings are ready to use")

def download_pdf_from_drive(drive_url: str, save_path: str):
    """
    Download a PDF from a Google Drive sharing link and save it locally.
    """
    if os.path.exists(save_path):
        print(f"✅ PDF already downloaded at {save_path}")
        return save_path

    match = re.search(r"/d/([A-Za-z0-9_-]+)", drive_url)
    if match:
        file_id = match.group(1)
    else:
        match = re.search(r"id=([A-Za-z0-9_-]+)", drive_url)
        if match:
            file_id = match.group(1)
        else:
            raise ValueError("❌ Could not extract file ID from the link.")

    download_url = f"https://drive.google.com/uc?export=download&id={file_id}"
    print(f"📥 Downloading PDF (file ID {file_id})...")

    resp = requests.get(download_url)
    resp.raise_for_status()

    with open(save_path, "wb") as f:
        f.write(resp.content)

    print(f"✅ PDF downloaded → {save_path}")
    return save_path

def create_semantic_nodes(pdf_path):
    """
    Loads the PDF, creates semantic nodes (chunks), and adds metadata.
    """
    documents = SimpleDirectoryReader(input_files=[pdf_path]).load_data()
    print(f"📄 Loaded {len(documents)} document(s).")

    semantic_embed = HuggingFaceEmbedding(model_name="BAAI/bge-small-en-v1.5")
    parser = SemanticSplitterNodeParser(
        buffer_size=3,
        breakpoint_percentile_threshold=95,
        embed_model=semantic_embed,
    )
    nodes = parser.get_nodes_from_documents(documents)
    for n in nodes:
        n.metadata["source"] = pdf_path
        n.metadata["chunk_type"] = "semantic"
    print(f"🔍 Created {len(nodes)} high-quality semantic nodes.")
    return nodes

def build_query_engine(nodes):
    """
    Builds the Query Fusion retriever.
    """
    QueryRewritingRetrieverPack = download_llama_pack(
        "QueryRewritingRetrieverPack",
        "./query_rewriting_pack",
    )
    query_rewriting_pack = QueryRewritingRetrieverPack(
        nodes,
        chunk_size=256,
        vector_similarity_top_k=8,
        fusion_similarity_top_k=8,
        num_queries=6,
    )
    print("🚀 Advanced Query Fusion RAG Engine Ready!")
    return query_rewriting_pack

def safe_rag_run(query_rewriting_pack, question, retries=3):
    """
    Run the RAG pipeline with basic retry logic.
    """
    for attempt in range(retries):
        try:
            resp = query_rewriting_pack.run(question)
            if resp is None or str(resp).strip() == "":
                raise ValueError("Empty LLM response.")
            return resp
        except Exception as e:
            print(f"⚠️ Error: {e}")
            print(f"🔁 Retrying ({attempt+1}/{retries})...")
    return "❌ Could not generate a valid answer after retries."

def initialize_rag():
    """
    Initializes the RAG pipeline.
    """
    api_key = os.getenv("OPENROUTER_API_KEY")
    pdf_url = os.getenv("PDF_URL")

    if not api_key or not pdf_url:
        print("❌ Please set OPENROUTER_API_KEY and PDF_URL in your .env file.")
        return None

    configure_ai(api_key)
    
    DATA_DIR = "data"
    os.makedirs(DATA_DIR, exist_ok=True)
    pdf_path = os.path.join(DATA_DIR, "source.pdf")
    
    download_pdf_from_drive(pdf_url, pdf_path)
    nodes = create_semantic_nodes(pdf_path)
    return build_query_engine(nodes)

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory('.', path)

@app.route("/api/chat", methods=["POST"])
def chat():
    global query_engine
    if query_engine is None:
        return jsonify({"error": "Query engine not initialized."}), 500

    data = request.get_json()
    question = data.get("question")
    if not question:
        return jsonify({"error": "Question not provided."}), 400

    response = safe_rag_run(query_engine, question)
    return jsonify({"answer": str(response)})

if __name__ == "__main__":
    query_engine = initialize_rag()
    if query_engine:
        app.run(debug=True, port=5001)
    else:
        print("Could not start the application.")