var colors = [
    'rgb(255, 0, 0)',
    'rgb(255, 255, 0)',
    'rgb(0, 255, 0)',
    'rgb(0, 255, 255)',
    'rgb(0, 0, 255)',
    'rgb(255, 0, 255)',
]

var squares = document.querySelectorAll(".square");
var pickedColour = colors[3];
var colorDisplay = document.getElementById("colorDisplay");

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
            alert("correct")
        } else {
            alert("wrong");
        };
    });
    
}