("use strict");
/************
 *
 *  🔣 GET INPUT VALUE
 *
 ************/
//* FUNCTIONS
const computer = document.getElementById("computer");
// Récupérer le value de l'input principal (#computer)
function getInputValue() {
  // Selecting the input element and get its value
  const inputVal = computer.value;
}

getInputValue();

const interval = setInterval(function () {
  if (computer.value.length == 7) {
    console.log("anus");
    computer.style.color = "var(--theme-primary)";
  }

  if (computer.value.length == 7) {
    computer.style.color = "var(--theme-primary)";
  }

  if (["Q", "Z", "q", "z"].indexOf(computer.value) != 0) {
    computer.style.color = "red";
  }
}, 500);
