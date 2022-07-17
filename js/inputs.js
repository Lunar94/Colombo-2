("use strict");
/************
 *
 *  🔣 GET COMPUTER INPUT VALUE
 *
 ************/
//* VARIABLES
const computer = document.getElementById("computer");
const filter = /^[0-9qzQZ]+$/;
const frequency = 100;
const p = new Ping();
const iconComputer = document.querySelector(".fa-computer");
const iconLaptop = document.querySelector(".fa-laptop");

//* FUNCTIONS
// ============================ DÉBUT DE L'INTERVAL =================================

const interval = setInterval(function fcnCptChk() {
  let injar = document.getElementById("computer").value;

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

    p.ping("http://googlef.com", function (err, data) {
      if (err) {
        data = data + " " + err;
        console.log("Le poste ne répond pas.");
        if (
          document.getElementById("computer").value.charAt(0) == "Z" ||
          document.getElementById("computer").value.charAt(0) == "z"
        ) {
          iconLaptop.style.color = "red";
          iconComputer.style.color = "#8A8791";
        } else {
          iconComputer.style.color = "red";
          iconLaptop.style.color = "#8A8791";
        }
      } else {
        console.log("Le poste répond.");
        let pingResult = 1;

        if (
          document.getElementById("computer").value.charAt(0) == "Z" ||
          document.getElementById("computer").value.charAt(0) == "z"
        ) {
          iconLaptop.style.color = "green";
          iconComputer.style.color = "#8A8791";
        } else {
          iconComputer.style.color = "green";
          iconLaptop.style.color = "#8A8791";
        }
      }
      // document.getElementById("console").innerHTML = data;
    });
  } else {
    iconLaptop.style.color = " #8A8791";
    iconComputer.style.color = " #8A8791";
  }
}, frequency);

// ============================ FIN DE L'INTERVAL ====================================
