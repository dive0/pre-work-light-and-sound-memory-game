# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Shi Wei Zheng

Time spent: 6 hours spent in total

Link to project: [Memory Game](https://glitch.com/edit/#!/pre-work-light-and-sound-memory-game?path=README.md%3A9%3A81)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://cdn.glitch.com/8438714a-39e8-49e3-9600-2456431035bf%2FYL6uQa8Mg1.gif?v=1615330497250)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
- [w3schools](https://www.w3schools.com)
- [Stack Overflow](https://stackoverflow.com/)

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
- A challenge I encountered was trying to get the audio file I uploaded to work with the game. I have no idea how I can get the audio files to play and pause using Javascript. I read through the tutorial that was provided for playing the audio and was able to get it to play. However, when the audio plays when the button was clicked, it plays the whole audio instead of playing only when my mouse is down. I have to google how I can pause the audio when my mouse is up and setting the playback time to the beginning of the audio. While I was able to get the audio files to work when I click the button, when the computer plays the clues, the same problem happens. I have to figure out a way to stop the audio from playing after a certain time. I decided to look through the code for playing the sound of the frequency to see how I can stop the audio after some time. I figured out that I have to use the setTimeout function, but when I tried to use the function, it didn’t work. I put stopTone(btn) and len as the parameter. This fixes the problem for playing the clue but caused the problem of audio not playing when I click the button. I tinker around with the setTimeout function and set the time to clueHoldTime instead of len. I was able to overcome this challenge by utilizing outside resources and trying different ways to write the function.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
- One question I have about web development is how different is back-end development from front-end development. In this pre-work activity, I am doing front-end development. I have some experience with front-end development, but not a lot on back-end development. I want to be a full-stack web developer, so I would like to know what is the difference between the front-end and the back-end. Another question I have is what are the best tools or frameworks for web development. There are many tools available to developers, but I don’t know what is the best one with many functionalities and doesn’t negatively affect the website’s performance. The last question I have is what can impact a website’s performance. Does having too many codes makes the website load slowly? What are some tricks we can use to speed up a website’s performance to make the experience better?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
- If I had a few more hours to work on this project, I would use Bootstrap to make the game more responsive. With Bootstrap, I can change the appearance of the game to look better on all screen sizes. This way, when someone is using their phone to play the game, they can see all the buttons. Right now, when the screen size is small, the buttons are stack on top of one another. When a clue is played, the player will not be able to see the button light up unless they are looking at that button at that time or scrolling up and down the website. This will cause frustrations and leave a bad impression on the game. Using Bootstrap helps make the experience more enjoyable. Another thing I would work on is creating different stages for the game. As the player completes a pattern, they move on to the next stage, where the speed of the clues will be faster and there will be more buttons to click. This will increase the game’s difficulty. Along with the stages, I will implement a high score function to show what is the highest stage the player reaches.



## License

    Copyright Shi Wei Zheng

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.