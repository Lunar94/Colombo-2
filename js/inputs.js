("use strict");
/************
 *
 *  🔣 GET COMPUTER INPUT VALUE
 *
 ************/
//* VARIABLES
const computer = document.getElementById("computer");
const filter = /^[0-9qz]+$/;

//* FUNCTIONS
// ============================ DÉBUT DE L'INTERVAL =================================
const interval = setInterval(function () {
  const injar = document.getElementById("computer").value;

  // ==================================================================================

  if (
    injar.charAt(0) == "Z" ||
    injar.charAt(0) == "Q" ||
    injar.charAt(0) == "z" ||
    injar.charAt(0) == "q"
  ) {
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
  }

  // ==================================================================================

  if (injar.length == 7 && injar.match(filter)) {
    computer.style.color = "var(--theme-primary)";
    console.log("L'ENTRÉE EST COMPLÈTE & VALIDE - PROCÉDER AU PINGTEST");
  }
}, 50);
// ============================ FIN DE L'INTERVAL ====================================
