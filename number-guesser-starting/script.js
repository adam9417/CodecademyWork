let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
  return Math.floor(Math.random() * 10);
};

function compareGuesses(humanGuess, computerGuess, secretTarget) {
  if (Math.abs(humanGuess - secretTarget) < Math.abs(computerGuess - secretTarget)) {
    return true;
  } else if (Math.abs(humanGuess - secretTarget) === Math.abs(computerGuess - secretTarget)) {
    return true;
  } else {
    return false;
  }
};

function updateScore(winnerString) {
  return winnerString === 'human' ? humanScore++ : computerScore++;
};

//Project complete

function advanceRound() {
  return currentRoundNumber++
};
