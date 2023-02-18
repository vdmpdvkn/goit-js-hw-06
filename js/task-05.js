const textInputEl = document.querySelector("#name-input");
const textOutputEl = document.querySelector("#name-output");
textInputEl.addEventListener("input", (e) => {
  const trimmedString = e.currentTarget.value.trim();
  textOutputEl.textContent = trimmedString;

  if (trimmedString === "") {
    textOutputEl.textContent = "Anonymous";
  }
});
