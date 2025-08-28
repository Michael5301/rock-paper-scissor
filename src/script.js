
const choices = ['rock', 'paper', 'scissor']
const computerDisplay = document.getElementById('computerDisplay');
const playerDisplay = document.getElementById('playerDisplay');
const resultsDisplay = document.getElementById('resultsDisplay');
const resultsAgregate = document.getElementById('resultsAgregate');

const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');
let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {

    const computerChoice = choices[Math.floor((Math.random() * 3))];
    let result = '';

    if (playerChoice === computerChoice) { result = 'Tie'; }
    else if (playerChoice === 'rock' && computerChoice === 'paper') { result = 'You lose'; }
    else if (playerChoice === 'rock' && computerChoice === 'scissor') { result = 'You win'; }
    else if (playerChoice === 'paper' && computerChoice === 'rock') { result = 'You win'; }
    else if (playerChoice === 'paper' && computerChoice === 'scissor') { result = 'You lose'; }
    else if (playerChoice === 'scissor' && computerChoice === 'rock') { result = 'You lose'; }
    else if (playerChoice === 'scissor' && computerChoice === 'paper') { result = 'You win'; }

    // displaying results and choices
    computerDisplay.textContent = `Computer Choice: ${computerChoice}`;
    playerDisplay.textContent = `Player Choice: ${playerChoice}`;
    resultsDisplay.textContent = `Outcome: ${result}`;

    // switch results, colors, scores
    if (result === 'You lose') {
        resultsDisplay.style.color = 'red';
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    } else if (result === 'You win') {
        resultsDisplay.style.color = 'green';
        playerScore++;
        playerScoreDisplay.textContent = computerScore;
    } else { resultsDisplay.style.color = 'gray' }



}
