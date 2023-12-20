const recipeName = prompt("Enter the name of the recipe:");
const ingredientCount = parseInt(prompt("How many ingredients do we need for the recipe?"));
const ingredients = [];

for (let i = 0; i < ingredientCount; i++) {
  const ingredient = prompt(`Enter ingredient #${i + 1}:`);
  ingredients.push(ingredient);
}

const recipeNameElement = document.getElementById('recipeName');
const ingredientListElement = document.getElementById('list');

recipeNameElement.innerText = recipeName;


ingredientListElement.innerHTML = '';


for (let i = 0; i < ingredients.length; i++) {
  let li = document.createElement('li');
  li.textContent = ingredients[i];
  ingredientListElement.appendChild(li);
}


