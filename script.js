`use strict`;

const questions = [
  `Guess which of them is heaviest?`,
  `Guess Who has greenish eyes?`,
  `Guess who has earned a lot of diplomas?`,
  `Guess who has blond boy?`,
  `Guess who will become Mother soon?`,
  `Guess who loves sweets most?`,
  `Guess who hates russia most?`,
  `Blowed up explosive in her hands:`,
  `Loves kids most:`,
  `Enjoys watching same movies:`,
];
const answers = [
  `Giorgi`,
  `Nadzia`,
  `Tako`,
  `Keto`,
  `Tako`,
  `Giorgi`,
  `Giorgi`,
  `Keto`,
  `Tako`,
  `Nadzia`,
];
const check = document.querySelector(`.check`);
const selectIAnswer = document.querySelector(`#answer`);
const userGuess = document.querySelector(`.userGuess`);
const answerValue = document.querySelector(`#answervalue`);
const next = document.querySelector(`.next`);
const question = document.querySelector(`.question`);
const scorediv = document.querySelector(`.score`);
const win = document.querySelector(`.win`);
let x = 0;
let score = 3;
//first question:

check.addEventListener(`click`, function () {
  selectIAnswer.textContent = userGuess.value;
  if (selectIAnswer.textContent === answers[x]) {
    document.querySelector(`#answervalue`).textContent = `Correct!`;
    answerValue.style.color = `rgb(5, 55, 5)`;
    selectIAnswer.style.backgroundColor = `green`;
    next.style.display = `block`;
    if (x === answers.length - 1) {
      win.style.position = `absolute`;
      win.style.zIndex = `2`;
      win.style.top = `50%;`;
      win.style.left = `70%;`;
      win.style.width = `90vw`;
      win.style.height = `70vh`;
      win.style.textAlign = `center`;
      win.style.lineHeight = `200px`;
      win.style.fontSize = `3vw`;
      win.style.backgroundColor = `green`;
      win.textContent = `🏆YOU WIN! Score = ${score}`;
    }
  } else {
    score--;
    scorediv.textContent = `Score = ${score}`;
    if (score === 1) {
      scorediv.style.color = `red`;
    }
    if (score <= 0) {
      win.style.position = `absolute`;
      win.style.zIndex = `2`;
      win.style.top = `50%;`;
      win.style.left = `70%;`;
      win.style.width = `90vw`;
      win.style.height = `70vh`;
      win.style.textAlign = `center`;
      win.style.lineHeight = `200px`;
      win.style.fontSize = `3vw`;
      win.style.backgroundColor = `green`;
      win.textContent = `🙄YOU LOSE! Score = ${score}`;
    }
    answerValue.textContent = `Incorrect!`;
    answerValue.style.color = `red`;
    selectIAnswer.style.backgroundColor = `rgb(147, 35, 35)`;
  }
});

// second question:

next.addEventListener(`click`, function () {
  x++;
  question.textContent = questions[x];
  answerValue.textContent = ``;
  next.style.display = `none`;
  selectIAnswer.textContent = `?`;
  userGuess.value = ``;
});
