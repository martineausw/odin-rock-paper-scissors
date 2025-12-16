function convertChoiceToString(choice) {
    switch (choice) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
        default: return "INVALID";
    }
}
function getPlayerChoice() {
    const inputString = prompt("Enter rock, paper, or scissors").toLowerCase();
    switch (inputString) {
        case "rock": return 0;
        case "paper": return 1;
        case "scissors": return 2;
        default: return getPlayerChoice();
    }
}

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function playRound(playerChoice, computerChoice) {
    switch (playerChoice) {
        case computerChoice: 
            alert("Computer chose " + convertChoiceToString(computerChoice) +".\nThe round is tied!");
            return 0;            
        case (computerChoice + 1) % 3: 
            alert("Computer chose " + convertChoiceToString(computerChoice) +".\nYou lost this round!");
            return -1; 
        case (computerChoice + 2) % 3: 
            alert("Computer chose " + convertChoiceToString(computerChoice) +".\nYou won this round!");
            return 1; 
    }
}

function playGame() {
    let score = 0;
    for (let i = 0; i < 5; i++) {
        score += playRound(getPlayerChoice(), getComputerChoice());
    }
    if (score == 0) {
        alert("The game is tied!");
    } else if (score > 0) {
        alert("You won the game!");
    } else {
        alert("You lost the game!");
    }
}

playGame();