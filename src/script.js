/*  HUmbergermenu */

//bring icons by ids
//bring icons div by id, this is where we listen for click
//bring menu by id
// onclick toggle classlist on btn1, btn2 and menu.

// let computerChoice = document.getElementById(computerChoice);
// let playermove = document.getElementById(playermove);

const choices = ['rock', 'paper', 'scissor']
const computerDisplay = document.getElementById('computerDisplay');
const playerDisplay = document.getElementById('playerDisplay');
const resultsDisplay = document.getElementById('resultsDisplay');
const resultsAgregate = document.getElementById('resultsAgregate');


function play(playerChoice) {

    const computerChoice = choices[Math.floor((Math.random() * 3))];
    let result = '';

    if (playerChoice === computerChoice) { result = 'Tie'; }

    else if (playerChoice === 'rock' && computerChoice === 'paper') { result = 'You lost'; }
    else if (playerChoice === 'rock' && computerChoice === 'scissor') { result = 'You won'; }
    else if (playerChoice === 'paper' && computerChoice === 'rock') { result = 'You won'; }
    else if (playerChoice === 'paper' && computerChoice === 'scissor') { result = 'You lost'; }
    else if (playerChoice === 'scissor' && computerChoice === 'rock') { result = 'You won'; }
    else if (playerChoice === 'scissor' && computerChoice === 'paper') { result = 'You won'; }

    if (result === 'You lost') { resultsDisplay.style.color = 'red'; }
    else if (result === 'Tie') { resultsDisplay.style.color = 'blue'; }
    else { resultsDisplay.style.color = 'green'; }

    // displaying results and choices
    computerDisplay.textContent = `Computer Choice: ${computerChoice}`;
    playerDisplay.textContent = `Player Choice: ${playerChoice}`;
    resultsDisplay.textContent = `Outcome: ${result}`;

    // agregate result


    console.log(result);
}
