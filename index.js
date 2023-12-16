function getRoundWinner(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "tie";
  }

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "player";
  }

  return "computer";
}

function getRandomItem(possibleChoices) {
  const randomIndex = Math.floor(Math.random() * possibleChoices.length);
  return possibleChoices[randomIndex];
}

function getComputerSelection() {
  const possibleChoices = ["rock", "paper", "scissors"];
  let computerSelection = getRandomItem(possibleChoices);
  return computerSelection;
}

/*
Play a number of games, printing the winner of each game and overall winner at the end
*/
function game() {
  let playerScore = 0;
  let computerScore = 0;

  const scoreDiv = document.querySelector("#scores");
  const rock = document.querySelector("#rock");
  const paper = document.querySelector("#paper");
  const scissors = document.querySelector("#scissors");

  [rock, paper, scissors].forEach((button) => {
    button.addEventListener("click", (event) => {
      playRound(event.target.id);
    });
  });

  function playRound(playerSelection) {
    const scoreMessage = document.createElement("p");
    const computerSelection = getComputerSelection();
    let roundResult = getRoundWinner(playerSelection, computerSelection);

    if (playerScore === 3) {
      scoreMessage.textContent = "Player won the game!";
      playerScore = 0;
      computerScore = 0;
      scoreDiv.appendChild(scoreMessage);
      return;
    }

    if (computerScore === 3) {
      scoreMessage.textContent = "Computer won the game!";
      playerScore = 0;
      computerScore = 0;
      scoreDiv.appendChild(scoreMessage);
      return;
    }

    if (roundResult === "tie") {
      scoreMessage.textContent += "TIE! Play again!";
    }

    if (roundResult === "player") {
      scoreMessage.textContent += `Player wins!`;
      playerScore++;
    }

    if (roundResult === "computer") {
      scoreMessage.textContent += "Computer wins!";
      computerScore++;
    }

    scoreDiv.appendChild(scoreMessage);
  }
}

game();
