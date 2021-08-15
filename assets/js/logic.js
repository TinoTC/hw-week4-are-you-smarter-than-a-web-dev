//Storing DOM elements inside javascript variables for handling events//

var submit = document.getElementById("next");
var printedCountdown = document.getElementById("timer");

//Storing DOM elements inside javascript variables for handling events//

//Alert that's stored inside a variable and starts timer when confirm returns true//

var confirmation = confirm("You have 10mins to complete all 20 questions, timer starts when you click 'OK', GoodLuck!")

//Alert that's stored inside a variable and starts timer when confirm returns true//

//Function that prevents the form from posting back and refreshing the page//

function nextQuestion(event) {
    event.preventDefault();
}

function timeRemaining() {
    var timeLeft = 5;

    var timer = setInterval(function() {
        printedCountdown.textContent = timeLeft;
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(timer);
            // FAILURE Message //
        }

    }, 1000)

}

//Function that prevents the form from posting back and refreshing the page//

submit.addEventListener("click", nextQuestion);

if (confirmation) {
    timeRemaining();
}