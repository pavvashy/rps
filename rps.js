let computerChoice= 1

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
let finalComputerChoice = getComputerChoice(computerChoice)
console.log("Bot chose: " + finalComputerChoice)

let humanChoice = prompt("Choose rock, paper, or scissors")

function getHumanChoice(humanChoice) {
        if (humanChoice.toLowerCase() == "rock") {
            return "rock"
        }
        else if (humanChoice.toLowerCase() == "paper") {
            return "paper"
        }
        else (humanChoice.toLowerCase() == "scissors" || "scissor") 
            return "scissors"
        
}
let finalHumanChoice = getHumanChoice(humanChoice)

console.log("You chose: " + finalHumanChoice)

// score
let humanScore = 0
let computerScore = 0

// play round function
function playRound(humanChoice, computerChoice) {
    // bot chose rock
    if(computerChoice == "rock") {
        if(humanChoice == "rock") {
            return "Tie! Both chose " + computerChoice;
        }
        else if(humanChoice == "scissors") {
            computerScore++
            return "You lose!" + computerChoice + " beats " + humanChoice;
    
        }
        else {
            humanScore++
            return "You win!" + humanChoice + " beats " + computerChoice
        
        }
    }

    // bot chose paper
    if(computerChoice == "paper") {
        if(humanChoice == "rock") {
            computerScore++
            return "You lose!" + computerChoice + " beats " + humanChoice; 
        }
        else if(humanChoice == "scissors") {
            humanScore++
            return "You win! " + humanChoice + " beats" + computerChoice;
        }
        else {
            return "Tie! Both chose " + computerChoice;
        }
    }
// bot chose scissors
    if(computerChoice == "scissors") {
        if(humanChoice == "rock") {
            humanScore++
            return "You win! " + humanChoice + " beats" + computerChoice;
        }
        else if(humanChoice == "scissors") {
            humanScore++
            return "Tie! Both chose " + computerChoice;
        }
        else {
            computerScore++
            return "You lose!" + computerChoice + " beats " + humanChoice; 
        }
}
}
// consoles
console.log(playRound(finalHumanChoice, finalComputerChoice))
console.log(computerScore)
console.log(humanScore)