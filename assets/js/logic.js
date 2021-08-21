// Get a handle on html elements
var next = document.getElementById("next");
var printedCountdown = document.getElementById("timer");
var timerContainer = document.getElementById("timerContainer");
var questionPrompt = document.getElementById("question-prompt");
var answerA = document.getElementById("answer-A");
var answerB = document.getElementById("answer-B");
var answerC = document.getElementById("answer-C");
var answerD = document.getElementById("answer-D");
var answerAValue = document.getElementById("choice-A");
var answerBValue = document.getElementById("choice-B");
var answerCValue = document.getElementById("choice-C");
var answerDValue = document.getElementById("choice-D");
var form = document.getElementById("overall-Container");
var endBox = document.getElementById("endBox");
var header = document.getElementById("h1");
var scoreContainer = document.getElementById('score-Container');
var scoreDisplay = document.getElementById("scoreDisplay");
var submit = document.getElementById("submitScore");
var bestScore = document.getElementById("bestScore");
var bestScorePrintedText = document.getElementById("bestScorePrintedText");


// Create a confirm box and store it in variable
var confirmation = confirm("You have 1min to complete all 5 questions, timer starts when you click 'OK', GoodLuck!")

// start timer
var timerCounter = 60;
var countDown = setInterval(function() {
    printedCountdown.textContent = timerCounter;
    timerCounter--;
    // if timer equals 0, stop timer.
    if (timerCounter < 0) {
        clearInterval(countDown);
        alert("This is not the end, study harder and attack it again!");
        // When user clicks "OK" the quiz should start over
        location.reload();
    }
},1000);

//Create an array
var questions = [
    "What does the acronym 'API' stand for?",
    "Which statement best describes a callback function?",
    "When creating a new element via Javascript, what method must we use add it to the document?",
    "If x = 1 & y = 4 & sum = (y%2)x, what would sum output?", // Trick Question
    "x = 2 / {console.log(X) / What does the code output?"
]
    // Populate first question
if(confirmation) {
    questionPrompt.textContent = questions[0];
}

bestScorePrintedText.textContent;
bestScore.textContent = localStorage.getItem("score");

    // Create a score variable
    var score = 0;

    // Populate the answers for first question

if (questionPrompt.textContent === questions[0]) {
    answerA.textContent = "Application Programming Interweb";
    answerB.textContent = "Application Procedure Interface";
    answerC.textContent = "Application Programming Interface";
    answerD.textContent = "Application Programming Instance";
    // When user selects an option and clicks next, a function will run a validation
    function validation(event) {
        event.preventDefault();
        // if the next question is equal to the first array element and the correct value is selected, add 20 points to the score variable
        if (questions[0] === "What does the acronym 'API' stand for?" && answerCValue.checked) {
            score += 20;
            nextQuestion();
            console.log(score); //TESTING SCORE VALUE
            // If the incorrect answer is selected, subtract 10 points
        } else if (questions[0] === "What does the acronym 'API' stand for?" && !answerCValue.checked) {
            if (score === 0) {
                score = 0;
                 // If the incorrect answer is selected, subtract 10s from the clock
                timerCounter -= 10;
                nextQuestion();
                console.log(score); //TESTING SCORE VALUE
            } else {
                // If the incorrect answer is selected, subtract 10s from the clock
                timerCounter -= 10;
                score -= 10;
                nextQuestion();
                console.log(score); //TESTING SCORE VALUE
            } // Next Question
        } else if (questions[0] === "Which statement best describes a callback function?" && answerAValue.checked) {
            score += 20;
            nextQuestion();
            console.log(score); //TESTING SCORE VALUE
        } else if (questions[0] === "Which statement best describes a callback function?" && !answerAValue.checked) {
            if (score === 0) {
                 // If the incorrect answer is selected, subtract 10s from the clock
                score = 0;
                timerCounter -= 10;
                nextQuestion();
                console.log(score); //TESTING SCORE VALUE
            } else {
                 // If the incorrect answer is selected, subtract 10s from the clock
                timerCounter -= 10;
                score -= 10;
                nextQuestion();
                console.log(score); //TESTING SCORE VALUE
            } // Next Question
        } else if (questions[0] === "When creating a new element via Javascript, what method must we use add it to the document?" && answerDValue.checked) {
            score += 20;
            nextQuestion();
            console.log(score); //TESTING SCORE VALUE
        } else if (questions[0] === "When creating a new element via Javascript, what method must we use add it to the document?" && !answerDValue.checked) {
            if (score === 0) {
                score = 0;
                timerCounter -= 10;
                nextQuestion();
                console.log(score); //TESTING SCORE VALUE
            } else {
                score -= 10;
                timerCounter -= 10
                nextQuestion();
                console.log(score); //TESTING SCORE VALUE
            } // Next Question
        } else if (questions[0] === 'If x = 1 & y = 4 & sum = (y%2)x, what would sum output?' && answerBValue.checked) {
            score += 20;
            nextQuestion();
            console.log(score); //TESTING SCORE VALUE
        } else if (questions[0] === 'If x = 1 & y = 4 & sum = (y%2)x, what would sum output?' && !answerBValue.checked) {
            if (score === 0) {
                score = 0;
                timerCounter -= 10;
                nextQuestion();
                console.log(score); //TESTING SCORE VALUE
            } else {
                score -= 10
                timerCounter -= 10
                nextQuestion();
                console.log(score); //TESTING SCORE VALUE
            } // Next Question
        } else if (questions[0] === 'x = 2 / {console.log(X) / What does the code output?' && answerAValue.checked) {
            score += 20;
            nextQuestion();
            console.log(score); //TESTING SCORE VALUE
        } else if (questions[0] === 'x = 2 / {console.log(X) / What does the code output?' && !answerAValue.checked) {
            if (score === 0) {
                score = 0;
                timerCounter -= 10;
                nextQuestion();
                console.log(score); //TESTING SCORE VALUE
            } else {
                score -= 10;
                timerCounter -= 10;
                nextQuestion();
                console.log(score); //TESTING SCORE VALUE
            }
        } // If user completes quiz, display a blank screen
        if (questions.length === 0) {
            clearInterval(countDown);
            form.style.display="none";
            timerContainer.style.display="none";
            header.style.display="none";
            // Display a box that contains results of quiz
            endBox.style.display="block";
            scoreDisplay.textContent = score;
            submit.addEventListener('click', function() {
                localStorage.setItem('score', score);
                alert("Score has been recorded");
                location.reload();
            })
            
        }

    }
    // Run validation to see if answer was correct
    next.addEventListener('click', validation);
}

////////////////////// Function Definition //////////////////////

    // When I click the next button, the page should not refresh
function nextQuestion() {

    // When switching to the next question, clear previous answer choice values
    answerAValue.checked = false;
    answerBValue.checked = false;
    answerCValue.checked = false;
    answerDValue.checked = false;
    
    // When I click the next button, the answered question should be removed from list

    questions.shift();

    // When I click the next button, I should be presented with the next question
    questionPrompt.textContent = questions[0];
    // As I am presented with the next question, I should be presented with corresponding answers
    if (questionPrompt.textContent === 'Which statement best describes a callback function?') {
        answerA.textContent = "A function that is passed as an argument to another function parameter";
        answerB.textContent = "A function that invokes itself";
        answerC.textContent = "A function that is executed later in our code";
        answerD.textContent = "A function that holds no name";
    } else if (questionPrompt.textContent === 'When creating a new element via Javascript, what method must we use add it to the document?') {
        answerA.textContent = "group()";
        answerB.textContent = "add()";
        answerC.textContent = "attach()";
        answerD.textContent = "append()";
    } else if (questionPrompt.textContent === 'If x = 1 & y = 4 & sum = (y%2)x, what would sum output?') {
        answerA.textContent = "undefined";
        answerB.textContent = "0";
        answerC.textContent = "1";
        answerD.textContent = "5";
    } else if (questionPrompt.textContent === "x = 2 / {console.log(X) / What does the code output?") {
        answerA.textContent = "2";
        answerB.textContent = "undefined";
        answerC.textContent = "2x";
        answerD.textContent = "2X";
    }
}