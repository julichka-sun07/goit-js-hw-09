// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const form = document.querySelector('.form');
const resultContainer = document.createElement('div');
form.insertAdjacentElement('afterend', resultContainer);

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const delayInput = document.querySelector('input[name="delay"]');
  const stepInput = document.querySelector('input[name="step"]');
  const amountInput = document.querySelector('input[name="amount"]');

  const delay = parseInt(delayInput.value);
  const step = parseInt(stepInput.value);
  const amount = parseInt(amountInput.value);

  resultContainer.innerHTML = ''; // Очищення контейнера з результатами

  for (let i = 0; i < amount; i++) {
    const position = i + 1;
    createPromise(position, delay + step * i)
      .then(({ position, delay }) => {
        const message = `✅ Fulfilled promise ${position} in ${delay}ms`;
        const messageElement = document.createElement('p');
        messageElement.textContent = message;
        messageElement.classList.add('fulfilled');
        resultContainer.appendChild(messageElement);
        console.log(message);
      })
      .catch(({ position, delay }) => {
        const message = `❌ Rejected promise ${position} in ${delay}ms`;
        const messageElement = document.createElement('p');
        messageElement.textContent = message;
        messageElement.classList.add('rejected');
        resultContainer.appendChild(messageElement);
        console.log(message);
      });
  }
});