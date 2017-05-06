let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}

//implement new functions here
function setHiddenFields() {
  if (answer.value === "" || attempt.value === "") {
      answer.value = Math.floor(Math.random()*10000);
      while (answer.value.length < 4) {
        answer.value = "0" + answer.value;
      }
      attempt.value = 0;
  }
}

setHiddenFields()
