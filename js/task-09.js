function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const buttonEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

buttonEl.addEventListener('click', onColorChange);

function onColorChange() {
  const newColor = getRandomHexColor();
  spanEl.textContent = newColor;
  bodyEl.style.backgroundColor = newColor;
}
