# Goblin Fighter

## Demo

[Link to Demo](https://alchemy-web-goblin-fighter.netlify.app/)

## Getting Started

Use [this template](https://github.com/alchemycodelab/web-template) to get started.

### Learning Objectives

-   Add event listeners to DOM elements as part of a loop

### Description

In this deliverable, we will be creating a Goblin game. This deliverable will challenge you to maintain game state and have your render function render different content depending on that state.

### Acceptance Criteria

-   On load, see the HP and names of at least two default goblins
-   On submitting the 'challenge goblin' form, add a new goblin object (with 3 HP and a name) to state and display it to the DOM
-   On clicking a goblin, it should tell the user whether they hit the goblin or not, then update state and DOM appropriately with new HP
-   On clicking a goblin, it should tell the user whether the goblin hit the player or not, then update state and DOM appropriately with new HP
-   The number of vanquished goblins should be visible when state changes.
-   Render dead goblins differently, and disable clicking on them
-   When the user's HP is 0, launch a game over message

### Rubric

| Task                                                                                     | Points |
| ---------------------------------------------------------------------------------------- | ------ |
| ** Deploy Requirements **                                                                |        |
| Main branch deployed to Netlify                                                          | 1      |
| Open PR from `dev` branch with Netlify deploy preview                                    | 1      |
| ** Acceptance Requirements **                                                            |        |
| Users see HP and two default goblins                                                     | 2      |
| Users can add a new goblin with default HP and name                                      | 2      |
| Goblin click handler                                                                     | 6      |
| - Uses Math.random() function to determine hits                                          |        |
| - Alerts user whether they hit the goblin or not and updates HP                          |        |
| - Alerts user whether the goblin hit them or not and updates HP                          |        |
| Show number of vanquished goblins                                                        | 1      |
| Display goblins differently and disable clicking when defeated                           | 1      |
| Disable all functionality when the game is over                                          | 2      |
| **Functions**                                                                            |        |
| PURE: `renderGoblin(goblin)` : return DOM node`                                          | 2      |
| IMPURE: `displayGoblins()` : clears DOM and appends goblin data to goblin list DOM node` | 2      |

## Stretch goal ideas

-   Change the player image to something stronger-looking every time they hit a new threshold (killed first goblin, killed three goblins, etc).
-   Change the player image based on their current health to show how worse-for-the-wear they've become.
-   Give goblins a random 'strength' property that determines how much damage they do to the player.
-   Give goblins a random 'agility' property that determines how often the play can hit them.
-   Give goblins a random 'dexterity' property that determines how often they hit the player.
-   Give the player a 'strength' property starting at 1 that determines how much damage they do to goblins. Every time a goblin dies, increment this property.
-   Add different kinds of monsters and render them differently by adding a 'type' property to the monster.
