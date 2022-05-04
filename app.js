// import functions and grab DOM elements
import { renderGoblin } from './render-utils.js';
const defeatedNumberEl = document.querySelector('#defeated-number');
const adventurerHPEl = document.querySelector('#adventurer-hp');
const adventurerImgEl = document.querySelector('#adventurer-img');
const form = document.querySelector('form');
const goblinListEl = document.querySelector('.goblins');

// let state
let defeatedGoblinsCount = 0;
let playerHP = 2;
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

function goblinClickHandler(goblin) {
    console.log(`I am clicking on ${goblin.name}`);
    // if goblin's hp is 0, return
    if (goblin.hp === 0) return;

    // if player hp is 0, return
    if (playerHP === 0) return;

    // randomly decide if player hit the goblin
    const playerHit = Math.random();
    // if player hits the goblin
    // we get to decide what the odds are of hitting the goblin
    // generate a random number between 0 and 1 and decide what
    // odds you want by checking if that number is less than some cut-off
    if (playerHit < 1) {
        //    reduce the goblin's hp
        goblin.hp--;
        //    call displayGoblins (this will re-render the goblins)
        displayGoblins();
        //    alert the user that they hit the goblin
        alert(`You hit ${goblin.name}!`);
        //    if goblin hp is 0 -- incremenet the defeated goblins count
        if (goblin.hp === 0) {
            defeatedGoblinsCount++;
            defeatedNumberEl.textContent = defeatedGoblinsCount;
        }
    } else {
        // else player missed
        //     alert the user
        alert('You missed!');
    }
    // randomly decide if goblin hit the player
    const goblinHit = Math.random();
    // if goblin hits player
    if (goblinHit < 1) {
        //    reduce player hp
        playerHP--;
        //    update the player hp span with new hp value
        adventurerHPEl.textContent = playerHP;
        //    alert the user
        alert(`${goblin.name} hit you!`);
        //    if player hp is 0, alert user game over!!
        if (playerHP === 0) {
            alert('Game over :(');
            adventurerImgEl.classList.add('game-over');
        }
    } else {
        alert(`${goblin.name} tried to hit you and missed!`);
    }
}
