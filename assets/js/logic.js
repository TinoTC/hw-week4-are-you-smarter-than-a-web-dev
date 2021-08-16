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

//Function that prevents the form from posting back and refreshing the page//

//Array storing cancel messages when confirmations returns false//

var cancellations = [
    "Self-doubt is your worst enemy, come back when your ready to believe in yourself.",
    "Success only comes to those who embrace failure.",
    "To soar past the stars, you must first jump, to play it safe means standing by watching others find happiness.",
]

//Array storing cancel messages when confirmations returns false//


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

submit.addEventListener("click", nextQuestion);

if (confirmation) {
    timeRemaining();
} else {
    alert(cancellations[Math.floor(Math.random()*3)]);
    document.body.style.visibility="hidden";
    document.getElementById("cancellation-Message").style.visibility="visible";
}