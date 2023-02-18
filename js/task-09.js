const refs = {
  bodyRef: document.querySelector("body"),
  changeColorBtnRef: document.querySelector(".change-color"),
  infoRef: document.querySelector(".color"),
};
const { bodyRef, changeColorBtnRef, infoRef } = refs;

changeColorBtnRef.addEventListener("click", () => {
  const bodyBgc = getRandomHexColor();
  bodyRef.style.backgroundColor = bodyBgc;
  infoRef.textContent = bodyBgc;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
