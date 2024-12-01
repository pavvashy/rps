function launchGame() {
let humanChoice = prompt("Choose rock, paper, or scissors")
    // score
let humanScore = 0
let computerScore = 0

for (let i = 0; i < 2; i++) {
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

let humanChoice = prompt("Type in rock, paper, or scissors")

function getHumanChoice(humanChoice) {
    switch (humanChoice.toLowerCase()) {
        case "rock": 
            return "rock";
        case "paper":
            return "paper";
        case "scissors":
            return "scissors";
        default:
            let humanChoice = prompt("You can't choose that... choose rock, paper, or scissors.")
            return getHumanChoice(humanChoice)
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
                return "You lose! " + computerChoice + " beats " + humanChoice;
            }
            else {
                humanScore++
                return "You win! " + humanChoice + " beats " + computerChoice
            }
        }

        // bot chose paper
        if(computerChoice == "paper") {
            if(humanChoice == "rock") {
                computerScore++
                return "You lose! " + computerChoice + " beats " + humanChoice; 
            }
            else if(humanChoice == "scissors") {
                humanScore++
                return "You win! " + humanChoice + " beats " + computerChoice;
            }
            else {
                return "Tie! Both chose " + computerChoice;
            }
        }
        // bot chose scissors
        if(computerChoice == "scissors") {
            if(humanChoice == "rock") {
                humanScore++
                return "You win! " + humanChoice + " beats " + computerChoice;
            }
            else if(humanChoice == "scissors") {
                return "Tie! Both chose " + computerChoice;
            }
            else {
                computerScore++
                return "You lose! " + computerChoice + " beats " + humanChoice; 
            }
        }
    }
console.log(playRound(finalHumanChoice, finalComputerChoice))
}

// consoles

console.log("Computer Score: " + computerScore)
console.log("Your Score: " + humanScore)

if (computerScore < humanScore) {
    console.log("YOU WIN!!!!!!!!!")
    }
else if (computerScore == humanScore) {
    console.log("Tie..............")
    }
else 
    console.log("HOW'D YOU LOSE TO A COMPUTER!")
}
//this listens for document being loaded
//then you can press the playBtn to launch the entire game 
document.addEventListener('DOMContentLoaded', function() {
const playBtn = document.getElementsByClassName("playBtn");
playBtn[0].addEventListener("click", launchGame);
})
