// computer selects a random object of rock, paper, or scissors

// user enters one of three obects, rock, paper, or scissors

// both selections are compared with the following conditions

// rock beats scissors

// paper beats rock

// scissors beats paper 

// a tie results in a replay with no winner

// notify user of result and add point for winner

// tally points up to 5

// once 5 wins has been accumulated by either party, notify results and provide replay option

const items = ["rock", "paper", "scissors"];

let userScore = 0;

let computerScore = 0;

let userSelection = getUserSelection();

let computerSelection = getComputerSelection();

function getComputerSelection() {
    return items[Math.floor(Math.random() * items.length)];
}

function getUserSelection() {
    return prompt("Make a selection of rock, paper, or scissors.",).toLowerCase();
}

function showTotalScore() {
    return `User Score: ${userScore}\nComputer Score: ${computerScore}`;
}

function playRound(userSelection, computerSelection) {
    if (userSelection === computerSelection) {
        console.log(`TIE!!! Both parties selected ${userSelection}!`);
        return console.log(showTotalScore());
    } else if (
        (userSelection === "rock" && computerSelection === "scissors") ||
        (userSelection === "paper" && computerSelection === "rock") ||
        (userSelection === "scissors" && computerSelection === "paper")) {
        userScore = userScore + 1;
        console.log(`ROUND WON!!! The computer selected ${computerSelection}. One point has been added to your score.`);
        return console.log(showTotalScore());
    } else if (
        (userSelection === "rock" && computerSelection === "paper") ||
        (userSelection === "paper" && computerSelection === "scissors") ||
        (userSelection === "scissors" && computerSelection === "rock")) {
        computerScore = computerScore + 1;
        console.log(`ROUND LOST!!! The computer selected ${computerSelection}. One point has been added to the computer's score.`);
        return console.log(showTotalScore());
    } else {
        return console.log("Enter a valid choice.");
    }
}

function game() {
    for (let round = 1; round < 5; round++) {
        console.log(`---- ROUND ${round} ------------`);
        playRound(userSelection, computerSelection);
        console.log("\n");
        computerSelection = getComputerSelection();
        userSelection = getUserSelection();
    }

    // final round
    console.log("---- ROUND 5 ------------");
    playRound(userSelection, computerSelection);
    console.log("\n");
    if (userScore > computerScore) {
        return console.log("YOU BEAT THE COMPUTER! REFRESH THE PAGE TO PLAY AGAIN.");
    } else {
        return console.log("THE COMPUTER BESTED YOU! REFRESH THE PAGE TO TRY AGAIN.");
    }
}

console.log("Welcome to a game of Rock, Paper, Scissors! Gain more points than the computer in five rounds to win.\n\n")

console.log(game());