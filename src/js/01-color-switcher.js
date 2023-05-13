const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
let intervalId = null;

startButton.addEventListener('click', startChangingBackground);
stopButton.addEventListener('click', stopChangingBackground);

function startChangingBackground() {
  startButton.setAttribute('disabled', 'disabled');
  intervalId = setInterval(changeBackgroundColor, 1000);
}

function stopChangingBackground() {
  startButton.removeAttribute('disabled');
  clearInterval(intervalId);
}

function changeBackgroundColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}
