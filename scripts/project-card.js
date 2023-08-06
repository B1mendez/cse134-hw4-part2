class ProjectCard extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    let projectName = this.getAttribute("project-name");
    let imgSrc = this.getAttribute("img-src");
    let imgAlt = this.getAttribute("img-alt");
    let description = this.getAttribute("description");
    let link = this.getAttribute("link");

    this.shadow.innerHTML = `
        <style>
        :host {
            display: block;
            max-width: 600px;  
            margin: 20px auto;
            border: 1px solid black;
            padding: 20px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
            border-radius: 8px;  
        }
        
        h2 {
            color: #3a3a3a;
            text-align: center;  
            margin-bottom: 15px; 
        }
        
        img {
            display: block;
            width: 80%;  
            height: auto;
            margin: 0 auto;  
            border-radius: 8px;  
        }
        
        p {
            color: #333;
            margin-top: 15px; 
        }
        
        a {
            display: block;
            color: #1a0dab;
            margin-top: 15px; 
            text-align: center; 
        }
        </style>
    
            <h2>${projectName}</h2>
            <img src='${imgSrc}' alt='${imgAlt}'>
            <p>${description}</p>
            <a href='${link}'>Read More</a>
        `;
  }
}
customElements.define("project-card", ProjectCard);
