function getComputerChoice() {
  // select a random number 0, 1, or 2
  let choice = Math.floor(Math.random()*3);
  console.log(choice);
  // convert the random number to a choice between rock, paper, or scissors
  switch (choice) {
    case 0: 
      return "rock";
    case 1: 
      return "paper";
    case 2: 
      return "scissors";
  }
}

function getHumanChoice() {
  // ask for user input
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

// play one round; log the result and return the winner
function playRound(humanChoice, computerChoice) {
  switch (true) {
    case ((humanChoice == "rock") && (computerChoice == "paper")):
      console.log("You lose! Paper beats Rock.")
      return "computer";
    case ((humanChoice == "paper") && (computerChoice == "scissors")):
      console.log("You lose! Scissors beats Paper.")
      return "computer";
    case ((humanChoice == "scissors") && (computerChoice == "rock")):
      console.log("You lose! Rock beats Scissors.")
      return "computer";
    case ((humanChoice == "rock") && (computerChoice == "scissors")):
      console.log("You win! Rock beats Scissors.")
      return "human";
    case ((humanChoice == "paper") && (computerChoice == "rock")):
      console.log("You win! Paper beats Rock.")
      return "human";
    case ((humanChoice == "scissors") && (computerChoice == "paper")):
      console.log("You win! Scissors beats Paper.")
      return "human";
    default:
      console.log("It's a tie!");
      return "tie";
    }
}

// keep track of players scores
let humanScore = 0;
let computerScore = 0;

const computerChoice = getComputerChoice();
console.log("computer choice = " + computerChoice);

const humanChoice = getHumanChoice();
console.log("human choice = " + humanChoice);

let winner = playRound(humanChoice, computerChoice);
console.log("winner is " + winner);

// increment score for winning player
switch (winner) {
  case("human"):
    humanScore++;
    break;
  case("computer"):
    computerScore++;
    break;
  default:
    break
}

console.log("human score is " + humanScore);
console.log("computer score is " + computerScore);
