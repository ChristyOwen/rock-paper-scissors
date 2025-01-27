function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
  }
  
  function determineWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      return "It's a tie!";
    }
  
    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      return "You win!";
    } else {
      return "Computer wins!";
    }
  }
  
  let humanScore = 0;
  let computerScore = 0;
  
  for (let round = 1; round <= 5; round++) {
    const humanChoice = prompt("Round " + round + ": Choose rock, paper, or scissors:").toLowerCase();
    const computerChoice = getComputerChoice();
  
    const result = determineWinner(humanChoice, computerChoice);
    console.log(`You chose ${humanChoice}, computer chose ${computerChoice}. ${result}`);
  
    if (result === "You win!") {
      humanScore++;
    } else if (result === "Computer wins!") {
      computerScore++;
    }
  }
  
  console.log(`Final score: You ${humanScore} - Computer ${computerScore}`);