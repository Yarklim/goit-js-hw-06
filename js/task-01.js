// ========= Number of categories =========
const categoriesEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesEl.length}`);

// ========= Category and elements =========
const categoryNameEl = document.querySelectorAll('h2');
const elementsList1 = categoriesEl[0].querySelectorAll('li');

console.log(`Category: ${categoryNameEl[0].textContent}`);
console.log(`Elements: ${elementsList1.length}`);

const elementsList2 = categoriesEl[1].querySelectorAll('li');

console.log(`Category: ${categoryNameEl[1].textContent}`);
console.log(`Elements: ${elementsList2.length}`);

const elementsList3 = categoriesEl[2].querySelectorAll('li');

console.log(`Category: ${categoryNameEl[2].textContent}`);
console.log(`Elements: ${elementsList3.length}`);
