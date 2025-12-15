document.addEventListener("DOMContentLoaded", () => {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");

    sendBtn.addEventListener("click", sendMessage);
    userInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    });

    function sendMessage() {
        const question = userInput.value.trim();
        if (!question) return;

        appendMessage("user", question);
        userInput.value = "";

        fetch("http://127.0.0.1:5001/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ question }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            appendMessage("bot", data.answer);
        })
        .catch(error => {
            console.error("Error:", error);
            appendMessage("bot", `Sorry, something went wrong: ${error.message}`);
        });
    }

    function appendMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("chat-message", `${sender}-message`);
        messageElement.innerText = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});