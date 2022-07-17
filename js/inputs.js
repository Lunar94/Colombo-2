("use strict");
/************
 *
 *  🔣 GET COMPUTER INPUT VALUE
 *
 ************/
//* VARIABLES
const computer = document.getElementById("computer");
const filter = /^[0-9qz]+$/;
const frequency = 1000;

//* FUNCTIONS
// ============================ DÉBUT DE L'INTERVAL =================================
const interval = setInterval(function fcnCptChk() {
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

    const p = new Ping();

    p.ping("http://googlef.com", function (err, data) {
      // Also display error if err is returned.
      if (err) {
        console.log("Le poste ne répond pas.");
        data = data + " " + err;
      }
      document.getElementById("console").innerHTML = data;
    });
  }
}, frequency);
// ============================ FIN DE L'INTERVAL ====================================
