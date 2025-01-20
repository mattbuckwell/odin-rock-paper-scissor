// Query selection and creation of all elements of the game
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorBtn = document.querySelector(".scissors");
const finishBtn = document.querySelector(".finish");
const reset = document.querySelector(".reset");

const gameContainer = document.querySelector(".game-container");

const resultContainer = document.createElement("div");

const choiceResult = document.createElement("div"); // <-- container to hold the images
choiceResult.classList.add("choice")

const userImg = document.createElement("img");
const computerImg = document.createElement("img");


// p elements below to be changed
const resultRound = document.createElement("div");
const gameScore = document.createElement("div");

// final result display
const winnerResults = document.createElement("div");
const winner = document.createElement("h3");

gameContainer.appendChild(resultContainer);
gameContainer.appendChild(winnerResults);

choiceResult.appendChild(userImg);
choiceResult.appendChild(computerImg);


resultContainer.appendChild(choiceResult);
resultContainer.appendChild(resultRound);
resultContainer.appendChild(gameScore);

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
            console.log("User has won! 1 point awarded");
            humanScore++;
            choiceResult.style.backgroundColor = "#37fa3d";
    } else if ((humanChoice === 'ROCK' && computerChoice === 'PAPER') ||
        (humanChoice === 'PAPER' && computerChoice === 'SCISSORS') ||
        (humanChoice === 'SCISSORS' && computerChoice === 'ROCK')) {
            console.log("Computer has won! 1 point awarded");
            computerScore++;
            choiceResult.style.backgroundColor = "#fa3737";
    } else {
        console.log("We have a draw! No point awarded");
        choiceResult.style.backgroundColor = "#fff";
    }
    console.log(`Game Scores = User Score: ${humanScore} | Computer Score: ${computerScore}`);
    //gameScore.textContent = `Game Scores = User Score: ${humanScore} | Computer Score: ${computerScore}`;
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

