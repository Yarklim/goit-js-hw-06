const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
  textEl.style.color = `#${event.currentTarget.value}2121`;
}
