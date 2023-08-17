[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

![](https://i.imgur.com/gXRzAcl.gif)

# Game of Zones

When you play the Game of Zones, you win, or ... well you don't die but you might not win. We're going to be building some interactive games using our new knowledge of EVENTS, compounding our previous knowledge of functions and JavaScript fundamentals.

## Setup

You've been provided starter code - no need to edit `index.html` or `style.css`, work only in `main.js` for Game 1.

Before coding, look through both games and their notes. Be sure to spend at least 15 minutes thinking about how to build a game out before actually touching ANY code. Even if your pseudocode isn't perfect, it breaks down the problem into smaller steps to tackle and gives you a roadmap of how to proceed.

## Completion

We want to stress the importance of formatting and spacing your code neatly and consistently. At some point in time we have all written some pretty ugly looking code that didn't follow any convention, but now is a good chance to start tidying up our code. Please read through [Airbnb's style guide](https://github.com/airbnb/javascript).

### Game 1

What should a user be able to do with the game?

1. When the mouse enters any of the zones change its background color to `green`
2. When the mouse leaves a zone change its background color back
3. When you click on a zone it locks its color to green.
>HINT: You probably need to remove some event listeners ([mdn](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener))
4. When all zones are checked green, log a statement of congratulations to the console!

**Before coding anything, PSEUDOCODE out how to approach this game.** Here are some useful questions and notes for you:

- let's build a function that will turn a zone green. Can we do this with one function that will change any object with the function bound to it via an eventListener?
- conversely, you might need a function that will change the background of the zone to clear or white or none
- take a look at `style.css`, we already have styles for a class 'green'. How might this change how you build the functions?
- what kind of event listeners do we need? Is there documentation out there for different types of event listeners?
- how would you add an event listener to one DOM element? How about to all DOM elements of a set (e.g. with the same class)
- how can you remove event listeners?
- which event listeners should be removed?
- when should those event listeners be removed?
- how can you check to see if all the zones are green?
- if you wrote a function to perform that check, when should the check occur?

![](https://i.imgur.com/BvvVElS.png)
