var timer = document.querySelector(".timer");//selects timer sections
var main = document.querySelector(".main");//selects main section to display Game Over
var start = document.querySelector("#start");//selects start button

var secondsLeft = 10;//timer to begin on seconds 

start.addEventListener("click",
//function to decrease timer by one second
function setTime (){
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

//setTime();