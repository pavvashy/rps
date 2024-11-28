let computerNumber = Math.floor(Math.random() * 3) + 1;

function getComputerChoice() {
    if (computerNumber===1) {
        return "Rock";
    }
    else if (computerNumber===2) {
        return "Paper";
    }
    else (computerNumber===3) 
        return "Scissors"
}

console.log(getComputerChoice(computerNumber))