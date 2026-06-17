'use strict';

let player0Score = document.querySelector('#score--0');
let player1Score = document.querySelector('#score--1');
let diceEl = document.querySelector('.dice');
let CurrentPlayer = 0;
let scores = [0, 0];
let playing = true;
let player = document.querySelector('.player');
let p0 = document.querySelector('.player--0');
let p1 = document.querySelector('.player--1');
let CurrScore1 = document.querySelector('#current--0');
let CurrScore2 = document.querySelector('#current--1');
let rollBtn = document.querySelector('.btn--roll');
let newBtn = document.querySelector('.btn--new');
let holdBtn = document.querySelector('.btn--hold');
let CurrentScore = 0;
newBtn.addEventListener('click', function () {
  location.reload();
});
diceEl.classList.add('hidden');
player0Score.textContent = 0;
player1Score.textContent = 0;

rollBtn.addEventListener('click', function () {
  if (playing) {
    diceEl.classList.remove('hidden');

    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      CurrentScore += dice;
      document.getElementById(`current--${CurrentPlayer}`).textContent =
        CurrentScore;
      // `CurrScore${CurrentPlayer}`.textContent = CurrentScore;
    } else {
      CurrentScore = 0;
      document.getElementById(`current--${CurrentPlayer}`).textContent =
        CurrentScore;

      if (CurrentPlayer === 0 ? (CurrentPlayer = 1) : (CurrentPlayer = 0));
      p0.classList.toggle('player--active');
      p1.classList.toggle('player--active');
    }
  }
});

holdBtn.addEventListener('click', function () {
  if (playing) {
    document.getElementById(`current--${CurrentPlayer}`).textContent = 0;

    scores[CurrentPlayer] += CurrentScore;
    document.getElementById(`score--${CurrentPlayer}`).textContent =
      scores[CurrentPlayer];

    if (scores[CurrentPlayer] >= 10) {
      playing = false;
      if (
        p0.classList.contains('player--active')
          ? p0.classList.add('player--winner')
          : p1.classList.add('player--winner')
      );
    }

    if (CurrentPlayer === 0 ? (CurrentPlayer = 1) : (CurrentPlayer = 0));
    p0.classList.toggle('player--active');
    p1.classList.toggle('player--active');
    CurrentScore = 0;
  }
});
