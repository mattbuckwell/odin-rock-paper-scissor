// Query selection and creation of all elements of the game
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorBtn = document.querySelector(".scissors");
const finishBtn = document.querySelector(".finish");
const reset = document.querySelector(".reset");

const game = document.querySelector(".game-container");

const choiceResult = document.createElement("div"); // <-- container to hold the images
choiceResult.classList.add("choice")

const gameResults = document.createElement("div");

const userImg = document.createElement("img");
const computerImg = document.createElement("img");
const roundResult = document.createElement("p");
const gameScore = document.createElement("p");

const winnerResults = document.createElement("div");
const winner = document.createElement("h3");

game.appendChild(gameResults);
game.appendChild(winnerResults);

choiceResult.appendChild(userImg);
choiceResult.appendChild(computerImg);


gameResults.appendChild(choiceResult);
gameResults.appendChild(roundResult);
gameResults.appendChild(gameScore);

winnerResults.appendChild(winner);

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

// Function to play a round of Rock, Paper, Scissors
function playRound (humanChoice, computerChoice) {
    userImg.src = `./img/${humanChoice}.svg`;
    computerImg.src = `./img/${computerChoice}.svg`;
    if ((humanChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
        (humanChoice === 'PAPER' && computerChoice === 'ROCK') ||
        (humanChoice === 'SCISSORS' && computerChoice === 'PAPER')) {
            roundResult.textContent = "User has won! 1 point awarded"
            humanScore++;
            choiceResult.style.backgroundColor = "#37fa3d";
    } else if ((humanChoice === 'ROCK' && computerChoice === 'PAPER') ||
        (humanChoice === 'PAPER' && computerChoice === 'SCISSORS') ||
        (humanChoice === 'SCISSORS' && computerChoice === 'ROCK')) {
            roundResult.textContent = "Computer has won! 1 point awarded"
            computerScore++;
            choiceResult.style.backgroundColor = "#fa3737";
    } else {
        roundResult.textContent = "We have a draw! No point awarded"
        choiceResult.style.backgroundColor = "#fff";
    }
    gameScore.textContent = `Game Scores = User Score: ${humanScore} | Computer Score: ${computerScore}`;
}

// Helper function to find out who won the game
function finalResults (humanResult, computerResult) {
    if (humanResult > computerResult) {
        winner.style.color = "green";
        return 'User is the champion!';
    } else if (computerResult > humanResult) {
        winner.style.color = "red";
        return 'Computer has dominated!';
    } else {
        winner.style.color = "black";
        return 'Both players are equally matched!';
    }
}

// Function to play the game multiple times
function playGame (humanSelection) {
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

// Function to clear the game board for a new game
function clearAll() {
    userImg.src = "";
    computerImg.src = "";
    roundResult.textContent = "";
    gameScore.textContent = "";
    humanScore = 0;
    computerScore = 0;
    winner.textContent = "";
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorBtn.disabled = false;
    choiceResult.style.backgroundColor = "#fff";
};

// Event Listeners for the buttons
rockBtn.addEventListener("click", () => {
    playGame(rockBtn.innerHTML.toUpperCase());
});

paperBtn.addEventListener("click", () => {
    playGame(paperBtn.innerHTML.toUpperCase());
});

scissorBtn.addEventListener("click", () => {
    playGame(scissorBtn.innerHTML.toUpperCase());
});

finishBtn.addEventListener("click", () => {
    winner.textContent = finalResults(humanScore, computerScore);
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorBtn.disabled = true;
});

reset.addEventListener("click", clearAll);

