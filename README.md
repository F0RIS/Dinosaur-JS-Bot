# Dinosaur-JS-Bot

To test it, open in browser chrome://dino page, start the game, open dev console and copy paste there all code from bot.js file.

## Some thoughts:
I saw several vids where people write bot for that game with python and with using absolute screen coordinates. I think it's a little bit dumb solution. What if browser window were moved or resized, or if you want give that script to somebody else? Why at all we must leave browser to implement bot, if we have JS, that's enough.
So I decided to try use same approach as python guys but in native JS. You can watch in the video what I got. Pretty simple code, works on every resolution and window position plus works at night. The only thing - it can't get low to avoid birds on middle height. I just didn't write that)
