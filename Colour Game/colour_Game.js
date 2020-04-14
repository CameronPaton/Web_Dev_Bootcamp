var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColour = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector('#message');

colorDisplay.textContent = pickedColour;

for(var i = 0; i < squares.length; i++){
    //add initial colours to squares from the colours var
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares so that when the square is clicked - further actions will occur

    squares[i].addEventListener("click", function(){
        //grab colour of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare colour to picked colour var
        if(clickedColor === pickedColour){
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again"
        };
    });
    
}

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