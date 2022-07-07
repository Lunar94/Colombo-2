("use strict");
/************
 *
 *  CONSOLE CAA
 *
 ************/
const btnMore = document.getElementById("btn-more");
const btnClear = document.getElementById("btn-clear");
const consoleCAA = document.getElementById("console");
const moreButtonIcon = document.getElementById("btn-more-icon");

// Effet de suppression console
btnClear.addEventListener("click", () => {
  if (document.querySelector(".response").textContent != ``) sfxDeleteConsole();

  document.querySelector(".response").classList.add("animate__flash");

  setTimeout(() => {
    document.querySelector(".response").classList.remove("animate__flash");
    document.querySelector(".response").textContent = ``;
  }, 1000);
});

const btnAstuces = document.getElementById("btn-astuces");
const theRoot = document.querySelector(":root");

function toggleClass() {
  if (btnAstuces.classList == "astucesActivated") {
    btnAstuces.classList.remove("astucesActivated");
    btnAstuces.style.setProperty("margin-top", "-41px");
    theRoot.style.setProperty("--Display-Astuces", "none");
  } else {
    btnAstuces.classList.add("astucesActivated");
    btnAstuces.style.setProperty("margin-top", "-64px");
    theRoot.style.setProperty("--Display-Astuces", "block");
  }
}

// Élargissement de la console
btnMore.addEventListener("click", () => {
  consoleEnlarge();
  moreButtonIcon.classList.add("animate__rotateIn");
  setTimeout(function () {
    moreButtonIcon.classList.remove("animate__rotateIn");
  }, 800);
});

function consoleEnlarge() {
  if (consoleCAA.style.height === "100%") {
    consoleCAA.classList.add("animate__shakeY");
    consoleCAA.classList.remove("console-overflow");
    setTimeout(() => {
      consoleCAA.classList.add("console-overflow");
      consoleCAA.classList.remove("animate__shakeY");
    }, 1000);
    consoleCAA.style.height = "50%";
    moreButtonIcon.classList.remove("fa-down-from-line");
    moreButtonIcon.classList.add("fa-expand");
    moreButtonIcon.classList.add("fa-animate__shakeY");
  } else {
    consoleCAA.style.height = "100%";
    consoleCAA.classList.add("animate__slideInUp");
    consoleCAA.classList.remove("console-overflow");
    setTimeout(() => {
      consoleCAA.classList.add("console-overflow");
      consoleCAA.classList.remove("animate__slideInUp");
    }, 1000);
    moreButtonIcon.classList.remove("fa-expand");
    moreButtonIcon.classList.add("fa-down-from-line");
  }
}

/***************
 *
 *  SETTINGS
 *
 ***************/
const btnParam = document.getElementById("btn-param");
const paramPanel = document.getElementById("param");
const paramButtonIcon = document.getElementById("btn-param-icon");

const root = document.querySelector(":root");
const nuanceDefault = document.getElementById("nuanceDefault");

const icons = document.querySelectorAll(".fa-4x");

btnParam.addEventListener("click", () => {
  paramButtonIcon.classList.add("animate__rotateIn");
  setTimeout(function () {
    paramButtonIcon.classList.remove("animate__rotateIn");
  }, 800);
  paramPanel.style.display = "block";
});

// checkbox glowing
const topbar = document.getElementById("topbar");
const tongue = document.getElementById("tongue");
const checkGlow = document.getElementById("glowing");
const checkConsMax = document.getElementById("consoleMax");
const wrapCons = document.getElementById("console-wrapper");

window.onload = function () {
  checkGlow.onchange = function () {
    if (checkGlow.checked == false) {
      topbar.style.animation = "none";
      tongue.style.animation = "none";
      wrapCons.style.animation = "none";
    } else {
      topbar.style.animation = "glow 5s infinite alternate";
      tongue.style.animation = "glow 5s infinite alternate";
      wrapCons.style.animation = "glow 5s infinite alternate";
    }
  };
};

// Boutons de fenêtres
const fermer = document.getElementById("close");
const agrandir = document.getElementById("maximize");
const reduire = document.getElementById("minimize");

const b1 = document.getElementById("topbar-1-demo");
const b2 = document.getElementById("topbar-2-demo");

const bStyle1 = document.getElementById("windowsBtnStyle1");
const bStyle2 = document.getElementById("windowsBtnStyle2");

b1.classList.add("topbar-1-demo-selected");
b1.addEventListener("click", () => {
  b1.classList.add("topbar-1-demo-selected");
  b2.classList.remove("topbar-1-demo-selected");

  bStyle1.style.display = "flex";
  bStyle2.style.display = "none";

  btnParamClose1.style.display = "flex";
  btnParamClose2.style.display = "none";
});

b2.addEventListener("click", () => {
  b1.classList.remove("topbar-1-demo-selected");
  b2.classList.add("topbar-1-demo-selected");

  bStyle1.style.display = "none";
  bStyle2.style.display = "flex";

  btnParamClose1.style.display = "none";
  btnParamClose2.style.display = "flex";
});

// Les nuances
nuanceDefault.classList.add("colorJS");

const colors = {
  nuanceDefault: {
    primary: "#F78361",
    secondary: "#9C523C",
    icons: "white",
    littleButton: "#F78361",
  },
  nuance1: {
    primary: "#DF6C7F",
    secondary: "#944855",
    icons: "white",
    littleButton: "#DF6C7F",
  },
  nuance2: {
    primary: "#B06392",
    secondary: "#7D4868",
    icons: "white",
    littleButton: "#B06392",
  },
  nuance3: {
    primary: "#785F90",
    secondary: "#5D4B6F",
    icons: "white",
    littleButton: "#785F90",
  },
  nuance4: {
    primary: "#485679",
    secondary: "#3F4B68",
    icons: "white",
    littleButton: "#485679",
  },
  nuance5: {
    primary: "#2F4858",
    secondary: "#596D79",
    icons: "white",
    littleButton: "white",
  },
  nuance6: {
    primary: "#1C6E7D",
    secondary: "#2798ad",
    icons: "white",
    littleButton: "#1C6E7D",
  },
  nuance7: {
    primary: "#039590",
    secondary: "#04c9c2",
    icons: "white",
    littleButton: "#039590",
  },
  nuance8: {
    primary: "#4BBC8E",
    secondary: "#378a68",
    icons: "white",
    littleButton: "#4BBC8E",
  },
  nuance9: {
    primary: "#9BDE7E",
    secondary: "#7bb063",
    icons: "#334b28",
    littleButton: "#7bb063",
  },
  nuance10: {
    primary: "#F9F871",
    secondary: "#bbba54",
    icons: "#4a4a20",
    littleButton: "#bbba54",
  },
};

let lastSelected = nuanceDefault;

document.getElementById("colors-container").addEventListener("click", (ev) => {
  if (ev.target.id == "colors-container") return;
  lastSelected.classList.remove("colorJS");
  ev.target.classList.add("colorJS");
  lastSelected = ev.target;
  root.style.setProperty("--theme-primary", colors[ev.target.id].primary);
  root.style.setProperty("--theme-secondary", colors[ev.target.id].secondary);
  root.style.setProperty("--theme-icons", colors[ev.target.id].icons);
  root.style.setProperty(
    "--Selection-Color",
    colors[ev.target.id].littleButton
  );
  root.style.setProperty(
    "--theme-little-button",
    colors[ev.target.id].littleButton
  );
});

// Couleur du texte de la console
let nuanceConsoleDefault = document.getElementById("def");
let nuanceConsoleGrey = document.getElementById("grey");
let nuanceConsoleWhite = document.getElementById("white");
let nuanceConsoleBlack = document.getElementById("black");

nuanceConsoleDefault.classList.add("colorJS");

nuanceConsoleDefault.addEventListener("click", () => {
  consoleColor = "cDefault";
  nuanceConsoleDefault.classList.add("colorJS");
  nuanceConsoleGrey.classList.remove("colorJS");
  nuanceConsoleWhite.classList.remove("colorJS");
  nuanceConsoleBlack.classList.remove("colorJS");
  nuanceConsoleWhite.classList.remove("colorJS-white");
  //NC1
  consoleCAA.style.setProperty("color", "var(--theme-primary)");
});

nuanceConsoleGrey.addEventListener("click", () => {
  consoleColor = "cGrey";
  nuanceConsoleDefault.classList.remove("colorJS");
  nuanceConsoleGrey.classList.add("colorJS");
  nuanceConsoleWhite.classList.remove("colorJS");
  nuanceConsoleBlack.classList.remove("colorJS");
  nuanceConsoleWhite.classList.remove("colorJS-white");
  //NC2
  consoleCAA.style.setProperty("color", "grey");
});

nuanceConsoleWhite.addEventListener("click", () => {
  consoleColor = "cWhite";
  nuanceConsoleDefault.classList.remove("colorJS");
  nuanceConsoleGrey.classList.remove("colorJS");
  nuanceConsoleWhite.classList.add("colorJS-white");
  nuanceConsoleBlack.classList.remove("colorJS");
  //NC3
  consoleCAA.style.setProperty("color", "white");
});

nuanceConsoleBlack.addEventListener("click", () => {
  consoleColor = "cBlack";
  nuanceConsoleDefault.classList.remove("colorJS");
  nuanceConsoleGrey.classList.remove("colorJS");
  nuanceConsoleWhite.classList.remove("colorJS");
  nuanceConsoleBlack.classList.add("colorJS");
  nuanceConsoleWhite.classList.remove("colorJS-white");
  //NC4
  consoleCAA.style.setProperty("color", "black");
});

/***************
 *
 *  MAIN BUTTONS
 *
 ***************/
const btnMain = document.querySelectorAll(".btn");
btnMain.forEach((btnMain) => {
  btnMain.addEventListener("click", () => {
    sfxClick();
    btnMain.classList.add("animate__animated");
    btnMain.classList.add("animate__heartBeat");
    btnMain.classList.remove("hovertext");

    setTimeout(function () {
      btnMain.classList.remove("animate__animated");
      btnMain.classList.remove("animate__heartBeat");
      btnMain.classList.add("hovertext");
    }, 300);
  });
});

/***************
 *
 *  SOUND EFFECTS
 *
 ***************/
const prev = document.querySelector(".swiper-button-prev");
const next = document.querySelector(".swiper-button-next");

function sfxClick() {
  const sfxClick = document.getElementById("sfxClick");
  sfxClick.play();
}

function sfxDeleteConsole() {
  const sfxDeleteConsole = document.getElementById("sfxDeleteConsole");
  sfxDeleteConsole.play();
}

function sfxChangePage() {
  const sfxChangePage = document.getElementById("sfxChangePage");
  sfxChangePage.play();
}

prev.addEventListener("click", () => {
  sfxChangePage();
});

next.addEventListener("click", () => {
  sfxChangePage();
});

/***************
 *
 *  SETTINGS NAVIGATION
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
const btnParamClose1 = document.getElementById("param-close1");
const btnParamClose2 = document.getElementById("param-close2");

btnParamClose1.addEventListener("click", () => {
  paramPanel.classList.add("animate__zoomOut");
  setTimeout(function () {
    paramPanel.style.display = "none";
    paramPanel.classList.remove("animate__zoomOut");
  }, 800);
});

btnParamClose2.addEventListener("click", () => {
  paramPanel.classList.add("animate__zoomOut");
  setTimeout(function () {
    paramPanel.style.display = "none";
    paramPanel.classList.remove("animate__zoomOut");
  }, 800);
});

btnConsole.classList.add("param-section-activated");

btnConsole.addEventListener("click", () => {
  btnConsole.classList.add("param-section-activated");
  btnAssistant.classList.remove("param-section-activated");
  btnTheme.classList.remove("param-section-activated");
  btnUpdate.classList.remove("param-section-activated");
  btnCredits.classList.remove("param-section-activated");

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
  btnConsole.classList.remove("param-section-activated");
  btnAssistant.classList.add("param-section-activated");
  btnTheme.classList.remove("param-section-activated");
  btnUpdate.classList.remove("param-section-activated");
  btnCredits.classList.remove("param-section-activated");

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
  btnConsole.classList.remove("param-section-activated");
  btnAssistant.classList.remove("param-section-activated");
  btnTheme.classList.add("param-section-activated");
  btnUpdate.classList.remove("param-section-activated");
  btnCredits.classList.remove("param-section-activated");

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
  btnConsole.classList.remove("param-section-activated");
  btnAssistant.classList.remove("param-section-activated");
  btnTheme.classList.remove("param-section-activated");
  btnUpdate.classList.add("param-section-activated");
  btnCredits.classList.remove("param-section-activated");

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
  btnConsole.classList.remove("param-section-activated");
  btnAssistant.classList.remove("param-section-activated");
  btnTheme.classList.remove("param-section-activated");
  btnUpdate.classList.remove("param-section-activated");
  btnCredits.classList.add("param-section-activated");

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

/***************
 *
 *  CUSTOM THEME SELECTOR - From Google)
 *
 ***************/
var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      /* When an item is clicked, update the original select box,
        and the selected item: */
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);
