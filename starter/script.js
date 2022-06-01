'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number! 🎉';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value;
*/
let randomNum = Math.trunc(Math.random() * 20 + 1);

let gameScore = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ Please Enter a Number';
  }
  // When Player has won
  else if (guess === randomNum) {
    document.querySelector('.message').textContent = 'Correct Number! 🎉';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = randomNum;
    if (gameScore > highScore) {
      highScore = gameScore;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // When guess is wrong
  else if (guess !== randomNum) {
    if (gameScore > 1) {
      document.querySelector('.message').textContent =
        guess > randomNum ? ' 📈 Number is high' : '📉 Number is low';
      gameScore--;
      document.querySelector('.score').textContent = gameScore;
    } else {
      document.querySelector('.message').textContent = ' 💀💀💀 Game Over!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  gameScore = 20;
  randomNum = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = gameScore;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
