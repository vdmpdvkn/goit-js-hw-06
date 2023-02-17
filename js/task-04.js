const decrementBtnEl = document.querySelector(
  'button[data-action="decrement"]'
);
const valueEl = document.querySelector("#value");
const incrementBtnEl = document.querySelector(
  'button[data-action="increment"]'
);
let counterValue = 0;
function increment() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}
function decrement() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

decrementBtnEl.addEventListener("click", decrement);
incrementBtnEl.addEventListener("click", increment);
