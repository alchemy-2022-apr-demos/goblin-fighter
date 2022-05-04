## Goblin Fighter Planning

### State

-   array of goblins (name, health points)
-   number of defeated goblins (derived from array of goblins OR just store as variable)
-   player hp

Goblin objects will look like this:

```js
  {name: 'Professor Goblin', hp: 4}
```

### HTML Elements (on page load)

-   input for adding new goblins
-   button for adding new goblins
-   span for tracking defeated goblins
-   span for tracking player HP
-   `<div>` for our goblin list

### Functions

-   `displayGoblins` -- clear out the list, and render a goblin element for each goblin in your list of goblins
-   `renderGoblin(goblin)` - create a goblin element for specific goblin object
-   `goblinClickHandler` - takes care of the game logic when goblins are clicked

## To Do List

1. Get everything done that you've done before -- i.e. stuff that looks like yesterday's labs

-   [ ] Set up your HTML with your defeatedGoblins span, your playerHP span, your form for adding new goblins
-   [ ] Add your state variables in app.js
-   [ ] Add event listener for your new goblin form
-   [ ] TDD your `renderGoblin` function (TDD optional but helpful) -- should return an HTML element with the goblin's name and hp
-   [ ] Add `displayGoblins` function which calls `renderGoblin` for each goblin in your list of goblins

_ You know you're done here when you can add new goblins to the page_

2. Deal with you click handler - one if / else at time

### Goblin Click Handler Logic

```js
// if goblin's hp is 0, return
// if(goblin.hp === 0) return;

// if player hp is 0, return

// randomly decide if player hit the goblin
// if player hits the goblin
//    reduce the goblin's hp
//    call displayGoblins (this will re-render the goblins)
//    alert the user that they hit the goblin
//    if goblin hp is 0 -- incremenet the defeated goblins count
// else player missed
//     alert the user
// randomly decide if goblin hit the player
// if goblin hits player
//    reduce player hp
//    update the player hp span with new hp value
//    alert the user
//    if player hp is 0, alert user game over!!
```
