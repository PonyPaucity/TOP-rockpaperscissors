let playerScore = 0
let computerScore = 0

function computerPlay() {
    playedHand = Math.floor(Math.random() * 3);
    if (playedHand === 0) {
        return "Rock"
    } else if (playedHand === 1) {
        return "Paper"
    } else if (playedHand === 2) {
        return "Scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

    if (playerSelection === 'Rock') {
        if (computerSelection === 'Rock') {
            return 'A Draw! Rock draws with Rock.'
        } else if (computerSelection === 'Paper') {
            computerScore++;
            return 'You Lose! Paper beats Rock.'
        } else if (computerSelection === 'Scissors') {
            playerScore++;
            return 'You Win! Rock beats Scissors.'
        }
    } else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            playerScore++;
            return 'You Win! Paper beats Rock.'
        } else if (computerSelection === 'Paper') {
            return 'A Draw! Paper draws with Paper.'
        } else if (computerSelection === 'Scissors') {
            computerScore++;
            return 'You Lose! Scissors beats Paper.'
        }
    } else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Rock') {
            computerScore++;
            return 'You Lose! Rock beats Scissors.'
        } else if (computerSelection === 'Paper') {
            playerScore++;
            return 'You Win! Scissors beats Paper.'
        } else if (computerSelection === 'Scissors') {
            return 'A Draw! Scissors draws with Scissors.'
        }
    }
}

// function game() {
//     for (let i = 0; playerScore < 5 && computerScore < 5; i++) {
//         playerSelection = window.prompt("RPS");
//         let computerSelection = computerPlay();
//         console.log(playRound(playerSelection, computerSelection));
//     }
// }

const playRock = document.querySelector('#playRock');
const playPaper = document.querySelector('#playPaper');
const playScissors = document.querySelector('#playScissors');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener(
        'click', () => {
            let computerSelection = computerPlay()
            console.log(playRound(button.id, computerSelection))
        }
    )
})