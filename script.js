"use strict";

const btnArray = [...document.querySelectorAll(".btn")];
const score = document.querySelector(".score");
const message = document.querySelector(".round-message");
const computerPreview = document.querySelector(".computer-preview");
const finalmessage = document.querySelector(".game-state");
const btnRestart = document.querySelector(".btn-restart");
let currentScore = 0;
let userChoice;
let computerChoice;

const getComputerChoice = function () {
  const x = Math.floor(Math.random() * 3) + 1;
  if (x === 1) return "rock";
  if (x === 2) return "paper";
  if (x === 3) return "scissors";
};

const updateScore = function () {
  currentScore += 1;
  score.textContent = currentScore;
};

const updateMessage = function (userChoice, computerChoice, result) {
  if (result === "win")
    message.textContent = `${userChoice} beats ${computerChoice}. You ${result}!`;

  if (result === "lose")
    message.textContent = `${computerChoice} beats ${userChoice}. You ${result}!`;

  if (result === "draw")
    message.textContent = `${userChoice} vs ${computerChoice}... Its a ${result}!`;
};

const startGame = function (e) {
  const userChoice = e.target.dataset.answer;
  const computerChoice = getComputerChoice();
  computerPreview.src = `./img/${computerChoice}.png`;

  if (computerChoice === userChoice) {
    updateMessage(userChoice, computerChoice, "draw");
  }
  // user pick rock
  if (userChoice === "rock" && computerChoice === "paper") {
    updateMessage(userChoice, computerChoice, "lose");
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    updateMessage(userChoice, computerChoice, "win");
    updateScore();
  }

  // user pick paper
  if (userChoice === "paper" && computerChoice === "scissors") {
    updateMessage(userChoice, computerChoice, "lose");
  } else if (userChoice === "paper" && computerChoice === "rock") {
    updateMessage(userChoice, computerChoice, "win");
    updateScore();
  }

  // User pick Scissors
  if (userChoice === "scissors" && computerChoice === "rock") {
    updateMessage(userChoice, computerChoice, "lose");
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    updateMessage(userChoice, computerChoice, "win");
    updateScore();
  }

  // User win the game
  if (currentScore === 5)
    finalmessage.textContent = "You have won against this shitty PC";
  //else finalmessage.textContent = "Keep playing!";
};

const init = function () {
  score.textContent = 0;
  message.textContent = "";
  computerPreview.src = "";
  finalmessage.textContent = "Keep playing!";
};

btnArray.forEach((btn) => {
  btn.addEventListener("click", startGame);
});

btnRestart.addEventListener("click", init);

init();
