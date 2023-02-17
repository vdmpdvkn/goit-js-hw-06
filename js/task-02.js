const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = document.querySelector("#ingredients");

function createListElement(arr) {
  return arr.map((element) => {
    const itemEl = document.createElement("li");
    itemEl.textContent = element;
    itemEl.classList.add("item");
    return itemEl;
  });
}
ingredientsListEl.prepend(...createListElement(ingredients));
