("use strict");
/************
 *
 *  🔣 GET INPUT VALUE
 *
 ************/
//* FUNCTIONS
const computer = document.getElementById("computer");
// Récupérer le value de l'input principal (#computer)

function alphanumeric(inputtxt) {
  const letterNumber = /^[0-9a-bA-B]+$/;
  if (computer.value.match(letterNumber)) {
    return true;
  } else {
    alert("message");
    return false;
  }
}

// Ici c'est le début de notre interval (100ms).
const interval = setInterval(function () {
  if (computer.value.match("")) {
    computer.style.color = "white";
  }

  // ==================================================================================
  const filter = /^[-abcdefghijklmnoprstuvwxy0123456789./*+,=#]+$/;

  if (computer.value.match(filter)) {
    computer.style.color = "#910B00";
  } else {
    console.log("Fin de l'interval 1");
  }

  // ==================================================================================
  const filterFinal = /^[0-9qz]+$/;
  if (computer.value.length == 7 && computer.value.match(filterFinal)) {
    // if (computer.value.match(filterFinal)) {
    // } else {
    //   console.log("Fin de l'interval");
    // }

    console.log("anus");
    computer.style.color = "var(--theme-primary)";
  }
}, 100);
