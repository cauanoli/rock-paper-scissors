function getComputerChoice() {
  const possibleChoices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);

  return possibleChoices[randomIndex];
}

function playOneRound() {
  const playerChoice = prompt("Make a choice: Rock, paper or scissors?");
  const computerChoice = getComputerChoice();
}
