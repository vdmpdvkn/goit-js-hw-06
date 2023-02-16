const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = document.querySelector("#ingredients");
// console.log(ingredientsListEl);
// console.log(ingredients);
const listItemsEl = ingredients.map((ingredient) => {
  const listItemEl = document.createElement("li");
  listItemEl.textContent = ingredient;
  listItemEl.classList.add("item");
  // console.log(listItemEl);
  return listItemEl;
});

ingredientsListEl.prepend(...listItemsEl);
