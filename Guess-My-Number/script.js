let secretNumber = Math.trunc(Math.random() * 20) + 1;

console.log(document.querySelector('.number').textContent);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  var guess = Number(document.querySelector('.guess').value);

  console.log(typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'correct number';
    displayMessage('correct number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 0) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'too high' : 'too low';
      displayMessage(guess > secretNumber ? 'too high' : 'too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'you lose the game';
      displayMessage('you lose the game');
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.score').textContent = 0;
    }
  }
  //  else if (guess > secretNumber) {
  //   if (score > 0) {
  //     document.querySelector('.message').textContent = 'too high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'you lose the game';
  //     document.querySelector('body').style.backgroundColor = 'red';
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 0) {
  //     document.querySelector('.message').textContent = 'too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'you lose the game';
  //     document.querySelector('body').style.backgroundColor = 'red';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  // document.querySelector('.message').textContent = 'start guessing';
  displayMessage('start guessing');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
