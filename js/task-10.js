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
});
buttonDestroyRef.addEventListener("click", () => {
  boxesRef.innerHTML = "";
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount, divToPush) {
  let boxesArr = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    // box.textContent = i;

    box.style.cssText = `
    width: ${30 + 10 * i}px; 
    height: ${30 + 10 * i}px; 
    background-color: ${getRandomHexColor()}; `;
    boxesArr.push(box);
  }
  divToPush.prepend(...boxesArr);
}
