/* W06: Final Project */

/* Declare and initialize global variables */
const pokemonElement = document.getElementById("pokemon");

let Pokedex = []

/* async displayPokemon Function */
const displayPokemon = (listOfPokemon) => {
    listOfPokemon.forEach(pokemon => {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        let h4Id = document.createElement('h4');
        let h4Type = document.createElement('h4');
        let h4Hp = document.createElement('h4');
        h3.textContent = `Name: ${pokemon.name.english}`;
        h4Id.textContent = `ID: ${pokemon.id.toString().padStart(3, '0')}`;
        h4Type.textContent = `Type: ${pokemon.type}`;
        h4Hp.textContent = `HP: ${pokemon.base.HP}`;
        article.appendChild(h3);
        article.appendChild(h4Id);
        article.appendChild(h4Type);
        article.appendChild(h4Hp);
        pokemonElement.appendChild(article);
    });
};

/* async getPokedex Function using fetch()*/
const getPokedex = async () => {
    const response = await fetch('https://tristan-galloway.github.io/cse121b/pokedex.json');
    if (response.ok) {
        Pokedex = await response.json();
    };
    displayPokemon(Pokedex)
};

/* reset Function */
const reset = function() {
    pokemonElement.innerHTML = "";
};

/* sortPokemon Function */
const sortPokemon = function(listOfPokemon) {
    reset()
    let filter = document.getElementById('filtered').value;
    switch (filter) {
        case 'az':
            displayPokemon(listOfPokemon.filter(pokemon => pokemon.sort()))
            break;
        case 'za':
            
            break;
        case 'id':
            
            break;
        default:
            break;
    }
};

/* Event Listener */
document.getElementById('sorted').addEventListener('change', () => {sortPokemon(Pokedex)});

getPokedex();