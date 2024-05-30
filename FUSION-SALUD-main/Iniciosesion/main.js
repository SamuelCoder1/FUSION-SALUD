let btnSigIn = document.getElementById("sign-in"),
  btnSigUp = document.getElementById("sign-up"),
  btnRegister = document.getElementById("sign"),
  containerFormRegister = document.querySelector(".register"),
  containerFormLogin = document.querySelector(".login"),
  Open = document.getElementById("open"),
  wndw = document.querySelector(".window"),
  Closed = document.getElementById("close");

btnSigIn.addEventListener("click", e => {
    containerFormRegister.classList.add("hide");
    containerFormLogin.classList.remove("hide");
})

btnSigUp.addEventListener("click", e => {
    containerFormLogin.classList.add("hide");
    containerFormRegister.classList.remove("hide");
})

// btnRegister.addEventListener("click", e => {
//   containerFormRegister.classList.add("hide");
//   containerFormLogin.classList.remove("hide");
// })
