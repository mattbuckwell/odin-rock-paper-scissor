// Query selection and creation of all elements of the game
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorBtn = document.querySelector(".scissors");
const finishBtn = document.querySelector(".finish");
const reset = document.querySelector(".reset");

// Game container - holds resultContainer and winnerResults
const gameContainer = document.querySelector(".game-container");

// Result container - holds choiceResult and resultRound
const resultContainer = document.createElement("div");

// Choice result displays the image of the selection made
const choiceResult = document.createElement("div"); // <-- container to hold the images
choiceResult.classList.add("choice")
choiceResult.style.height = "80px";

const userImg = document.createElement("img");
const computerImg = document.createElement("img");


// Round result div to hold the two game scores
const resultRound = document.createElement("div");
resultRound.classList.add("result-round");
// Left = user game score, Right = computer game score
const gameScoreLeft = document.createElement("div");
gameScoreLeft.classList.add("game-score");
const gameScoreRight = document.createElement("div");
gameScoreRight.classList.add("game-score")

const userScoreHeading = document.createElement("p");
userScoreHeading.textContent = "User Score";
const userScoreDisplay = document.createElement("p");
userScoreDisplay.textContent = "0";


const computerScoreHeading = document.createElement("p");
computerScoreHeading.textContent = "Computer Score";
const computerScoreDisplay = document.createElement("p");
computerScoreDisplay.textContent = "0";

// final result display
const winnerResults = document.createElement("div");
const winner = document.createElement("h3");

gameContainer.appendChild(resultContainer);
gameContainer.appendChild(winnerResults);

resultContainer.appendChild(choiceResult);
resultContainer.appendChild(resultRound);

choiceResult.appendChild(userImg);
choiceResult.appendChild(computerImg);

resultRound.appendChild(gameScoreLeft);
resultRound.appendChild(gameScoreRight);

gameScoreLeft.appendChild(userScoreHeading);
gameScoreLeft.appendChild(userScoreDisplay);
gameScoreRight.appendChild(computerScoreHeading);
gameScoreRight.appendChild(computerScoreDisplay);

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
            userScoreDisplay.textContent = `${humanScore}`;
            choiceResult.style.backgroundColor = "#37fa3d";
    } else if ((humanChoice === 'ROCK' && computerChoice === 'PAPER') ||
        (humanChoice === 'PAPER' && computerChoice === 'SCISSORS') ||
        (humanChoice === 'SCISSORS' && computerChoice === 'ROCK')) {
            console.log("Computer has won! 1 point awarded");
            computerScore++;
            computerScoreDisplay.textContent = `${computerScore}`;
            choiceResult.style.backgroundColor = "#fa3737";
    } else {
        console.log("We have a draw! No point awarded");
        choiceResult.style.backgroundColor = "#fff";
    }
    console.log(`Game Scores = User Score: ${humanScore} | Computer Score: ${computerScore}`);
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
        return 'Players are equal!';
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
    humanScore = 0;
    computerScore = 0;
    winner.textContent = "";
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorBtn.disabled = false;
    choiceResult.style.backgroundColor = "#fff";
    userScoreDisplay.textContent = "0";
    computerScoreDisplay.textContent = "0";
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

