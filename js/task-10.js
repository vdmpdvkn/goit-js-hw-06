const refs = {
  inputRef: document.querySelector('input[type = "number"]'),
  buttonCreateRef: document.querySelector("button[data-create]"),
  buttonDestroyRef: document.querySelector("button[data-destroy]"),
  boxesRef: document.querySelector("#boxes"),
};
const { inputRef, buttonCreateRef, buttonDestroyRef, boxesRef } = refs;

buttonCreateRef.addEventListener("click", (e) => {
  e.preventDefault();

  createBoxes(inputRef.value, boxesRef);
  inputRef.value = "";
});
buttonDestroyRef.addEventListener("click", () => {
  boxesRef.innerHTML = "";
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount, divToPush) {
  for (let i = 0; i < amount; i += 1) {
    divToPush.insertAdjacentHTML(
      "beforeend",
      `<div style = "width: ${30 + 10 * i}px; height: ${
        30 + 10 * i
      }px; background-color: ${getRandomHexColor()}"></div>`
    );
  }
}
