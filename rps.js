// score
let humanScore = 0
let computerScore = 0

for (let i = 0; i < 3; i++) {
let computerChoice = Math.ceil(Math.random() * 3);

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

//** finalComputerChoice variable is made to translate the switch statement
// computerChoice inside the getComputerChoice function to a variable. 
// same logic applies to finalHumanChoice **
let finalComputerChoice = getComputerChoice(computerChoice)
console.log("Bot chose: " + finalComputerChoice)

let humanChoice = prompt("Choose rock, paper, or scissors")

function getHumanChoice(humanChoice) {
    switch (humanChoice) {
        case humanChoice.toLowerCase()=="rock": 
            return "rock";
        case humanChoice.toLowerCase()=="paper":
            return "paper";
        case humanChoice.toLowerCase()=="scissors":
            return "scissors";
        default:
            return null;
    }
}

// finalHumanChoice translates entire function getHumanChoice to a variable
let finalHumanChoice = getHumanChoice(humanChoice)
console.log("You chose: " + finalHumanChoice)


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
console.log(playRound(finalHumanChoice, finalComputerChoice))
}

// consoles

console.log(computerScore)
console.log(humanScore)

if (computerScore < humanScore) {
    console.log("YOU WIN!!!!!!!!!")
}
else if (computerScore = humanScore) {
    console.log("Tie..............")
}
else if (computerScore > humanScore) 
    console.log("YOU LOSE LOL")
