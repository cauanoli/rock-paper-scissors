function getWinner(scores, numberOfRounds) {
  const winningScore = Math.floor(numberOfRounds / 2) + 1;
  const playerScore = scores.reduce((a, b) => a + b, 0);
  const winner = playerScore >= winningScore ? "player" : "computer";

  return winner;
}

/* 
    Return true if players wins, false if the computers wins. 
    Return nulls if the playerSelection === computerSelection
*/
function getRoundWinner(playerSelection, computerSelection) {
  let isPlayerWinner = false;
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) return null;

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    isPlayerWinner = true;
  }

  return isPlayerWinner;
}

function getRandomItem(possibleChoices) {
  const randomIndex = Math.floor(Math.random() * possibleChoices.length);
  return possibleChoices[randomIndex];
}

/*
Play a number of games, printing the winner of each game and overall winner at the end
*/
function game(numberOfRounds = 5) {
  const possibleChoices = ["rock", "paper", "scissors"];
  const scores = [];

  // Play the game for the number of rounds chosen
  for (let i = 0; i <= numberOfRounds - 1; i++) {
    let playerSelection = prompt("Make a choice: Rock, paper or scissors?");
    let computerSelection = getRandomItem(possibleChoices);
    let isPlayerWinner = false;

    // If its an invalid choice, ask the player to select again
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
      computerSelection = getRandomItem(possibleChoices);
    }

    isPlayerWinner = getRoundWinner(playerSelection, computerSelection);
    scores.push(isPlayerWinner);

    if (isPlayerWinner) {
      console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
    } else {
      console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
    }
  }

  const winner = getWinner(scores, numberOfRounds);
  const message = `Overall winner is ${winner.toUpperCase()}! Congratulations!`;

  console.log(message);
}
