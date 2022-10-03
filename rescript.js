const items = ["rock", "paper", "scissors"];

let CPUSelection = getCPUSelection();

function getCPUSelection() {
    return items[Math.floor(Math.random() * items.length)];
}

let playerSelection;

let roundWinner;

let playerScore = 0;
let CPUScore = 0;

// begin js animations

function changeScore() {
    document.querySelector("#playerScore").innerHTML = playerScore;
    document.querySelector("#CPUScore").innerHTML = CPUScore;
}

function toggleStartText() {
    let blinkingText = document.querySelectorAll(".blink");
    let nudgeRight = document.querySelector("#versus");
   
    blinkingText.forEach(text => {
        text.classList.toggle("hidden");
    })

    // center alignment is off with blinking text removed - repositioning here

    nudgeRight.classList.toggle("versusNoText");
}

// translate button images off-screen

function translateDown() {
    let selection = document.querySelectorAll(".selection");
    let remove = document.querySelectorAll(".hoverOnly");
    let toggleDisplay = document.querySelectorAll(".selection");

    selection.forEach(image => {
        image.classList.toggle("translateDown");
    })

    remove.forEach(image => {
        image.classList.toggle("hoverOnly");
    })

    toggleDisplay.forEach(image => {
        image.classList.toggle("hidden");
    })
}

// show alert after selection transition 

function showAlert() {
    let alert = document.createElement("h1");
    let updatedAlert = "";

    let findWinner = function() {
        if (roundWinner === "tie") {
            updatedAlert = "Tie! Make another selection.";
        } else if (roundWinner === "player") {
            updatedAlert = "Round won! Make another selection.";
        } else if (roundWinner === "CPU") {
            updatedAlert = "Round lost! Make another selection.";
        } else {}
    }

    findWinner();

    let alertText = document.createTextNode(updatedAlert);
    alert.appendChild(alertText);

    let replaceButtons = document.querySelector("#buttons");
    replaceButtons.appendChild(alert);
}

// play round upon player selection

const buttons = document.querySelector("#buttons");

buttons.addEventListener("click", getPlayerSelection);

function getPlayerSelection(e) {
    if (e.target.matches("#rock")) {
        playerSelection = "rock";
        playRound(playerSelection, CPUSelection);
    } else if (e.target.matches("#paper")) {
        playerSelection = "paper";
        playRound(playerSelection, CPUSelection);
    } else if (e.target.matches("#scissors")) {
        playerSelection = "scissors";
        playRound(playerSelection, CPUSelection);
    } else {}

    CPUSelection = getCPUSelection();
    toggleStartText();
    translateDown();
    showAlert();
}

// need round to reset fresh with no player selection until another click is heard

function playRound(playerSelection, CPUSelection) {
    if (playerSelection === CPUSelection) {
        console.log(`TIE!!! Both parties selected ${playerSelection}!`);
        roundWinner = "tie";
    } else if (
        (playerSelection === "rock" && CPUSelection === "scissors") ||
        (playerSelection === "paper" && CPUSelection === "rock") ||
        (playerSelection === "scissors" && CPUSelection === "paper")) {
        playerScore = playerScore + 1;
        console.log(`ROUND WON!!! The CPU selected ${CPUSelection}. One point has been added to your score.`);
        roundWinner = "player";
    } else if (
        (playerSelection === "rock" && CPUSelection === "paper") ||
        (playerSelection === "paper" && CPUSelection === "scissors") ||
        (playerSelection === "scissors" && CPUSelection === "rock")) {
        CPUScore = CPUScore + 1;
        console.log(`ROUND LOST!!! The CPU selected ${CPUSelection}. One point has been added to the CPU's score.`);
        roundWinner = "CPU";
    } else {}

    changeScore();
}


