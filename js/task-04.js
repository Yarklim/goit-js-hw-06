// Create counter
let counterValue = 0;

// Create variables
const actionsBtn = document.querySelectorAll('#counter button');
const counterEl = document.querySelector('#value');

const decrementBtnEl = actionsBtn[0];
const incrementBtnEl = actionsBtn[1];

// Create listeneres
decrementBtnEl.addEventListener('click', onDecrementBtnClick);
incrementBtnEl.addEventListener('click', onIncrementBtnClick);

// Create functions
function onIncrementBtnClick() {
  counterValue += 1;
  counterEl.textContent = counterValue;
}

function onDecrementBtnClick() {
  counterValue -= 1;
  counterEl.textContent = counterValue;
}
