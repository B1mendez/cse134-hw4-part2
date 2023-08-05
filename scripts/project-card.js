class ProjectCard extends HTMLElement {
    constructor() {
        super();

        // Create a shadow root
        let shadow = this.attachShadow({mode: 'open'});

        // Get attributes from the custom element
        let projectName = this.getAttribute('project-name');
        let imgSrc = this.getAttribute('img-src');
        let imgAlt = this.getAttribute('img-alt');
        let description = this.getAttribute('description');
        let link = this.getAttribute('link');

        shadow.innerHTML = `
            <style>
            :host {
                display: block;
                border: 1px solid black;
                padding: 10px;
            }
            h2 {
                color: #3a3a3a;
            }
            img {
                width: 100%;
                height: auto;
            }
            p {
                color: #333;
            }
            a {
                display: block;
                color: #1a0dab;
            }
            </style>
            <h2>${projectName}</h2>
            <img src='${imgSrc}' alt='${imgAlt}'>
            <p>${description}</p>
            <a href='${link}'>Read More</a>
        `;
    }
}

// Define the new element
customElements.define('project-card', ProjectCard);
