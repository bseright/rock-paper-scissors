const items = ["rock", "paper", "scissors"];

// start page load with selection buttons beneath for translate up effect

let initialTranslate = document.querySelectorAll(".selection")

function initializeSelection() {initialTranslate.forEach(buttons => {
    buttons.classList.remove("translateDown");
    buttons.classList.remove("firstAnimation")
})}

setTimeout(initializeSelection, 100);

// add fade for initial load and subsequent refreshes

let initialFade = document.querySelector("#wrapper");
initialFade.classList.add("fadeIn");

function removeFade() {
    initialFade.classList.remove("fadeIn");
}

setTimeout(removeFade, 400);

// 

let CPUSelection;

function getCPUSelection() {
    CPUSelection = items[Math.floor(Math.random() * items.length)];
}

let playerSelection;

let roundWinner;

let playerScore = 0;
let CPUScore = 0;

function changeScore() {
    let grabElement;
    let grabScores;

    // begin transition to transparency 
    function addOpacity() {document.querySelector(grabElement).classList.add("fadeOut")}

    // change score when transparent
    function newScore() {document.querySelector(grabElement).innerHTML = grabScores}

    // begin transition to opaque
    function removeOpacity() {document.querySelector(grabElement).classList.remove("fadeOut")};

    if (roundWinner === "player") {

        grabElement = "#playerScore";
        grabScores = playerScore;
       
        addOpacity();
        setTimeout(removeOpacity, 100);
        setTimeout(newScore, 100);

    } else if (roundWinner === "CPU") {

        grabElement = "#CPUScore";
        grabScores = CPUScore;
       
        addOpacity();
        setTimeout(removeOpacity, 100);
        setTimeout(newScore, 100);

    } else {}
}

// begin js animations

// apply gradient filter over vs image

function toggleStartText() {

    let blinkingText = document.querySelectorAll(".blink");
   
    blinkingText.forEach(text => {
        text.classList.toggle("hidden");
    })
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

function translateUp() {
    let selection = document.querySelectorAll(".selection");

    selection.forEach(image => {
        image.classList.toggle("translateDown");
    })

    selection.forEach(image => {
        image.classList.toggle("hoverOnly");
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

// remove SHOOT after one round of play

function removeCountdown() {
    let countdown = document.querySelector(".countdown");
    countdown.classList.toggle("fadeCountdown");

    function hideCountdown() {
        countdown.remove();
    }

    setTimeout(hideCountdown, 500);
}

// preload images to avoid delays in prepend/append


// append and animate player and CPU selection 

function showPlayerSelection() {

    if (playerSelection === "rock") {

        let playerRock = document.createElement("img");
        playerRock.src = "images/rockArena.png";

        playerRock.classList.toggle("playerArena");
        playerRock.classList.toggle("fromLeft");

        let arena = document.querySelector("#arena");
        arena.prepend(playerRock);

    } else if (playerSelection === "paper") {

        let playerPaper = document.createElement("img");
        playerPaper.src = "images/paperArena.png";

        playerPaper.classList.toggle("playerArena");
        playerPaper.classList.toggle("fromLeft");

        let arena = document.querySelector("#arena");
        arena.prepend(playerPaper);

    } else {

        let playerScissors = document.createElement("img");
        playerScissors.src = "images/scissorsArena.png";

        playerScissors.classList.toggle("playerArena");
        playerScissors.classList.toggle("fromLeft");

        let arena = document.querySelector("#arena");
        arena.prepend(playerScissors);
    }
}

function showCPUSelection() {

    if (CPUSelection === "rock") {

        let CPURock = document.createElement("img");
        CPURock.src = "images/rockArena.png";

        CPURock.classList.toggle("CPUArena");
        CPURock.classList.toggle("fromRight");

        let arena = document.querySelector("#arena");
        arena.append(CPURock);

    } else if (CPUSelection === "paper") {

        let CPUPaper = document.createElement("img");
        CPUPaper.src = "images/paperArena.png";

        CPUPaper.classList.toggle("CPUArena");
        CPUPaper.classList.toggle("fromRight");

        let arena = document.querySelector("#arena");
        arena.append(CPUPaper);

    } else {

        let CPUScissors = document.createElement("img");
        CPUScissors.src = "images/scissorsArena.png";

        CPUScissors.classList.toggle("CPUArena");
        CPUScissors.classList.toggle("fromRight");

        let arena = document.querySelector("#arena");
        arena.append(CPUScissors);
    }
}

// hide player and CPU selection 

function hideLastPlay() {
    let lastPlayer = document.querySelector("#arena img:first-child");
    lastPlayer.classList.toggle("reverseFromLeft");

    let lastCPU = document.querySelector("#arena img:last-child");
    lastCPU.classList.toggle("reverseFromRight");

    function hideBothPlays() {
        lastPlayer.classList.toggle("hidden");
        lastCPU.classList.toggle("hidden");
    }

    setTimeout(hideBothPlays, 500);
}

// create last round alert and style

function ifLastRound() {
    let arena = document.querySelector("#arena");
    let arenaItems = arena.querySelectorAll(":scope > *")
    let versus = document.querySelector("#versus");

    function removeArena() {
        versus.classList.add("fadeVersus");
        
        function removeItems() {
            arenaItems.forEach(item => {
            item.remove();
        })}

        setTimeout(removeItems, 300);
    }

    let lastPara = document.createElement("p");
    let lastWords;
    let buttonText;

    if (roundWinner === "player") {
        lastWords = "YOU WIN!";
        buttonText = "PLAY AGAIN";
    } else {
        lastWords = "YOU LOST!";
        buttonText = "TRY AGAIN";
    }

    let lastText = document.createTextNode(lastWords);
    lastPara.appendChild(lastText);

    let lastButton = document.createElement("button");
    lastButton.classList.add("refreshButton");

    let buttonNode = document.createTextNode(buttonText);
    lastButton.appendChild(buttonNode);

    function addLastAlert() {
        arena.classList.add("arenaColumn");
        arena.appendChild(lastPara);
        arena.appendChild(lastButton);
    }
    
    removeArena();

    setTimeout(addLastAlert, 300);  
}

function refreshButton() {

    function refreshPage() {
        document.location.reload(true);
    }

    const refreshButton = document.querySelector(".refreshButton");
    refreshButton.addEventListener("click", refreshPage, {once: true})

}

// play round upon player selection

const buttons = document.querySelector("#buttons");

function startListening() {buttons.addEventListener("click", getPlayerSelection, {once: true})};
startListening();

function getPlayerSelection(e) {
    getCPUSelection();

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

    toggleStartText();
    translateDown();

    // the images translation off screen takes .4s - setting timeout of 400ms to avoid two elements in #buttons
    setTimeout(hideSelection, 300);
    setTimeout(showAlert, 300);
    
    setTimeout(showPlayerSelection, 2250);
    setTimeout(showCPUSelection, 2250);
    setTimeout(changeScore, 4000);
    setTimeout(hideLastPlay, 4500);

    setTimeout(removeCountdown, 4700);
    setTimeout(hideSelection, 5200);

    if (playerScore === 5 || CPUScore === 5) {

        setTimeout(ifLastRound, 5300);
        setTimeout(refreshButton, 5700);

    } else {

        setTimeout(translateUp, 5300);
        setTimeout(toggleStartText, 5300);
    
        setTimeout(startListening, 5600); 
    }
}

// need round to reset fresh with no player selection until another click is heard

function playRound(playerSelection, CPUSelection) {

    if (playerSelection === CPUSelection) {

        roundWinner = "tie";

    } else if (

        (playerSelection === "rock" && CPUSelection === "scissors") ||
        (playerSelection === "paper" && CPUSelection === "rock") ||
        (playerSelection === "scissors" && CPUSelection === "paper")) {

        playerScore = playerScore + 1;
        roundWinner = "player";

    } else if (
        (playerSelection === "rock" && CPUSelection === "paper") ||
        (playerSelection === "paper" && CPUSelection === "scissors") ||
        (playerSelection === "scissors" && CPUSelection === "rock")) {

        CPUScore = CPUScore + 1;
        roundWinner = "CPU";

    } else {}
}

console.log("Don't even think about cheating. :) BUT if you want to see the 'Replay' screen quicker, feel free to set playerScore and CPUScore = 4. Thanks for playing!");