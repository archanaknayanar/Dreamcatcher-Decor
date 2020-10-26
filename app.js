var Slider , BackButton , NextButton;

var Slider = document.getElementById("slider-img");
var BackButton = document.getElementById("BackBtn");
var NextButton = document.getElementById("NextBtn");

var SlideImages = new Array (
    "Images/px_1.png" ,
    "Images/px_2.png" ,
    "Images/px_5.png" ,
    "Images/px_6.png" 
);

let i = 0;

NextButton.onclick = function (){
    if (i < 3){
        Slider.src = SlideImages[i+1];
        i++;
    }
}

BackButton.onclick = function (){
    if ( i > 0){
        Slider.src = SlideImages[i-1];
        i--;
    }
}