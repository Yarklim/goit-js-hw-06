function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// --------- Elements ------------
const inputEl = document.querySelector('input');
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const divBoxesEl = document.querySelector('#boxes');

// --------- Get Attributte --------
const minAttrInputEl = inputEl.getAttribute('min');
const maxAttrInputEl = inputEl.getAttribute('max');

// --------- Listeners -----------
inputEl.addEventListener('blur', onInputChange);
btnCreateEl.addEventListener('click', onBtnCreate);
btnDestroyEl.addEventListener('click', destroyBoxes);

// --------- Create New Elements ---------
function createBoxes(amount) {
  let divWidth = 30;
  let divHeight = 30;
  const newElements = [];
  for (let i = 1; i <= amount; i++) {
    const newEl = document.createElement('div');
    newEl.style.width = `${divWidth}px`;
    newEl.style.height = `${divHeight}px`;
    newEl.style.backgroundColor = getRandomHexColor();

    newElements.push(newEl);

    divWidth += 10;
    divHeight += 10;
  }
  return newElements;
}

// -------- Create New Tags in HTML ---------
function onBtnCreate(event) {
  const elements = createBoxes(inputElValue);
  divBoxesEl.append(...elements);
}

// -------- Get Input Value --------
let inputElValue = 0;

function onInputChange(event) {
  inputElValue = Number(event.currentTarget.value);

  if (inputElValue < minAttrInputEl || inputElValue > maxAttrInputEl) {
    alert('Please write number in range of 1-100');
    inputElValue = 0;
    inputEl.value = '';
  }
}

// -------- Destroy New Tegs ---------
function destroyBoxes(event) {
  divBoxesEl.innerHTML = '';
  inputElValue = 0;
  inputEl.value = '';
}
