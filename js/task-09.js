function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector("body");
const changeColorBtnEl = document.querySelector(".change-color");
const infoEl = document.querySelector(".color");
changeColorBtnEl.addEventListener("click", () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  infoEl.textContent = `${getRandomHexColor()}`;
});
