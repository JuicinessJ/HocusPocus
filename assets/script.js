// Elements
let timerEl = document.querySelector("#time");
let questionsEl = document.querySelector(".questions");
let startBtn = document.querySelector("#start");
let answers = document.querySelector('.answers')
let answerBtn1 = document.querySelector("#answer1");
let answerBtn2 = document.querySelector("#answer2");
let answerBtn3 = document.querySelector("#answer3");
let answerBtn4 = document.querySelector("#answer4");
let theName = document.getElementById("name");
let submitBtn = document.getElementById('submit');
let scoresEl = document.getElementById("scores");
let correct = 0;
let questDis = 0;
let secondsLeft = 60;
let attempts = 0;
let attemptsPoints = [];
let attemptsNames = [];

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

function submit() {
    //hides input box and submitBtn
    theName.style.display = 'none';
    submitBtn.style.display = 'none';

    //store name and displays name in a box with amount correct.
    localStorage.setItem('recentAttempts', theName);
    let points = localStorage.getItem('highScores');
    let names = localStorage.getItem('recentAttempts');

    /*saves attempts and name inside an array, idea is to somehow compute and find the largest value inside the array.
    which inturn should find the position inside that array to pair with name in the same position.*/
    attemptsPoints.push(points);
    attemptsNames.push(names);
    
    //sort by highest
    let highest = [];
    for (let x = 0; x <= attemptsPoints.length; x++) {
        for (let y = 0; y <= attemptsPoints.length; y++) {
            if (highest < attemptsPoints[y]) {
                highest[x] = attemptsPoints[y];
            }
        }
    }
    //or
    attemptsPoints.sort(function(a, b) {return b-a});

    //Displays text, name and points.
    questionsEl.textContent = "Recent Attempts";
    document.createElement('li').textContent = //the name + ": " + the score;

    //marks for attempts done. Only needed if want to keep displaying name to a minium
    attempts++;

    //issue ran into, Need to figure out if displaying name matter because when sorting attemptsPoints everything will run fine 
    //But matching the sorted scores to attemptsName will run into an issue assuming names will be different. 
    //Since you can not sort name unless I was to pair each name and points together
}


function endGame() {
    let scores = correct;
    scoresEl.textContent = scores + " correct";
    timerEl.textContent = "";
    localStorage.setItem('highScores', scores);
    document.querySelector('#questions').style.display = 'none';
    //displays an input box for name
    theName.style.display = 'block';

    //show submit button
    submitBtn.style.display = 'block';
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
    document.querySelector('#questions').style.display = 'block';
    startBtn.style.display = 'none';
}


startBtn.addEventListener("click", startGame);
answerBtn1.addEventListener("click", evalAnswer);
answerBtn2.addEventListener("click", evalAnswer);
answerBtn3.addEventListener("click", evalAnswer);
answerBtn4.addEventListener("click", evalAnswer);
submitBtn.addEventListener("click", submit);

// regular javascript object
// var highScores = JSON.parse(localStorage.getItem(highScore))
// var highScores = {
//     jb: "35",
//     zx: "77"
// }

// JSON.stringify(highScores) version for browsers
// var highScores = {
//     "jb": "35",
//     "zx": "77"
// }

// console.log(highScores.jb)
