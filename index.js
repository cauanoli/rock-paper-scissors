const possibleChoices = ["rock", "paper", "scissors"];

function game() {
  const numberOfRounds = 5;
  const scores = playRounds(numberOfRounds);
  const winner = getWinner(scores, numberOfRounds);
  const message = `Overall winner is ${winner.toUpperCase()}! Congratulations!`;

  console.log(message);
}

function getWinner(scores, numberOfRounds) {
  const winningScore = Math.floor(numberOfRounds / 2) + 1;
  const playerScore = scores.reduce((a, b) => a + b, 0);
  const winner = playerScore >= winningScore ? "player" : "computer";

  return winner;
}

function getComputerSelection() {
  const randomIndex = Math.floor(Math.random() * 3);

  return possibleChoices[randomIndex];
}

/* 
    Return true if players wins, false if the computers wins. 
    Return nulls if the playerSelection === computerSelection
*/
function playRound(playerSelection, computerSelection) {
  let isPlayerWinner = false;
  playerSelection = playerSelection.toLowerCase();

  if (playRound === computerSelection) return null;

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    isPlayerWinner = true;
  }

  return isPlayerWinner;
}

/*
Returns a score for a game of a given numberOfRounds
*/
function playRounds(numberOfRounds) {
  const scores = [];
  // Play a 5 round game
  for (let i = 0; i <= numberOfRounds - 1; i++) {
    let playerSelection = prompt("Make a choice: Rock, paper or scissors?");
    let computerSelection = getComputerSelection();
    let isValidSelection = possibleChoices.includes(
      playerSelection.toLocaleLowerCase()
    );

    while (!isValidSelection) {
      playerSelection = prompt(
        "Invalid choice! Please choice between rock, paper or scissors"
      );

      isValidSelection = possibleChoices.includes(
        playerSelection.toLocaleLowerCase()
      );
    }

    // If it is a tie, ask the player to select again
    while (playerSelection === computerSelection) {
      console.log("It's a tie, play again!");
      playerSelection = prompt("Make a choice: Rock, paper or scissors?");
      computerSelection = getComputerSelection();
    }

    const isPlayerWinner = playRound(playerSelection, computerSelection);
    scores.push(isPlayerWinner);

    if (isPlayerWinner) {
      console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
    } else {
      console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
    }
  }

  return scores;
}
