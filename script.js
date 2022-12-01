"use strict";

const btnArray = [...document.querySelectorAll(".btn")];
const score = document.querySelector(".score");

const getComputerChoice = function () {
  const x = Math.floor(Math.random() * 3) + 1;
  if (x === 1) return "Rock";
  if (x === 2) return "Paper";
  if (x === 3) return "Scissors";
};

let computerChoice;
let userChoice;

const startGame = function (e) {
  const userChoice = e.target.dataset.answer;
  const computerChoice = getComputerChoice().toLowerCase();

  const validAnswer = ["rock", "paper", "scissors"];
  let result;
  if (!validAnswer.includes(userChoice)) {
    alert("Not a valid choice!");
    return;
  }

  if (computerChoice === userChoice)
    result = `${userChoice} vs ${computerChoice}... Its a draw!`;

  // user pick rock
  if (userChoice === "rock" && computerChoice === "paper") {
    result = "Paper beat rock. You Lose!";
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    result = "Rock beat scissors. You Win!";
  }

  // user pick paper
  if (userChoice === "paper" && computerChoice === "scissors") {
    result = "scissors beat paper. You Lose!";
  } else if (userChoice === "paper" && computerChoice === "rock") {
    result = "paper beat rock. You Win!";
  }

  // User pick Scissors
  if (userChoice === "scissors" && computerChoice === "rock") {
    result = "rock beat scissors. You Lose!";
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    result = "scissors beat paper. You Win!";
  }
  return result;
};

// for (let i = 0; i < 5; i++) {
//   console.log(startGame());
// }
console.log(btnArray);
btnArray.forEach((btn) => {
  btn.addEventListener("click", startGame);
});
