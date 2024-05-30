const btnSigIn = document.getElementById("sign-in"),
  btnSigUp = document.getElementById("sign-up"),
  formRegister = document.querySelector(".register"),
  formLogin = document.querySelector(".login"),
  Open = document.getElementById("open"),
  wndw = document.querySelector(".window"),
  Closed = document.getElementById("close");

btnSigIn.addEventListener("click", e => {
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide");
})

btnSigUp.addEventListener("click", e => {
    formLogin.classList.add("hide");
    formRegister.classList.remove("hide");
})

Open.addEventListener("click", (e) => {
    wndw.classList.remove("emergent");

});

Closed.addEventListener("click", (e) => {
    wndw.classList.add("emergent");
});
