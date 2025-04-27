// start game
let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;

// function to play one round and update the scores
function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  // tie
  if (playerChoice == computerChoice) {
    scoreMessage.textContent = `It's a tie! You both chose ${playerChoice}!`;
    return;
  }
  // computer wins
  else if (
    (playerChoice == "rock") && (computerChoice == "paper") ||
    (playerChoice == "paper") && (computerChoice == "scissors") ||
    (playerChoice == "scissors") && (computerChoice == "rock")
  ) {
    computerScore++;
    scoreMessage.textContent = `You lose! ${capitalizeFirstLetter(playerChoice)} is beaten by ${capitalizeFirstLetter(computerChoice)}!`;
  }
  // human wins
  else if (
    (playerChoice == "rock") && (computerChoice == "scissors") ||
    (playerChoice == "paper") && (computerChoice == "rock") ||
    (playerChoice == "scissors") && (computerChoice == "paper")
  ) {
    playerScore++;
    scoreMessage.textContent = `You win! ${capitalizeFirstLetter(playerChoice)} beats ${capitalizeFirstLetter(computerChoice)}!`;
  }
  playerScorePara.textContent = `Player: ${playerScore}`;
  computerScorePara.textContent = `Computer: ${computerScore}`;

  round.textContent = `Round ${roundNumber}`;
  roundNumber++;
}

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0: 
      return "rock";
    case 1: 
      return "paper";
    case 2: 
      return "scissors";
  }
}

function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

// UI
const round = document.querySelector("h2");
const scoreMessage = document.querySelector("h3");
const results = document.querySelector(".displayResults");
const playerScorePara = document.querySelector(".player-score");
const computerScorePara = document.querySelector(".computer-score");

// initiate a round when a button is clicked
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id);

    if (playerScore == 5 || computerScore == 5) {
      endGame();
    }
  })
})

function endGame() {
  if (playerScore == 5) {
    results.textContent = "You win the game!"
  }
  if (computerScore == 5) {
    results.textContent = "The computer wins the game!"
  }

  buttons.forEach(button => {
    button.disabled = true;
  })

  const restartButton = document.createElement("button");
  restartButton.textContent = "Restart Game";
  restartButton.style.display = "block";
  results.appendChild(restartButton);
  restartButton.addEventListener("click", restartGame);
}

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  roundNumber = 1;

  round.textContent = "Let's play!";
  scoreMessage.textContent = "First to score 5 points wins the game";

  playerScorePara.textContent = "Player: 0";
  computerScorePara.textContent = "Computer: 0";

  buttons.forEach(button => {
    button.disabled = false;
  })
  results.textContent = '';
};