document.getElementById('loadLocal').addEventListener('click', loadLocalData);
document.getElementById('loadRemote').addEventListener('click', loadRemoteData);

function loadLocalData() {
  let localData = JSON.parse(localStorage.getItem('projectData'));
  renderCards(localData);
}

function loadRemoteData() {
  fetch('https://your-remote-url.com/data.json') 
    .then(response => response.json())
    .then(data => renderCards(data))
    .catch(error => console.error('Error:', error));
}

function renderCards(data) {
  let container = document.getElementById('cardContainer');
  container.innerHTML = ''; // Clear container first
  data.forEach(item => {
    let card = document.createElement('project-card');
    card.setAttribute('project-name', item.title);
    card.setAttribute('img-src', item.imageSrc);
    card.setAttribute('img-alt', item.imageAlt);
    card.setAttribute('description', item.description);
    card.setAttribute('link', item.link);
    container.appendChild(card);
  });
}

