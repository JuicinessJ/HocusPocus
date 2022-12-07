/* Quiz game
1. To start game need to create an listener event.
2. Once the event is trigger it'll run the startGame function.
3. Inside the startGame function it should change the display of the screen from the default starter to displaying questions, which should also start the startTimer function.
4. With 1 or 4 listener events inside each questions asked it'll run a findAnswer function to determine if answer selected was correct or incorrect.
5. After an answer is selected regardless if correct of incorrect it'll store the variable of correct or incorrect and proceed displaying the next question until all 8 have been displayed.
6. Which when it'll change screen and trigger the endGame function which will change screen from the questionnaire to results of how many correct over amount of questions ie. x/8.
6a. If timer was to run out it'll change screen by triggering the endGame function too with amount of questions answered correctly over amount of questions that should've been displayed.

Idea:
-
*/



// Var elements
let scoresEl = document.querySelector("#scores");
let timerEl = document.querySelector("#time");
let questionsEl = document.querySelector(".questions");
let startBtn = document.querySelector("#start");
let answerBtn = document.querySelector(".answers");
let answerBtn1 = document.querySelector("#answer1");
let answerBtn2 = document.querySelector("#answer2");
let answerBtn3 = document.querySelector("#answer3");
let answerBtn4 = document.querySelector("#answer4");

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
    questionsEl.textContent = "Game Over!"
    var scores = theGame();
    var scoresEl = document.querySelector("#highScores");
    scoresEl.textContent = scores;
}

function timer() {
    let secondsLeft = 60;
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = "Time: " + secondsLeft + " seconds remaining.";
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}


function evalAnswer(event) {
    console.log(event.target)
    //
    //take in eventListener and will determine if btn pressed is correct with an IF statement?
}


function theGame() {
        questionsEl.textContent = questions[x].question;
        answerBtn1.textContent = questions[x].answer1;
        answerBtn2.textContent = questions[x].answer2;
        answerBtn3.textContent = questions[x].answer3;
        answerBtn4.textContent = questions[x].answer4;
        answerBtn1.addEventListener("click", evalAnswer)
        answerBtn2.addEventListener("click", evalAnswer)
        answerBtn3.addEventListener("click", evalAnswer)
        answerBtn4.addEventListener("click", evalAnswer)
    endGame();
}


function startGame() {
    timer();
    theGame();
}

startBtn.addEventListener("click", startGame);

