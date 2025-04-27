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

function getplayerChoice() {
  let choice = prompt("Rock, paper, scissors, shoot!");
  // keep asking for user input until it is valid
  while (true) {
    // make the input case-insensitive by transforming to lowercase
    choice = choice.toLowerCase();
    if (choice == "rock" || choice == "paper" || choice == "scissors") {
      return choice;
    } else {
      choice = prompt("You must choose rock, paper, or scissors");
    }
  }
}

function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

// function to play one round, log the result, and increment the winner's score
function playRound(playerChoice, computerChoice) {
  // tie
  if (playerChoice == computerChoice) {
    roundWinner = "tie";
    console.log("It's a tie!");
    return;
  }
  // computer wins
  else if (
    (playerChoice == "rock") && (computerChoice == "paper") ||
    (playerChoice == "paper") && (computerChoice == "scissors") ||
    (playerChoice == "scissors") && (computerChoice == "rock")
  ) {
    computerScore++;
    console.log(`You lose! ${capitalizeFirstLetter(playerChoice)} is beaten by ${capitalizeFirstLetter(computerChoice)}!`)
  }
  // human wins
  else if (
    (playerChoice == "rock") && (computerChoice == "scissors") ||
    (playerChoice == "paper") && (computerChoice == "rock") ||
    (playerChoice == "scissors") && (computerChoice == "paper")
  ) {
    playerScore++;
    console.log(`You win! ${capitalizeFirstLetter(playerChoice)} beats ${capitalizeFirstLetter(computerChoice)}!`)
  }
}

// keep track of players scores
let playerScore = 0;
let computerScore = 0;
let roundWinner = "";  

// play 5 rounds
for (let i = 1; i <= 5; i++) {
  console.log("Round " + i);
  const computerChoice = getComputerChoice();
  console.log("computer choice = " + computerChoice);

  const playerChoice = getplayerChoice();
  console.log("human choice = " + playerChoice);

  playRound(playerChoice, computerChoice);

  console.log("human score is " + playerScore);
  console.log("computer score is " + computerScore);
}