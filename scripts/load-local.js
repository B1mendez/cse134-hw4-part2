function init() {
  document.getElementById("loadLocal").addEventListener("click", loadLocalData);
  document
    .getElementById("loadRemote")
    .addEventListener("click", loadRemoteData);
}

function loadLocalData() {
  let localData = JSON.parse(localStorage.getItem("projectData"));

  if (localData) {
    renderCards(localData);
  } else {
    alert(`The following data ${JSON.stringify(localData)} cannot be found`);
  }
}

function loadRemoteData() {
  const apiKey = "$2b$10$yuR6cSSzXyiF1.WiwEx6Ne39Io7/0pnWfWSa/IQevIoAbtW/Ot/Yu";
  const url = "https://api.jsonbin.io/b/64cee8b89d312622a38c9203";
  fetch(url, {
    headers: {
      "X-Master-Key": apiKey,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      renderCards(data.record);
    });
}

function renderCards(data) {
  let container = document.getElementById("cardContainer");
  container.innerHTML = "";
  data.forEach((item) => {
    let card = document.createElement("project-card");
    card.setAttribute("project-name", item.title);
    card.setAttribute("img-src", item.imageSrc);
    card.setAttribute("img-alt", item.imageAlt);
    card.setAttribute("description", item.description);
    card.setAttribute("link", item.link);
    
    container.appendChild(card);
  });
}

function projectStorage() {
  let projectExamples = [
    {
      title: "Project 1",
      imageSrc: "/images/project1space.jpg",
      imageAlt: "Image of space known as Wing of Orion!",
      description: "This is a description for Project 1.",
      link: "https://www.nasa.gov/image-feature/orion-s-recently-installed-solar-array-wings",
    },
    {
      title: "Project 2",
      imageSrc: "/images/project2porshe.jpg",
      imageAlt: "An image of a porshe 911",
      description: "This is a description for Project 2.",
      link: "https://www.porsche.com/usa/",
    },
    {
      title: "Project 3",
      imageSrc: "/images/logo.PNG",
      imageAlt: "An image of the Better Times Tutoring Logo",
      description: "This is a description for Project 3.",
      link: "https://bettertimestutoring.com/",
    },
  ];

  localStorage.setItem("projectData", JSON.stringify(projectExamples));
}

window.addEventListener('DOMContentLoaded', projectStorage);
window.addEventListener("DOMContentLoaded", init);
