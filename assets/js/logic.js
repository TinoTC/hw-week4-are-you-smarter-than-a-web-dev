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
    "Which example best describes a callback function?",
    "What is an object?",
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

        // If correct answer is chosen for first question, add 20 points to score variable
        if (answerCValue.checked) {
            score += 20;
        // If correct answer is chosen, proceed to next question
            nextQuestion();
            console.log(score);

        // When a user selects a wrong answer, subtract 10secs on the clock
        } else {
            timerCounter -= 10;
        // If answer is incorrect, take 10 points from total points accumulated
        // If points are equal to zero, points remain at 0 and don't go negative
            if (score === 0) {
                score = 0 
            } else {
                score -= 10;
            }
        // After answering the question, move to next question
            nextQuestion();
            console.log(score);
        }

        // Populate question 2
        
        // If correct answer (A) is chosen for second question, add 20 points and move to next question
        if (answerAValue.checked) {
            score += 20;
            nextQuestion();
            console.log(score);
        } else {
        // When a user selects a wrong answer, subtract 10secs on the clock
        timerCounter -= 10;
        // If answer is incorrect, take 10 points from total points accumulated
        // If points are equal to zero, points remain at 0 and don't go negative
        if (score === 0) {
            score = 0 
        } else {
            score -= 10;
        }
        }
    }
    // Run validation to see if answer was correct
    next.addEventListener('click', validation);
}

// Populate second question
    // When I click the next button, the page should not refresh
function nextQuestion(event) {

    // When switching to the next question, clear previous answer choice values
    answerAValue.checked = false;
    answerBValue.checked = false
    answerCValue.checked = false
    answerDValue.checked = false
    
    // When I click the next button, the answered question should be removed from list
    questions.shift();
    // When I click the next button, I should be presented with the next question
    questionPrompt.textContent = questions[0];
    // As I am presented with the next question, I should be presented with corresponding answers
    if (questionPrompt.textContent === 'Which example best describes a callback function?') {
        answerA.textContent = "A function that is passed into another function parameter";
        answerB.textContent = "This is answer B for prompt 2";
        answerC.textContent = "This is answer C for prompt 2";
        answerD.textContent = "This is answer D for prompt 2";
    } else if (questionPrompt.textContent === 'What is an object?') {
        answerA.textContent = "This is answer A for prompt 3";
        answerB.textContent = "This is answer B for prompt 3";
        answerC.textContent = "This is answer C for prompt 3";
        answerD.textContent = "This is answer D for prompt 3";
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