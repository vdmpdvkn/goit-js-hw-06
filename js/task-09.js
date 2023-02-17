const refs = {
  bodyRef: document.querySelector("body"),
  changeColorBtnRef: document.querySelector(".change-color"),
  infoRef: document.querySelector(".color"),
};
const { bodyRef, changeColorBtnRef, infoRef } = refs;

changeColorBtnRef.addEventListener("click", () => {
  bodyRef.style.backgroundColor = getRandomHexColor();
  infoRef.textContent = `${getRandomHexColor()}`;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
