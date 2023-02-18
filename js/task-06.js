const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", (e) => {
  if (e.currentTarget.value.trim().length === Number(inputEl.dataset.length)) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
});
