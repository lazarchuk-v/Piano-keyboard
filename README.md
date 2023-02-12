Piano Keyboard 🎹
=================

This project is a simple piano keyboard that plays different sounds when each key is clicked.

https://specv-piano.netlify.app/

How it Works 🤔
---------------

The code uses the `querySelectorAll` method to select all the elements with a class of `.key` and store them in a variable called `pianoKeys`. 
Then, for each of these elements, the code adds an event listener that listens for a click event and calls the `playSound` function when triggered.

The `playSound` function takes a single argument, which is a string that represents the URL of the audio file to be played. 
It creates a new `Audio` object and passes the URL as the argument to the constructor. 
The `play` method is then called on the object to start playing the sound.

Future Improvements 🚀
----------------------

-   Add a visual indicator to show which key is being pressed
-   Allow users to select different instruments (e.g. guitar, drums, etc.)
-   Implement multi-touch support to play multiple notes at the same time

Conclusion 💡
-------------

This project is a simple example of how to implement a basic piano keyboard using JavaScript. It demonstrates my understanding of event listeners, dynamic URLs, and audio playback. I hope you enjoy playing with it! 🎶
