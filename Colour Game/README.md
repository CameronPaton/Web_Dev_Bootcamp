## Web Developer Bootcamp Project 1

### Colour Game Project

---

##### Project Overview

The Colour Game Project is from Section 17 of the Udemy Web Developer Bootcamp course, by Colt Steele. This project is a code along project so it was useful in applying the concepts of JavaScript to a project and also interacting JavaScript with the HTML and CSS. 

This project is a guessing game of RGB (Red, Green, Blue) values which are presented in the heading, randomly between 0 and 255. You are to select whether you want to play an easy or hard game and guess a colour from a grid of either 6 or 3 squares, based on the RGB value in the header. If, for example, you are presented with an rgb value of rgb(255, 0, 0), there should be a red square in the grid which is the answer, or you might get rgb(92, 20, 204), which would indicate there is more blue in the colour and a bit of red, so if you mix those colours you end up with a purple colour. There should be a purple colour in the grid which is the correct answer. 

---

##### Technologies

* HTML
* CSS
* JavaScript

---

##### Functionality

The header on the page will generate a random RGB value which is the correct answer. You have to look at that RGB value and guess the answer from the random colours in the grid of squares. There is an easy mode and a hard mode. The easy mode will reduce the grid to 3 squares, and the hard mode will show 6 squares. 

When the user clicks a square to guess, there are two possible outcomes:

* The guessed square fades out, and a message appears to "Try Again"
* All the squares turn into the correct colour, a "Correct!" message appears, and the header background changes to the colour of the correctly guessed answer. The "New Colours" button also changes the buttons text content to "Play Again". 

When the user clicks play again, the game is reset, and new colours are generated and the header changes back to the default colour. A new correct answer is generated and the header rgb value changes. the "Play Again" button also changes the text content back to "New Colours". 

---

##### Preview

Please see below for a preview of how the project looks:

![Preview](https://github.com/CameronPaton/Images-Portfolio/blob/master/Colour_Game_Project.png?raw=true)

---

#### The Game

To view the functionality of the game please click [here](https://z2np3.codesandbox.io/)
