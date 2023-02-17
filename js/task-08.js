const loginFormEl = document.querySelector(".login-form");
console.log(loginFormEl);
loginFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const { email, password } = e.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Введите валидные данные");
  } else {
    const infoObj = {
      email: email.value,
      password: password.value,
    };
    console.log(infoObj);
  }
});
