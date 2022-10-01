const items = ["rock", "paper", "scissors"];

let playerScore = 0;
let CPUScore = 0;

function getCPUSelection() {
    return items[Math.floor(Math.random() * items.length)];
}

let playerSelection;
let CPUSelection = getCPUSelection();

const buttons = document.querySelector("#buttons");

buttons.addEventListener("click", getPlayerSelection, false);

function getPlayerSelection(e) {
    if (e.target.matches("#rock")) {
        let playerSelection = "rock";
        playRound(playerSelection, CPUSelection);
    } else if (e.target.matches("#paper")) {
        let playerSelection = "paper";
        playRound(playerSelection, CPUSelection);
    } else if (e.target.matches("#scissors")) {
        let playerSelection = "scissors";
        playRound(playerSelection, CPUSelection);
    } else {}
}

// need round to reset fresh with no user selection until another click is heard

function playRound(playerSelection, CPUSelection) {
    if (playerSelection === CPUSelection) {
        console.log(`TIE!!! Both parties selected ${playerSelection}!`);
        CPUSelection = getCPUSelection();
    } else if (
        (playerSelection === "rock" && CPUSelection === "scissors") ||
        (playerSelection === "paper" && CPUSelection === "rock") ||
        (playerSelection === "scissors" && CPUSelection === "paper")) {
        playerScore = playerScore + 1;
        console.log(`ROUND WON!!! The CPU selected ${CPUSelection}. One point has been added to your score.`);
        CPUSelection = getCPUSelection();
    } else if (
        (playerSelection === "rock" && CPUSelection === "paper") ||
        (playerSelection === "paper" && CPUSelection === "scissors") ||
        (playerSelection === "scissors" && CPUSelection === "rock")) {
        CPUScore = CPUScore + 1;
        console.log(`ROUND LOST!!! The CPU selected ${CPUSelection}. One point has been added to the CPU's score.`);
        CPUSelection = getCPUSelection();
    } else {}
}

