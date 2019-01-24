//var numberButton = document.getElementById("number-button");

var codeContainer = document.getElementById("code-container");
var clickCounter = 0;
var numberOne;
var numberTwo;
var numberThree;
var correctcode = 122;
function getNumber(clickedButton) {



    clickCounter++;

    codeContainer.innerHTML += clickedButton.value


    if(clickCounter == 1) {
        numberOne = clickedButton.value;
        var element = document.getElementById("Green");
        element.classList.remove("blinking");
        var element = document.getElementById("Red");
        element.classList.remove("blinking");
    }else if(clickCounter == 2) {
        numberTwo = clickedButton.value;        
    }else {
        numberThree = clickedButton.value;
        var element = document.getElementById("Green");
        element.classList.remove("blinking");
        var element = document.getElementById("Red");
        element.classList.remove("blinking");
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        clickCounter = 0;
        
        if  (codeContainer.innerHTML == correctcode) {
            var element = document.getElementById("Green");
            element.classList.add("blinking");
            var element = document.getElementById("marquee1");
            element.classList.add("blinkingMarquee");
            new Audio('sound/hey6.wav').play();
            alert("code is correct");
            
        }else {    
            var element = document.getElementById("Red");
            element.classList.add("blinking");
            var element = document.getElementById("marquee1");
            element.classList.add("blinkingMarqueeRed");
            new Audio('sound/bad1.mp3').play();
            alert("code is incorrect");
        }
        codeContainer.innerHTML = "";        
    }
    document.getElementById("reset1").reset();
    
    console.log(numberOne);
    console.log(numberTwo);
    console.log(numberThree);
} 

