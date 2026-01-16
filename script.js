function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function playRound(event) {
    if (isGameInProgress) {
        let playerChoice = event.currentTarget.playerChoice;
        let computerChoice = getComputerChoice();
        console.log("Player", playerChoice);
        console.log("Computer", computerChoice);
        evalRound(playerChoice, computerChoice);
    }
    displayPlayerScore();
    displayComputerScore();
    isGameInProgress = evalGame(playerScore, computerScore);
}

function evalRound(playerChoice, computerChoice) {
    switch (playerChoice) {
        case computerChoice: 
            displayGameOutcome("It's a tie!");
            break;
        case (computerChoice + 1) % 3: 
            incrementPlayerScore();
            displayGameOutcome("You win the round!");
            break;
        case (computerChoice + 2) % 3: 
            incrementComputerScore();
            displayGameOutcome("You lose the round!");
            break;
    }
}

function evalGame() {
    if (getPlayerScore() == 5) {
        displayGameOutcome("You win the game!");
        return false;
    } 
    if (getComputerScore() == 5) {
        displayGameOutcome("You lose the game!");
        return false;
    }
    return true;
}


function incrementPlayerScore() {
    playerScore += 1;
}

function incrementComputerScore() {
    computerScore += 1;
}

function getPlayerScore() {
    return playerScore;
}

function getComputerScore() {
    return computerScore;
}

function handleRock() {
    let rockButtonElement = document.querySelector("#rock");
    rockButtonElement.playerChoice = 0;
    rockButtonElement.computerChoice = getComputerChoice();
    rockButtonElement.addEventListener("click", playRound);
}

function handlePaper() {
    let paperButtonElement = document.querySelector("#paper");
    paperButtonElement.playerChoice = 1;
    paperButtonElement.computerChoice = getComputerChoice();
    paperButtonElement.addEventListener("click", playRound);
}

function handleScissors() {
    let scissorsButtonElement = document.querySelector("#scissors");
    scissorsButtonElement.playerChoice = 2;
    scissorsButtonElement.computerChoice = getComputerChoice();
    scissorsButtonElement.addEventListener("click", playRound);
}

function setButtonEventListeners() {
    handleRock();
    handlePaper();
    handleScissors();
}

function displayGameOutcome(string) {
    let gameOutcomeTextElement = document.querySelector("#gameOutcome");
    gameOutcomeTextElement.textContent = string;
}

function displayPlayerScore() {
    let playerScoreTextElement = document.querySelector("#playerScore");
    playerScoreTextElement.textContent = getPlayerScore();
}

function displayComputerScore() {
    let computerScoreTextElement = document.querySelector("#computerScore");
    computerScoreTextElement.textContent = getComputerScore();
}

let playerScore = 0;
let computerScore = 0;
let isGameInProgress = true;

setButtonEventListeners();