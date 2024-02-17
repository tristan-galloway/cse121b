/* W06: Final Project */

/* Declare and initialize global variables */
const pokemonElement = document.getElementById("pokemon");

let Pokedex = []

/* async displayPokemon Function */
const displayPokemon = (listOfPokemon) => {
    listOfPokemon.forEach(pokemon => {
        // Create elements and variables
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        let h4Id = document.createElement('h4');
        let h4Type = document.createElement('h4');
        let img = document.createElement('img');
        let pokemonId = pokemon.id.toString().padStart(3, '0');

        // Add values to variables
        h3.textContent = `Name: ${pokemon.name.english}`;
        h4Id.textContent = `ID: ${pokemonId}`;
        h4Type.textContent = `Type: ${pokemon.type}`;
        img.setAttribute('src', `images/thumbnails/${pokemonId}.png`);
        img.setAttribute('alt', `Image of `);

        // Append all of the created variables to the article
        article.appendChild(h3);
        article.appendChild(img);
        article.appendChild(h4Id);
        article.appendChild(h4Type);
        pokemonElement.appendChild(article);
    });
};

/* async getPokedex Function using fetch()*/
const getPokedex = async () => {
    const response = await fetch('https://tristan-galloway.github.io/cse121b/pokedex.json');
    if (response.ok) {
        Pokedex = await response.json();
    };
    displayPokemon(Pokedex);
};

/* reset Function */
const reset = function() {
    pokemonElement.innerHTML = "";
};

/* filterByType Function */
const filterByType = function(listOfPokemon) {
    reset();
    let filter = document.getElementById('filterByType').value;
    switch (filter) {
        case filter:
            displayPokemon(listOfPokemon.filter(pokemon => pokemon.type.includes(`${filter}`)));
            break;
        default:
            break;
    }
};

/* Event Listener */
document.getElementById('filterByType').addEventListener('change', () => {filterByType(Pokedex)});

getPokedex();