'use strict';

let msgEL = document.querySelector('.message');
console.log(msgEL.textContent);

let bodyEl = document.querySelector('.body');
let score = 20;
const guess = Number(document.querySelector('.guess').value);
let highscore = 0;
console.log('High score is: ' + highscore);

let random_number = Math.trunc(Math.random() * 20) + 1;
console.log(random_number);
let check_btnEl = document.querySelector('.check');
check_btnEl.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // console.log(guess);
  // console.log(typeof guess);
  // console.log(typeof random_number);

  if (!guess) {
    console.log('There is no number');
  } else if (guess === random_number) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    msgEL.textContent = 'You are correct 🎉';
    if (score > highscore) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;
    document.querySelector('.number').textContent = random_number;
  } else if (Math.abs(random_number - guess) <= 1) {
    score--;
    document.querySelector('.score').textContent = score;
    msgEL.textContent = 'too close!!';
  } else if (
    guess < random_number
      ? (msgEL.textContent = 'too low!!')
      : (msgEL.textContent = 'too High!!')
  );
  score--;
  if (score <= 0) {
    msgEL.textContent = 'You lost the game!';
  }
  document.querySelector('.score').textContent = score;
});

document.querySelector('.again').addEventListener('click', function () {
  // score = 20;
  // document.querySelector('.score').textContent = score;

  // random_number = Math.trunc(Math.random() * 20) + 1;
  // msgEL.textContent = 'Start Guessing...';
  // console.log(random_number);
  // document.querySelector('body').style.backgroundColor = '#222';
  location.reload();
});
