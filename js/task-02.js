const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const fullList = document.querySelector("ul#ingredients");

const ingredientsList = ingredients.map(ingredient => {

  const ingredientsList = document.createElement("li");

  const listItem = document.createElement("p");
    listItem.classList.add('item');
    listItem.textContent = ingredient;

    ingredientsList.appendChild( listItem);
    return ingredientsList;
});

fullList.append(...ingredientsList);