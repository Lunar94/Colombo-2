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
  const injar = document.getElementById("computer").value;
  const filterFinal = /^[0-9qz]+$/;

  //================================================================================

  if (injar.charAt(0) == "z" || injar.charAt(0) == "q") {
    computer.style.color = "white";
  } else if (injar == "") {
    computer.style.color = "white";
  } else {
    computer.style.color = "red";
  }

  // ==================================================================================

  if (
    isNaN(injar.charAt(1)) ||
    isNaN(injar.charAt(2)) ||
    isNaN(injar.charAt(3)) ||
    isNaN(injar.charAt(4)) ||
    isNaN(injar.charAt(5)) ||
    isNaN(injar.charAt(6))
  ) {
    computer.style.color = "red";
  } else {
    console.log("MARIE");
  }

  // ==================================================================================

  const filter = /^[-abcdefghijklmnoprstuvwxy0123456789./*+,=#]+$/;

  if (injar.match(filter)) {
  } else {
    console.log("Fin de l'interval 1");
  }

  // ==================================================================================

  if (injar.length == 7 && injar.match(filterFinal)) {
    // if (cinjar.match(filterFinal)) {
    // } else {
    //   console.log("Fin de l'interval");
    // }

    console.log("anus");
    computer.style.color = "var(--theme-primary)";
  }
}, 100);
