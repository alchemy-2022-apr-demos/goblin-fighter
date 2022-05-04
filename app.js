// import functions and grab DOM elements
import { renderGoblin } from './render-utils.js';
const defeatedNumberEl = document.querySelector('#defeated-number');
const adventurerHPEl = document.querySelector('#adventurer-hp');
const adventurerImgEl = document.querySelector('#adventurer-img');
const form = document.querySelector('form');
const goblinListEl = document.querySelector('.goblins');

// let state
let defeatedGoblinsCount = 0;
let playerHP = 10;
let goblins = [
    { name: 'Terry', hp: 1 },
    { name: 'Professor Goblin', hp: 4 },
];

// - New goblin form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    //   - User has supplied a name and submitted the form
    const data = new FormData(form);

    const goblinName = data.get('goblin-name');

    //   - Make a new goblin object with that user input

    const newGoblin = {
        name: goblinName,
        hp: Math.ceil(Math.random() * 5),
    };

    //   - Add that object to the array of goblins in state
    goblins.push(newGoblin);

    displayGoblins();
});

function displayGoblins() {
    //   - "update a list"
    //     - clear out the list DOM
    goblinListEl.textContent = '';

    //     - loop through the goblins
    for (let goblin of goblins) {
        //     - render a new goblin DOM element for each item
        const goblinEl = renderGoblin(goblin);
        // - append that element to the HTML

        // now that we have a goblin element, we can make each goblin clickable like so
        // this is a DYNAMIC EVENT LISTENER. we make a new event listener for every goblin!
        // an event listener is a property just like anything else. just like text content, just like style. we add it to elements.
        goblinEl.addEventListener('click', () => {
            goblinClickHandler(goblin);
        });

        goblinListEl.append(goblinEl);
    }
}

displayGoblins();

function goblinClickHandler() {}
