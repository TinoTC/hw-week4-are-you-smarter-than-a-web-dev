// Get a handle on html elements
var next = document.getElementById("next");
var printedCountdown = document.getElementById("timer");
var questionPrompt = document.getElementById("question-prompt");
var answerA = document.getElementById("answer-A");
var answerB = document.getElementById("answer-B");
var answerC = document.getElementById("answer-C");
var answerD = document.getElementById("answer-D");

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
    questionPrompt.textContent = questions[Math.floor(Math.random()*5)];
}
    // Populate the answers for first question
if (questionPrompt.textContent === questions[0]) {
    answerA.textContent = "This is answer A for prompt 1";
    answerB.textContent = "This is answer B for prompt 1";
    answerC.textContent = "This is answer C for prompt 1";
    answerD.textContent = "This is answer D for prompt 1"
}
// Populate answers for second question