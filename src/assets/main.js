let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}

//implement new functions here
function setHiddenFields() {
  if (answer === "" || attempt === "") {
      answer = Math.floor(Math.random()*10000);
      while (answer.length < 4) {
        answer = "0" + answer;
      }
      attempt = 0;
  }
}
