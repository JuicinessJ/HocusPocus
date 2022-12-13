// Elements
let scoresEl = document.querySelector("#scores");
let timerEl = document.querySelector("#time");
let questionsEl = document.querySelector(".questions");
let startBtn = document.querySelector("#start");
let answerBtn1 = document.querySelector("#answer1");
let answerBtn2 = document.querySelector("#answer2");
let answerBtn3 = document.querySelector("#answer3");
let answerBtn4 = document.querySelector("#answer4");
let theName = document.getElementById("name");
let SubmitBtn = document.getElementById("Submit");
let correct = 0;
let questDis = 0;
let secondsLeft = 60;
 
// Arrays
let questions = [
    {
        question: "What is the capital of Minnesota",
        answer1: "Saint Paul",
        answer2: "Edina",
        answer3: "Minneapolis",
        answer4: "Richfield",
        correct: "Saint Paul"
    },
    {
        question: "What is Minnesota known for?",
        answer1: "Land of 10,000 lakes.",
        answer2: "Land of the America's Dairyland.",
        answer3: "Land of the Free.",
        answer4: "Land of the Dead",
        correct: "Land of 10,000 lakes."
    },
    {
        question: "What year did Minnesota become a state?",
        answer1: "1858",
        answer2: "2022",
        answer3: "1942",
        answer4: "1776",
        correct: "1858"
    },
    {
        question: "What number state is Minnesota to the union?",
        answer1: "50",
        answer2: "10",
        answer3: "32",
        answer4: "41",
        correct: "32"
    },
    {
        question: "What is the largest city in Minnesota",
        answer1: "Saint Paul",
        answer2: "Minneapolis",
        answer3: "Duluth",
        answer4: "St. Cloud",
        correct: "Minneapolis"
    },
    {
        question: "What is the Minnesota's NFL team called?",
        answer1: "Senators",
        answer2: "Twins",
        answer3: "Packers",
        answer4: "Vikings",
        correct: "Vikings"
    },
    {
        question: "What is the name of Minnesota's first state park?",
        answer1: "Fort Snelling State Park",
        answer2: "Itasca State Park",
        answer3: "Old Mill State Park",
        answer4: "Beaver Creek Valley State Park",
        correct: "Itasca State Park"
    },
    {
        question: "What is the largest River running through Minnesota?",
        answer1: "The Mississippi River",
        answer2: "The Missouri River",
        answer3: "The Arkansas River",
        answer4: "The Illinois River",
        correct: "The Mississippi River"
    },
    {
        question: "What is Minnesota's state bird?",
        answer1: "The Yellowhammer",
        answer2: "The American Robin",
        answer3: "The Northern Mockingbird",
        answer4: "The Common Loon",
        correct: "The Common Loon"
    },
    {
        question: "What is Minnesota's state fish?",
        answer1: "The Walleye",
        answer2: "The Largemouth Bass",
        answer3: "The White Crappie",
        answer4: "The Cod",
        correct: "The Walleye"
    },
    {
        question: "What does Minnesota's name stand for in Dakota?",
        answer1: "Clear Blue Water",
        answer2: "White Water",
        answer3: "Curling Water",
        answer4: "Big Water",
        correct: "Clear Blue Water"
    },
    {
        question: "What is the Northernmost point of Minnesota?",
        answer1: "Angle Inlet",
        answer2: "Duluth",
        answer3: "Ely",
        answer4: "Bemidji ",
        correct: "Angle Inlet"
    }
];
 
 
// Functions
 
 
function endGame() {
    questionsEl.textContent = "Recent Attempts";
    let scores = correct;
    let scoresEl = document.getElementById("scores");
    scoresEl.textContent = scores + " correct";
    timerEl.textContent = "";
}
 
 
function timer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = "Time: " + secondsLeft + " seconds remaining.";
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}
 
 
function evalAnswer(event) {
    if (questions[questDis].correct === event.target.textContent){
        correct++;
    }
    else {
        secondsLeft = secondsLeft - 10;
    }
    questDis++;
    if (questDis === questions.length)
    {
        endGame();
    }
    else {
        theGame();
    }
}
 
 
function theGame() {
    questionsEl.textContent = questions[questDis].question;
    answerBtn1.textContent = questions[questDis].answer1;
    answerBtn2.textContent = questions[questDis].answer2;
    answerBtn3.textContent = questions[questDis].answer3;
    answerBtn4.textContent = questions[questDis].answer4;
}
 
 
function startGame() {
    timer()
    theGame()
}
 
 
startBtn.addEventListener("click", startGame);
answerBtn1.addEventListener("click", evalAnswer);
answerBtn2.addEventListener("click", evalAnswer);
answerBtn3.addEventListener("click", evalAnswer);
answerBtn4.addEventListener("click", evalAnswer);
SubmitBtn.addEventListener("click", function(){
    answerBtn1.textContent = theName;
});
