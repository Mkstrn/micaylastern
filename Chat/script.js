const animals = [
  {
    name: "Elephant",
    type: "mammal",
    fact: "Elephants are the largest land animals on Earth.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg"
  },
  {
    name: "Penguin",
    type: "bird",
    fact: "Penguins can't fly, but they are excellent swimmers.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Penguins_walking_-Moltke_Harbour%2C_South_Georgia%2C_British_overseas_territory%2C_UK-8.jpg"
  },
  {
    name: "Dolphin",
    type: "ocean",
    fact: "Dolphins are highly intelligent marine mammals.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/76/Dolphin4.jpg"
  },
  {
    name: "Tiger",
    type: "mammal",
    fact: "Tigers have striped skin, not just striped fur.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg"
  }
];

function displayAnimals(filter) {
  const container = document.getElementById('animal-facts-container');
  container.innerHTML = '';
  const filteredAnimals = filter === 'all'
    ? animals
    : animals.filter(animal => animal.type === filter);
  filteredAnimals.forEach(animal => {
    const card = document.createElement('div');
    card.className = 'animal-card';
    card.innerHTML = `
      <img src="\${animal.image}" alt="\${animal.name}">
      <h3>\${animal.name}</h3>
      <p>\${animal.fact}</p>
    `;
    container.appendChild(card);
  });
}
function filterAnimals(type) {
  displayAnimals(type);
}
window.onload = () => {
  displayAnimals('all');
};