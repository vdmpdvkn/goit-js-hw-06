const loginFormEl = document.querySelector(".login-form");
console.log(loginFormEl);
loginFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(e.currentTarget.elements);
  // console.log(e.currentTarget.email);
  const {
    elements: { email, password },
  } = e.currentTarget; // не понял зачем в примере из конспекта использовался elements: {e, p}, выполнил обычную деструктуризацию, работает точно также. Если это ошибка, или плохой тон, напишите пожалуйста какую роль играет elements в этом случае :)
  const trimmedEmail = email.value.trim();
  const trimmedPassword = password.value.trim();
  if (trimmedEmail === "" || trimmedPassword === "") {
    alert("Введите валидные данные");
  } else {
    const infoObj = {
      email: trimmedEmail,
      password: trimmedPassword,
    };
    console.log(infoObj);
  }
  e.currentTarget.reset();
});
