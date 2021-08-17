// Get a handle on html elements
var next = document.getElementById("next");
var printedCountdown = document.getElementById("timer");
var questionPrompt = document.getElementById("question-prompt");
var answerA = document.getElementById("answer-A");

// Create a confirm box and store it in variable
var confirmation = confirm("You have 1min to complete all 5 questions, timer starts when you click 'OK', GoodLuck!")

// start timer
var timerCounter = 60;
var countDown = setInterval(function() {
    printedCountdown.textContent = timerCounter;
    timerCounter--;
    // if timer equals 0, stop timer.
},1000);

//Create an array
var questions = [
    "What is the output of the following code?",
    "Which example best describes a callback function?",
    "What is an object?",
    "Test01",
    "Test02"
]
    // Populate first question
if(confirmation) {
    questionPrompt.textContent = questions[Math.floor(Math.random()*3)];
}
// Populate the answers for first question
switch(questions[0]) {
    case "What is the output of the following code?": 
    break;
    default: console.log("idk");
}
