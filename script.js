var timer = document.querySelector(".timer");//selects timer sections
var main = document.querySelector(".main");//selects main section to display Game Over
var start = document.querySelector("#start");//selects start button

//===========ON CLICK FUNCTION TO START TIMER======//
start.addEventListener("click",
//function to decrease timer by one second
function setTime (){
    var secondsLeft = 10;//timer to begin on seconds 
    var timerInterval = setInterval(function() {
        secondsLeft--;//decreases by one
        timer.textContent = `${secondsLeft} seconds remaining`; //displays seconds remaining

        if (secondsLeft === 0) { //when timer reaches zero
            clearInterval(timerInterval); //stops timer
            sendMessage();//displays Game over~~redundant???
            return;
        }
    },

    1000);//decreases by one every second
}
 );

function sendMessage() {
    main.textContent = `GAME OVER`;
}

//=========GAME WORDS=========//
//choose a random word to display next//

var words = ["javascript", "array", "event", "listener", "propogate", "interval", "timer", "append"];
var index = Math.floor(Math.random() * words.length);
var nextWord = words[index];
console.log (nextWord);

var hiddenWord = "";

//need to :
//change every letter in randomly selected word to change to space _ with a for loop
// index every letter location and scan with key presses????