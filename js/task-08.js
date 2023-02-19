const loginFormEl = document.querySelector(".login-form");
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');

emailInput.addEventListener("input", () => {
  emailInput.value = emailInput.value.trim();
});

passwordInput.addEventListener("input", () => {
  passwordInput.value = passwordInput.value.trim();
});

loginFormEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Введите валидные данные");
  } else {
    const infoObj = {
      email: email.value,
      password: password.value,
    };
    console.log(infoObj);
  }
  e.currentTarget.reset();
});
