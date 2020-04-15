var numSquares = 6;
var colors = [];
var pickedColour;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.getElementById('resetButton');
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    //mode buttons event listeners
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            //Below code can be refactored to a ternary operator
            /*
            if(this.textContent === "Easy"){
                numSquares = 3;
            } else {
                numSquares = 6;
            }
            */
           this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
        reset();
        });
    }
    for(var i = 0; i < squares.length; i++){

        //add click listeners to squares so that when the square is clicked - further actions will occur
    
        squares[i].addEventListener("click", function(){
            //grab colour of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare colour to picked colour var
            if(clickedColor === pickedColour){
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again";
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again"
            };
        });
        
    }

    reset();
}



function reset(){
    // generate new colours
    colors = generateRandomColors(numSquares);
    //pick a new random colour from the array
    pickedColour = pickColor();
    //change colours of the squares on page
    colorDisplay.textContent = pickedColour;
    resetButton.textContent = "New Colours";
    messageDisplay.textContent = "";
    //Change the colours of the squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = 'block';
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = 'steelblue';
}

resetButton.addEventListener('click', function(){
    reset();
});


function changeColors(color){
    //loop through all the squares
    for(var i = 0; i < squares.length; i++){
    //change each colour to match given colour
    squares[i].style.backgroundColor = color;
    };
};

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = [];
    //add num random colors to array
    for(var i = 0; i < num; i++){
        //get a random number and put it into the array
        arr.push(randomColor());
    }
    //return random colors
    return arr;
}

function randomColor(){
    //pick a red from 0 - 255
    var r = Math.floor(Math.random() * 256)
    //pick a green from 0 - 255
    var g = Math.floor(Math.random() * 256)
    //pick a blue from 0 - 255
    var b = Math.floor(Math.random() * 256)
    //to generate a random number between 0 and 255
    return "rgb(" + r + ", " + g + ", " + b + ")";
}