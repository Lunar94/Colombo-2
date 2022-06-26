("use strict");

/************
 *
 *  Console
 *
 ************/
const btnMore = document.getElementById("btn-more");
const btnClear = document.getElementById("btn-clear");
const consoleCAA = document.getElementById("console");
const moreButtonIcon = document.getElementById("btn-more-icon");

btnClear.addEventListener("click", () => {
  document.querySelector(".response").classList.add("animate__flash");
  setTimeout(function () {
    document.querySelector(".response").classList.remove("animate__flash");
  }, 1000);

  setTimeout(function () {
    document.querySelector(".response").textContent = ``;
  }, 1000);
});

btnMore.addEventListener("click", () => {
  myFunction();
  moreButtonIcon.classList.add("animate__rotateIn");
  setTimeout(function () {
    moreButtonIcon.classList.remove("animate__rotateIn");
  }, 800);
});

function myFunction() {
  if (consoleCAA.style.height === "100%") {
    consoleCAA.classList.add("animate__heartBeat");

    // on lui ajoute puis retire le console-overflow 1000ms plus tard
    consoleCAA.classList.remove("console-overflow");
    setTimeout(function () {
      consoleCAA.classList.add("console-overflow");
    }, 1000);

    setTimeout(function () {
      consoleCAA.classList.remove("animate__heartBeat");
    }, 1000);

    consoleCAA.style.height = "50%";
    moreButtonIcon.classList.remove("fa-down-from-line");
    moreButtonIcon.classList.add("fa-expand");
    moreButtonIcon.classList.add("fa-animate__shakeY");
  } else {
    consoleCAA.style.height = "100%";
    consoleCAA.classList.add("animate__slideInUp");

    consoleCAA.classList.remove("console-overflow");
    setTimeout(function () {
      consoleCAA.classList.add("console-overflow");
    }, 1000);

    setTimeout(function () {
      consoleCAA.classList.remove("animate__slideInUp");
    }, 1000);

    moreButtonIcon.classList.remove("fa-expand");
    moreButtonIcon.classList.add("fa-down-from-line");
  }
}

/***************
 *
 *  Settings
 *
 ***************/

// ELEMENTS HTML
const btnParam = document.getElementById("btn-param");
const btnParamClose = document.getElementById("param-close");
const paramPanel = document.getElementById("param");
const paramButtonIcon = document.getElementById("btn-param-icon");
const checkCopyAuto = document.getElementById("copyauto");

// GLOBAL VARIABLES
let isAutoCopyChecked = false;

// FUNCTIONS
btnParam.addEventListener("click", () => {
  paramButtonIcon.classList.add("animate__rotateIn");
  setTimeout(function () {
    paramButtonIcon.classList.remove("animate__rotateIn");
  }, 800);
  paramPanel.style.display = "block";
});

btnParamClose.addEventListener("click", () => {
  paramPanel.classList.add("animate__zoomOut");
  setTimeout(function () {
    paramPanel.style.display = "none";
    paramPanel.classList.remove("animate__zoomOut");
  }, 800);
});

checkCopyAuto.addEventListener("change", function () {
  isAutoCopyChecked = this.checked;
});

/***************
 *
 *  Main Buttons
 *
 ***************/
const btnMain = document.querySelector(".btn");

btnMain.addEventListener("click", () => {
  btnMain.classList.add("animate__animated");
  btnMain.classList.add("animate__tada");
  setTimeout(function () {
    btnMain.classList.remove("animate__animated");
    btnMain.classList.remove("animate__tada");
  }, 1000);
});

/***************
 *
 *  Settings NAV
 *
 ***************/
const consoleDisplay = document.getElementById("param-console-content");
const assistantDisplay = document.getElementById("param-assistant-content");
const themeDisplay = document.getElementById("param-theme-content");
const updateDisplay = document.getElementById("param-update-content");
const creditsDisplay = document.getElementById("param-credits-content");

const btnConsole = document.getElementById("console-section");
const btnAssistant = document.getElementById("assistant-section");
const btnTheme = document.getElementById("theme-section");
const btnUpdate = document.getElementById("update-section");
const btnCredits = document.getElementById("credits-section");

btnConsole.addEventListener("click", () => {
  consoleDisplay.classList.add("animate__fadeIn");
  setTimeout(function () {
    consoleDisplay.classList.remove("animate__fadeIn");
  }, 1000);
  consoleDisplay.style.display = "block";
  assistantDisplay.style.display = "none";
  themeDisplay.style.display = "none";
  updateDisplay.style.display = "none";
  creditsDisplay.style.display = "none";
});

btnAssistant.addEventListener("click", () => {
  consoleDisplay.style.display = "none";
  assistantDisplay.classList.add("animate__fadeIn");
  setTimeout(function () {
    assistantDisplay.classList.remove("animate__fadeIn");
  }, 1000);
  assistantDisplay.style.display = "block";
  themeDisplay.style.display = "none";
  updateDisplay.style.display = "none";
  creditsDisplay.style.display = "none";
});

btnTheme.addEventListener("click", () => {
  consoleDisplay.style.display = "none";
  assistantDisplay.style.display = "none";
  themeDisplay.classList.add("animate__fadeIn");
  setTimeout(function () {
    themeDisplay.classList.remove("animate__fadeIn");
  }, 1000);
  themeDisplay.style.display = "block";
  updateDisplay.style.display = "none";
  creditsDisplay.style.display = "none";
});

btnUpdate.addEventListener("click", () => {
  consoleDisplay.style.display = "none";
  assistantDisplay.style.display = "none";
  themeDisplay.style.display = "none";
  updateDisplay.classList.add("animate__fadeIn");
  setTimeout(function () {
    updateDisplay.classList.remove("animate__fadeIn");
  }, 1000);
  updateDisplay.style.display = "block";
  creditsDisplay.style.display = "none";
});

btnCredits.addEventListener("click", () => {
  consoleDisplay.style.display = "none";
  assistantDisplay.style.display = "none";
  themeDisplay.style.display = "none";
  updateDisplay.style.display = "none";
  creditsDisplay.classList.add("animate__fadeIn");
  setTimeout(function () {
    creditsDisplay.classList.remove("animate__fadeIn");
  }, 1000);
  creditsDisplay.style.display = "block";
});
