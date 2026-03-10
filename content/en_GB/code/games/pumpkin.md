---
title: "pumpkin panic"
aliases:
   - pumpkin panic
---
**Pumpkin Panic** is a simple, fast-paced, Halloween-themed reaction game I developed using the [[p5.js]] library to explore how collision detection, randomized spawning patterns, and state management mechanics used together could complement each other in a game.

Set in a cemetery, **Pumpkin Panic** challenges players to catch as many falling pumpkins as possible while avoiding skulls. The game has a set time limit and dynamic background music that gets progressively more stressful as the game goes on.

> [!success] Want to give it a go?
> Try your hand at [Pumpkin Panic](https://reiwa.ca/p5.js/pumpkin) and let me know your high score!
>
> This game is open source! Get started by [forking the repo](https://github.com/rbstrachan/p5.js/fork) or [opening an issue](https://github.com/rbstrachan/p5.js/issues).

# The technical bits
The game logic is built around a custom `FallingObject` class which handles the randomization of object types (pumpkin vs. skull), the varied falling speeds, and unique scaling for each object.

Also, there is a `spawnInterval` variable that resets to a random value between $200$ and $700$ milliseconds after every object spawn. This ensures that the rhythm of the game is unpredictable and prevents the player from simply clicking repeatedly for an easy win.
