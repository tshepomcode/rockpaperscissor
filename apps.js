// alert("Connected!");

function computerPlay() {
    let particles = ["rock", "paper", "scissors"];

    let max = particles.length;
    let randNum = Math.floor(Math.random() * Math.floor(max));

    return particles[randNum];
}

function playRound(playerSelection, computerSelection) {
    let result;
    
    console.log(`playerSelection: ${playerSelection} 
    computerSelection: ${computerSelection}`);

    // rock > scissors
    // paper > rock
    // scissors > paper

    if(playerSelection === 'rock' && computerSelection === 'scissors') {
        result = `You win! ${playerSelection} beats ${computerSelection}`;
    } else if(playerSelection === 'paper' && computerSelection == 'rock') {
        result = `You win! ${playerSelection} beats ${computerSelection}`;
    } else if(playerSelection === 'scissors' && computerSelection === 'paper') {
        `You win! ${playerSelection} beats ${computerSelection}`;
    } else if(playerSelection === computerSelection) {
        result = `Draw! ${playerSelection} is the same as ${computerSelection}!`;
    } else {
        result = `You lose! ${computerSelection} beats ${playerSelection}`;
    }

    return result;
}

let computerSelection = computerPlay().toLowerCase();

console.log(computerSelection);

let playerSelection = "paPer".toLowerCase();
console.log(playerSelection);

// playRound(playerSelection, computerPlay);

console.log(playRound(playerSelection, computerSelection));

// let result = playRound(playerSelection, computerSelection);