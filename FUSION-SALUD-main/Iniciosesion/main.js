let btnSigIn = document.getElementById("sign-in"),
  btnSigUp = document.getElementById("sign-up"),
  btnRegister = document.getElementById("sign"),
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

// btnRegister.addEventListener("click", e => {
//   formRegister.classList.add("hide");
//   formLogin.classList.remove("hide");
// })

const nick = document.getElementById("name"),
  type = document.getElementById("type"),
  id = document.getElementById("number"),
  email = document.getElementById("email"),
  pass = document.getElementById("password"),
  boox = document.getElementById("condition"),
  form = document.getElementById("form")
  text = document.getElementById("warnings");

form.addEventListener("submit", e => {
  e.preventDefault();
  let warnings = "";
  let entrar = false;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  if(nick.value.length <6){
    warnings += 'El nombre no es valido <br>'
    entrar = true;
  }
  if(id.value.length <10){
    warnings += 'El numero de documento no es valido <br>'
    entrar = true;
  }
  if(!regexEmail.test(email.value)){
    warnings += 'El email no es valido <br>'
    entrar = true;
  }
  if(pass.value.length < 8){
    warnings += 'La constraseña no es valida <br>'
    entrar = true;
  }
  if(entrar){
    text.innerHTML = warnings;
  }
});
