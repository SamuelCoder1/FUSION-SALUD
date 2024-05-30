
let slider = document.querySelector(".slider-container")
let sliderIndividual = document.querySelectorAll(".content-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 3000;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    slides();
},intervalo);



function slides(){
    slider.style = `
      transform : translate(-${width*contador}px);
      transition : transform 2s;
      z-index : -1;
      position : relative;
    `
    contador++;

    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 1s";
            
            contador=1;
        },1500)
    }
}

let btnConsultation = document.querySelector(".consultation"),
    btnEsthetic = document.querySelector(".esthetic"),
    btnSurgery = document.querySelector(".surgery"),
    objetive = document.getElementById("objetive"),
    consultation = document.getElementById("veterinary-consultation")
    Aesthetics = document.getElementById("Aesthetics"),
    diagnoses = document.getElementById("diagnoses"),
    hide = document.querySelector(".hide");

btnConsultation.addEventListener("click", e => {
    objetive.classList.add("hide");
    Aesthetics.classList.add("hide");
    diagnoses.classList.add("hide");
    consultation.classList.remove("hide");
})
btnEsthetic.addEventListener("click", e => {
    objetive.classList.add("hide");
    consultation.classList.add("hide");
    diagnoses.classList.add("hide");
    Aesthetics.classList.remove("hide");
})
btnSurgery.addEventListener("click", e => {
    objetive.classList.add("hide");
    consultation.classList.add("hide");
    Aesthetics.classList.add("hide");
    diagnoses.classList.remove("hide");
})