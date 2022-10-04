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

    remove.forEach(image => {
        image.classList.toggle("hoverOnly");
    })

    selection.forEach(image => {
        image.classList.toggle("translateDown");
    })
}

function hideSelection() {
    let toggleDisplay = document.querySelectorAll(".selection");

    toggleDisplay.forEach(image => {
        image.classList.toggle("hidden");
    })
}

// show alert after selection transition 

function showAlert() {

    const first = "Rock";
    const second = "Paper";
    const third = "Scissors";
    const last = "Shoot!";

    function removeFirstHeader() {
        firstHeader.remove();
    }

    function removeSecondHeader() {
        secondHeader.remove();
    }

    function removeThirdHeader() {
        thirdHeader.remove();
    }

    function removeLastHeader() {
        lastHeader.remove();
    }

    // creating first header "Rock" with grow animation then hidden

    let firstHeader = document.createElement("h1");

    firstHeader.classList.add("growAlert");
    
    firstHeader.classList.add("countdown");

    let firstAlert = document.createTextNode(first);
    firstHeader.appendChild(firstAlert);

    let replaceButtons = document.querySelector("#buttons");
    replaceButtons.appendChild(firstHeader);

    setTimeout(removeFirstHeader, 550);

    // second header "Paper"

    let secondHeader = document.createElement("h1");

    secondHeader.classList.add("growAlert");
    
    secondHeader.classList.add("countdown");

    let secondAlert = document.createTextNode(second);
    secondHeader.appendChild(secondAlert);

    function secondReplace() {
        replaceButtons.appendChild(secondHeader);
    }

    setTimeout(secondReplace, 650);

    setTimeout(removeSecondHeader, 1200);

    // third header "Scissors"

    let thirdHeader = document.createElement("h1");
    
    thirdHeader.classList.add("growAlert");

    thirdHeader.classList.add("countdown");

    let thirdAlert = document.createTextNode(third);
    thirdHeader.appendChild(thirdAlert);

    function thirdReplace() {
        replaceButtons.appendChild(thirdHeader);
    }

    setTimeout(thirdReplace, 1300);

    setTimeout(removeThirdHeader, 1850);

    // last header "Shoot!"

    let lastHeader = document.createElement("h1");

    lastHeader.classList.add("growAlert");
    
    lastHeader.classList.add("countdown");

    let lastAlert = document.createTextNode(last);
    lastHeader.appendChild(lastAlert);

    function lastReplace() {
        replaceButtons.appendChild(lastHeader);
    }

    setTimeout(lastReplace, 1950);
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

    // the images translation off screen takes .4s - setting timeout of 400ms to avoid two elements in #buttons
    setTimeout(hideSelection, 300);
    setTimeout(showAlert, 300);
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


