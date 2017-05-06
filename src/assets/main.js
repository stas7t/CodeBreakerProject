let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if (answer.value === "" || attempt.value === "") {
      setHiddenFields();
    }

    if (validateInput(input.value)) {
        attempt.value = Number(attempt.value) + 1;
    } else {
        return false;
    }

    if (getResults(input.value)) {
        setMessage("You Win! :)");
        showAnswer(true);
        showReplay();
    } else {
        if (Number(attempt.value) >= 10) {
            setMessage("You Lose! :(");
            showAnswer(false);
            showReplay();
        } else {
            setMessage("Incorrect, try again.");
        }
    }

}

//implement new functions here
function setHiddenFields() {
    answer.value = Math.floor(Math.random()*10000);
    while (answer.value.length < 4) {
      answer.value = "0" + answer.value;
    }
    attempt.value = 0;
}

function setMessage(message) {
    document.getElementById('message').innerHTML = message;
}

function validateInput(input) {
    if (input.length === 4) {
        return true;
    } else {
        setMessage("Guesses must be exactly 4 characters long.");
        return false;
    }
}

function getResults(input) {
    let row = "<div class='row'><span class='col-md-6'>" + input +
    "</span><div class='col-md-6'>";
    let guessed = 0;

    for (var i = 0; i < input.length; i++) {
      char = input[i];
      if (answer.value.includes(char)) {
          if (char === answer.value.charAt(i)) {
            guessed += 1;
            row += "<span class='glyphicon glyphicon-ok'></span>";
          } else {
            row += "<span class='glyphicon glyphicon-transfer'></span>";
          }
      } else {
          row += "<span class='glyphicon glyphicon-remove'></span>";
      }
    }
    row += "</div></div>";
    document.getElementById('results').innerHTML += row;

    if (guessed === input.length) {
        return true;
    } else {
        return false;
    }
}

function showAnswer(result) {
    if (result) {
        document.getElementById("code").class += " success";
    } else {
        document.getElementById("code").class += " failure";
    }
    document.getElementById("code").innerHTML = answer.value;
}

function showAnswer() {
    document.getElementById("guessing-div").style.display = "none";
    document.getElementById("replay-div").style.display = "block";
}
