// Global variables for the scoring
let humanScore = 0;
let computerScore = 0;


// Function to create and return the computers selection
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return 'ROCK';
        case 1:
            return 'PAPER';
        case 2:
            return 'SCISSORS';
        default:
            console.log('not a valid choice');
    }
}

// Function to read in the users selection, capitalize the first letter and return it
function getHumanChoice() {
    let choice = prompt('Please select Rock, Paper or Scissors');
    return choice.toUpperCase();
}

// Function to play a round of Rock, Paper, Scissors
function playRound (humanChoice, computerChoice) {
    console.log('User has selected - ' + humanChoice);
    user.textContent = `User has selected - ${humanChoice}`;
    console.log('Computer has selected - ' + computerChoice);
    computer.textContent = `Computer has selected - ${computerChoice}`;
    if ((humanChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
        (humanChoice === 'PAPER' && computerChoice === 'ROCK') ||
        (humanChoice === 'SCISSORS' && computerChoice === 'PAPER')) {
            console.log('User has won! 1 point awarded');
            roundResult.textContent = "User has won! 1 point awarded"
            humanScore++;
    } else if ((humanChoice === 'ROCK' && computerChoice === 'PAPER') ||
        (humanChoice === 'PAPER' && computerChoice === 'SCISSORS') ||
        (humanChoice === 'SCISSORS' && computerChoice === 'ROCK')) {
            console.log('Computer has won! 1 point awarded');
            roundResult.textContent = "Computer has won! 1 point awarded"
            computerScore++;
    } else {
        console.log('We have a draw! No point awarded');
        roundResult.textContent = "We have a draw! No point awarded"
    }
    console.log('Round Scores - User Score = ' + humanScore + ' - Computer Score = ' + computerScore);
}

// Helper function to find out who won the game
function finalResults (humanResult, computerResult) {
    if (humanResult > computerResult) {
        return 'User is the champion!';
    } else if (computerResult > humanResult) {
        return 'Computer has dominated!';
    } else {
        return 'Both players are equally matched!';
    }
}

// Function to play the game multiple times
function playGame (humanSelection) {
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}


const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissors");

const game = document.querySelector(".game-container");
const gameResults = document.createElement("div");
game.appendChild(gameResults);

const user = document.createElement("p");
const computer = document.createElement("p");
const roundResult = document.createElement("p");
gameResults.appendChild(user);
gameResults.appendChild(computer);
gameResults.appendChild(roundResult);


rockBtn.addEventListener("click", () => {
    playGame(rockBtn.innerHTML.toUpperCase());
});
paperBtn.addEventListener("click", () => {
    playGame(paperBtn.innerHTML.toUpperCase());
});
scissorBtn.addEventListener("click", () => {
    playGame(scissorBtn.innerHTML.toUpperCase());
});