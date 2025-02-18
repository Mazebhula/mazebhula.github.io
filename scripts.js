document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        { name: "Project 1", description: "A JavaScript web app." },
        { name: "Project 2", description: "A Python data analysis script." },
        { name: "Project 3", description: "A Node.js REST API." }
    ];

    const projectsContainer = document.getElementById("projects-container");

    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
        `;
        projectsContainer.appendChild(projectDiv);
    });

    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        alert(`Thank you for reaching out, ${name}! I will get back to you at ${email} soon.`);

        contactForm.reset();
    });
});
