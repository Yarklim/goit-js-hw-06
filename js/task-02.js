const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');

const makeIngredientsList = (options) => {
  return options.map((option) => {
    const ingredientEl = document.createElement('li');
    ingredientEl.classList.add('item');
    ingredientEl.textContent = option;

    return ingredientEl;
  });
};

const elements = makeIngredientsList(ingredients);
ingredientsListEl.append(...elements);
