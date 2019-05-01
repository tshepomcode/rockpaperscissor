// alert("Connected!");
function userPlay() {
    let input;

    input = prompt("Enter paper, rock or scissor 5 times").toString();

    return input.toLowerCase();
}


function computerPlay() {
    let particles = ["rock", "paper", "scissors"];

    let max = particles.length;
    let randNum = Math.floor(Math.random() * Math.floor(max));

    return particles[randNum].toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    let result;

    // rock > scissors
    // paper > rock
    // scissors > paper

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        result = `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === 'paper' && computerSelection == 'rock') {
        result = `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === computerSelection) {
        result = `Draw! ${playerSelection} is the same as ${computerSelection}!`;
    } else {
        result = `You lose! ${computerSelection} beats ${playerSelection}`;
    }

    return result;
}

function game() {
    let result;
    let winOutcome = 0;
    let loseOutcome = 0; 
    let draw = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = userPlay();
        const computerSelection = computerPlay();

        result = playRound(playerSelection.toLowerCase(), computerSelection);
        console.log(result);

        if (result.indexOf('win') >= 0) {
            winOutcome += 1;
        } else if (result.indexOf('lose') >= 0) {
            loseOutcome += 1;
        } else {
            draw += 1;
        }
    }

    console.log(`Win: ${winOutcome} | Lose: ${loseOutcome} | Draw: ${draw}`);



    if(winOutcome > loseOutcome) {
        console.log("You are the winner!");
    } else if (winOutcome < loseOutcome) {
        console.log("You lose!");
    } else {
        console.log("Draw!");
    }

}

game();
