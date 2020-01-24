var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var counter = document.getElementById("counter");
var progress = document.getElementById("progress");
var highscores = document.getElementById("highscores");

var answer0 = document.getElementById("0");
var answer1 = document.getElementById("1");
var answer2 = document.getElementById("2");
var answer3 = document.getElementById("3");

let questions = [
    {
        question: "Commonly used data types are known as:",
        answers: ["Strings",
            "Booleans",
            "Alerts",
            "Numbers"],
        correct: "A"
    },
    {
        question: "The condition in an if else statement is enclosed within ____",
        answers: ["Quotes",
            "Curly Brackets",
            "Parenthesis",
            "Square Brackets"],
        correct: "C"
    },
    {
        question: "Arrays in Javascript can be used to store ___",
        answers: ["Numbers and Strings",
            "Other Arrays",
            "Booleans",
            "All of the Above"],
        correct: "D"
    },
    {
        question: "String values must be enclosed within ___ when being assigned to variables.",
        answers: ["Commas",
            "Curly Brackets",
            "Quotes",
            "Parenthesis"],
        correct: "C"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["Javascript",
            "Terminal|Bash",
            "For Loops",
            "console.log"],
        correct: "D"
    }
];

var lastqIndex = questions.length - 1;
var runningqIndex = 0;

function renderQuestions() {
    var q = questions[runningqIndex];
    console.log("Q", q.question);
    let p = document.getElementById("question");
    p.innerHTML = q.question;
    document.getElementById("question").append("p");
    for (var i = 0; i < 4; i++) {
        let li = document.createElement("li");
        li.innerHTML = q.answers[i];
        document.getElementById(i).append(li);
    }
    startTimer();


}

runningqIndex = 0;
var score = 0;

function startTimer() {
    var timer = 75;
    console.log('button', document.querySelector('#start'));
    var timerid = setInterval(function () {
        timer--;
        counter.innerHTML = timer;
        console.log(timer);
        if (timer <= 0) {
            counter.innerHTML = "Time's Up!";
            clearInterval(timerid);
        } else {
            if (runningqIndex < lastqIndex) {
                runningqIndex++;
            } else {
                setTimeout(timer - 10);
            }
        }
    }, 1000);
}

start.addEventListener("click", startQuiz);

function startQuiz() {
    start.style.display = "none";
    renderQuestions();
    quiz.style.display = "block";
}
