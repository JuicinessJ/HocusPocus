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
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        correct: ""
    },
    {
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        correct: ""
    },
    {
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        correct: ""
    },
    {
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        correct: ""
    },
    {
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        correct: ""
    },
    {
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        correct: ""
    },
    {
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        correct: ""
    },
    {
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        correct: ""
    },
    {
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        correct: ""
    },
    {
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        correct: ""
    },
    {
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        correct: ""
    },
    {
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        correct: ""
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
        timerEl.textContent = secondsLeft + "remaining.";
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

function theGame() {
    timer();
    for (let x = 0; x < questions.length; x++)
    {
        questionsEl.textContent = questions[x].question;
        document.getElementById("answer1") = questions[x].textContent.answer1;
        document.getElementById("answer2") = questions[x].textContent.answer2;
        document.getElementById("answer3") = questions[x].textContent.answer3;
        document.getElementById("answer4") = questions[x].textContent.answer4;
        let correct = 0;
        answerBtn1.addEventListener("click", function(){
            if (answer1 === questions.correct)
            {
                correct++;
            }
            return correct;
        })
        answerBtn2.addEventListener("click", function(){
            if (answer2 === questions.correct)
            {
                correct++;
            }
            return correct;
        })
        answerBtn3.addEventListener("click", function(){
            if (answer3 === questions.correct)
            {
                correct++;
            }
            return correct;
        })
        answerBtn4.addEventListener("click", function(){
            if (answer4 === questions.correct)
            {
                correct++;
            }
            return correct;
        })
    }
    endGame();
    return correct;
}


startBtn.addEventListener("click", theGame);
