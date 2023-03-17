'use strict';
//Generate random number
//
let my_number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const checkUserNumber = () => {
  let userNumber = Number(document.getElementById('userNumber').value);
  console.log(userNumber);
  if (score > 1) {
    if (userNumber === my_number) {
      document.querySelector('.message').textContent =
        'Correct Number... 🎉🎉🎊🎊';
      document.querySelector('body').style.backgroundColor = 'green';
      highScore = Math.max(score, highScore);
      document.querySelector('.highscore').textContent = highScore;
      document.querySelector('.number').textContent = my_number;
    } else if (userNumber > my_number) {
      document.querySelector('.message').textContent = '📈 Too High... ';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (userNumber < my_number) {
      document.querySelector('.message').textContent = '📉 Too Low... ';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = 'Game Over... ☠️❌';
    document.querySelector('.score').textContent = '0';
  }
};
document.querySelector('#check_btn').addEventListener('click', checkUserNumber);
document.querySelector('#againBtn').addEventListener('click', () => {
  document.querySelector('body').style.backgroundColor = 'black';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('#userNumber').value = '';
  document.querySelector('.message').textContent = 'Start Guessing...';
  my_number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
});
