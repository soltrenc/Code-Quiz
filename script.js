var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var counter = document.getElementById("counter");
var timer = document.getElementById("timer");
var progress = document.getElementById("progress");
var highscores = document.getElementById("highscores");

var answerA = document.getElementById("A");
var answerB = document.getElementById("B");
var answerC = document.getElementById("C");
var answerD = document.getElementById("D");

let questions = [
    {
        question: "Commonly used data types are known as:",
        answerA: "Strings",
        answerB: "Booleans",
        answerC: "Alerts",
        answerD: "Numbers",
        correct: "A"
    },
    {
        question: "The condition in an if else statement is enclosed within ____",
        answerA: "Quotes",
        answerB: "Curly Brackets",
        answerC: "Parenthesis",
        answerD: "Square Brackets",
        correct: "C"
    },
    {
        question: "Arrays in Javascript can be used to store ___",
        answerA: "Numbers and Strings",
        answerB: "Other Arrays",
        answerC: "Booleans",
        answerD: "All of the Above",
        correct: "D"
    },
    {
        question: "String values must be enclosed within ___ when being assigned to variables.",
        answerA: "Commas",
        answerB: "Curly Brackets",
        answerC: "Quotes",
        answerD: "Parenthesis",
        correct: "C"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answerA: "Javascript",
        answerB: "Terminal|Bash",
        answerC: "For Loops",
        answerD: "console.log",
        correct: "D"
    }
];

var lastqIndex = questions.length - 1;
var runningqIndex = 0;
function renderQuestions() {
    var q = questions[runningqIndex];
    question.innerHTML = "<p>" + q.question + "</p>";
    answerA.innerHTML = q.answerA;
    answerB.innerHTML = q.answerB;
    answerC.innerHTML = q.answerC;
    answerD.innerHTML = q.answerD;

}

runningqIndex = 0;
renderQuestions();

var score = 0;

function checkAnswer(answer) {
    if (questions[runningqIndex].correct == answer) {
        score++;
    } else {
        answerIsWrong(deductTimer)
    }
}
var timer = 75;
var count = 0;

function counterRender() {
    if (count <= timer) {
        counter.innerHTML = count;
        count++;
    }
} 
    else {
    count = 0;
    wrongAnswer();
    if (runningqIndex < lastqIndex) {
        runningqIndex++;
        questionRender();
    } else {
        setTimeout(timer - 10);
    }
    setInterval(counterRender, 7500);

}
start = document.getElementById("start").addEventListener("click", startQuiz);

let Timer;

function startQuiz() {
    start.style.display = "none";
    counterRender();
    questionRender();
    quiz.style.display = "block";
}
