var scoresEl = document.querySelector(".highScores");
var timerEl = document.querySelector(".timeLeft");
var questionsEl = document.querySelector(".questions");
var startBtn = document.querySelector(".gameStart");
var answerBtn = document.querySelector("#answers");



var questions = [];
var answers = [];
var correct = [];


function startGame() {
 // starts the game by changing display from into to game. Then triggers the questionaire function  
 questionaire();
}

function endGame() {
    //ends game and changes display to display time remaning as points or DNF    
}

function timerEl() {
    // timer function
}


function questionaire() {
    for (var x = 0; x < questionsEl.length; x++)
    {
        answerBtn.addEventListener("click", function answerChecker(){
            //Figure out how to either use 1 if statement or need to use 4 if statement by recognizing each button option and run inside array to determine if answer pressed was correct or not.
        })
    }
}

startBtn.addEventListener("click", startGame())

