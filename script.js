function getComputerChoice() {
  // select a random number 0, 1, or 2
  let choice = Math.floor(Math.random()*3);
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

function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

function playGame() {

  // keep track of players scores
  let humanScore = 0;
  let computerScore = 0;
  let roundWinner = "";

  // function to play one round, log the result, and increment the winner's score
  function playRound(humanChoice, computerChoice) {
    // tie
    if (humanChoice == computerChoice) {
      roundWinner = "tie";
      console.log("It's a tie!");
      return;
    }
    // computer wins
    else if (
      (humanChoice == "rock") && (computerChoice == "paper") ||
      (humanChoice == "paper") && (computerChoice == "scissors") ||
      (humanChoice == "scissors") && (computerChoice == "rock")
    ) {
      computerScore++;
      console.log(`You lose! ${capitalizeFirstLetter(humanChoice)} is beaten by ${capitalizeFirstLetter(computerChoice)}!`)
    }
    // human wins
    else if (
      (humanChoice == "rock") && (computerChoice == "scissors") ||
      (humanChoice == "paper") && (computerChoice == "rock") ||
      (humanChoice == "scissors") && (computerChoice == "paper")
    ) {
      humanScore++;
      console.log(`You win! ${capitalizeFirstLetter(humanChoice)} beats ${capitalizeFirstLetter(computerChoice)}!`)
    }
  }

  // play 5 rounds
  for (let i = 1; i <= 5; i++) {
    console.log("Round " + i);
    const computerChoice = getComputerChoice();
    console.log("computer choice = " + computerChoice);

    const humanChoice = getHumanChoice();
    console.log("human choice = " + humanChoice);

    playRound(humanChoice, computerChoice);

    console.log("human score is " + humanScore);
    console.log("computer score is " + computerScore);
  }
}

playGame();