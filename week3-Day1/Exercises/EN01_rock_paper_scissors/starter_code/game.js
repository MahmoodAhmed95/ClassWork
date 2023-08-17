// Create a function that determines the computer choice.  It should return one of the three values: 'rock', 'paper', or 'scissors'
function computerChoice() {
  let choices = ["rock", "paper", "scissors"];

  return choices[Math.floor(Math.random() * choices.length)];
}

/* Create a function that compares the user's selection to the computer's selection.  It should then output the opponent's choice to #computerSelection and display who is the winner.

 */
function compare(me, opponent) {
  let click = me.target.id;
  opponent = computerChoice();
  let a = document.querySelector("#computerSelection");
  if (click == "rock" && opponent == "rock") {
    a.innerText = opponent + " " + "try again";
  } else if (click == "rock" && opponent == "paper") {
    a.innerText = opponent + " " + "computer wins";
  } else if (click == "rock" && opponent == "scissors") {
    a.innerText = opponent + " " + "you win";
  } else if (click == "paper" && opponent == "rock") {
    a.innerText = opponent + " " + "you win";
  } else if (click == "paper" && opponent == "paper") {
    a.innerText = opponent + " " + "try again";
  } else if (click == "paper" && opponent == "scissors") {
    a.innerText = opponent + " " + "computer wins";
  } else if (click == "scissors" && opponent == "rock") {
    a.innerText = opponent + " " + "computer wins";
  } else if (click == "scissors" && opponent == "paper") {
    a.innerText = opponent + " " + "you win";
  } else if (click == "scissors" && opponent == "scissors") {
    a.innerText = opponent + " " + "try again";
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
  // Bind a click event onto each of the three buttons.  It should run the compare function and then put the result to the #decsision id in the html
  let playerScoreSpan = document.querySelectorAll(".gameButton");
  for (let i = 0; i < playerScoreSpan.length; i++) {
    playerScoreSpan[i].addEventListener("click", compare);
  }
});
