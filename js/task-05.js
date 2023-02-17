const textInputEl = document.querySelector("#name-input");
const textOutputEl = document.querySelector("#name-output");
textInputEl.addEventListener("input", (e) => {
  textOutputEl.textContent = e.currentTarget.value;
  if (e.currentTarget.value === "") {
    textOutputEl.textContent = "Anonymous";
  }
});
