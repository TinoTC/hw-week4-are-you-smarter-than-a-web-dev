var submit = document.getElementById("next");

confirm("You have 10mins to complete all 20 questions, timer starts when you click 'OK', GoodLuck!")

function nextQuestion(event) {
    event.preventDefault();
}

submit.addEventListener("click", nextQuestion);