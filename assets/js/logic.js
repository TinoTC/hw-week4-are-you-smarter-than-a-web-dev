// Get a handle on html elements
var next = document.getElementById("next");
var printedCountdown = document.getElementById("timer");
var questionPrompt = document.getElementById("question-prompt");
var answerA = document.getElementById("answer-A");
var answerB = document.getElementById("answer-B");
var answerC = document.getElementById("answer-C");
var answerD = document.getElementById("answer-D");
var answerAValue = document.getElementById("choice-A");
var answerBValue = document.getElementById("choice-B");
var answerCValue = document.getElementById("choice-C");
var answerDValue = document.getElementById("choice-D");

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
    "What does the acronym 'API' stand for?",
    "Which statement best describes a callback function?",
    "When creating a new element via Javascript, what method must we use add it to the document?",
    "Test01",
    "Test02"
]
    // Populate first question
if(confirmation) {
    questionPrompt.textContent = questions[0];
}

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
    } else if (questionPrompt.textContent === 'Test01') {
        answerA.textContent = "This is answer A for prompt 4";
        answerB.textContent = "This is answer B for prompt 4";
        answerC.textContent = "This is answer C for prompt 4";
        answerD.textContent = "This is answer D for prompt 4";
    } else if (questionPrompt.textContent === 'Test02') {
        answerA.textContent = "This is answer A for prompt 5";
        answerB.textContent = "This is answer B for prompt 5";
        answerC.textContent = "This is answer C for prompt 5";
        answerD.textContent = "This is answer D for prompt 5";
    }
}