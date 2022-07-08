const form1 = document.getElementById("form-1");
let btnNewIncident = document.getElementById("new-incident");
let btnNewDemande = document.getElementById("new-demande");
const btnCancelIncident = document.getElementById("cancelIncident");
const bg = document.getElementById("bgs2");

btnNewIncident.addEventListener("click", () => {
  snd9.play();
  btnNewDemande.classList.add("greyscale");
  form1.classList.add("animate__animated");
  form1.classList.add("animate__bounceInUp");
  form1.style.display = "flex";
});

btnCancelIncident.addEventListener("click", () => {
  snd10.play();
  btnNewDemande.classList.remove("greyscale");
  form1.classList.add("animate__bounceOutDown");

  setTimeout(function () {
    form1.style.display = "none";
    form1.classList.remove("animate__bounceOutDown");
  }, 1000);
});

btnNewDemande.addEventListener("click", () => {
  snd9.play();
  form2.style.display = "flex";
});
