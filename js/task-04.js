const refs = {
  decrementBtnEl: document.querySelector('button[data-action="decrement"]'),
  valueEl: document.querySelector("#value"),
  incrementBtnEl: document.querySelector('button[data-action="increment"]'),
};
const { decrementBtnEl, valueEl, incrementBtnEl } = refs;

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
