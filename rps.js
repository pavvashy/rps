let computerChoice= Math.ceil(Math.random() * 3);

function getComputerChoice() {
switch (computerChoice) {
    case 1: 
        return "rock";
    case 2:
        return "paper";
    case 3:
        return "scissors";
    default:
        return null;
    }
}
console.log("Bot chose: " + getComputerChoice(computerChoice))

let humanChoice = prompt("Choose rock, paper, or scissors")

function getHumanChoice(humanChoice) {
        if (humanChoice.toLowerCase() == "rock") {
            return "rock"
        }
        else if (humanChoice.toLowerCase() == "paper") {
            return "paper"
        }
        else (humanChoice.toLowerCase() == "scissors") 
            return "scissors"
}
console.log(getHumanChoice(humanChoice))