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

function getComputerChoice() {
    return items[Math.floor(Math.random() * items.length)];
}

console.log(getComputerChoice());