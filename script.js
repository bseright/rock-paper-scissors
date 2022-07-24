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

let userScore;

let computerScore;

function getComputerSelection() {
    return items[Math.floor(Math.random() * items.length)];
}

function getUserSelection() {
    return prompt("Make a selection of rock, paper, or scissors.",).toLowerCase();
}

function playRound(userSelection, computerSelection) {
    if (userSelection === computerSelection) {
        return `Both parties selected ${userSelection}!\n\nUser Score: ${userScore}\nComputer Score: ${computerScore}`
    } else if (userSelection === "rock" && computerSelection === "scissors") {
        return `You win! The computer selected ${computerSelection}. One point has been added to your score.\n\nUser Score: ${userScore}\nComputer Score: ${computerScore}`;
    } else if (userSelection === "rock" && computerSelection === "paper") {
        return `You lose! The computer selected ${computerSelection}. One point has been added to the computer's score.\n\nUser Score: ${userScore}\nComputer Score: ${computerScore}`;
    } else if (userSelection === "paper" && computerSelection === "rock") {
        return `You win! The computer selected ${computerSelection}. One point has been added to your score.\n\nUser Score: ${userScore}\nComputer Score: ${computerScore}`;
    } else if (userSelection === "paper" && computerSelection === "scissors") {
        return `You lose! The computer selected ${computerSelection}. One point has been added to the computer's score.\n\nUser Score: ${userScore}\nComputer Score: ${computerScore}`;
    } else if (userSelection === "scissors" && computerSelection === "paper") {
        return `You win! The computer selected ${computerSelection}. One point has been added to your score.\n\nUser Score: ${userScore}\nComputer Score: ${computerScore}`;
    } else if (userSelection === "scissors" && computerSelection === "rock") {
        return `You lose! The computer selected ${computerSelection}. One point has been added to the computer's score.\n\nUser Score: ${userScore}\nComputer Score: ${computerScore}`;
    } else {
        return "Enter an appropriate choice.";
    }
}



const userSelection = getUserSelection();

const computerSelection = getComputerSelection();

console.log(playRound(userSelection, computerSelection));