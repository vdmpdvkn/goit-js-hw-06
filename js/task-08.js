const loginFormEl = document.querySelector(".login-form");
console.log(loginFormEl);
loginFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const { email, password } = e.currentTarget; // не понял зачем в примере из конспекта использовался elements: {e, p}, выполнил обычную деструктуризацию, работает точно также. Если это ошибка, или плохой тон, напишите пожалуйста какую роль играет elements в этом случае :)
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
