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

// Effet de suppression console
btnClear.addEventListener("click", () => {


  document.querySelector(".response").classList.add("animate__flash");
  setTimeout(function () {
    document.querySelector(".response").classList.remove("animate__flash");
  }, 1000);

  setTimeout(function () {
    document.querySelector(".response").textContent = ``;
  }, 1000);
});

const btnAstuces = document.getElementById("btn-astuces");
const theRoot = document.querySelector(":root");

function toggleClass() {
  if (btnAstuces.classList == "astucesActivated") {
    btnAstuces.classList.remove("astucesActivated");
    btnAstuces.style.setProperty("margin-top", "-53px");
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
    setTimeout(function () {
      consoleCAA.classList.add("console-overflow");
    }, 1000);
    setTimeout(function () {
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
const btnParam = document.getElementById("btn-param");
const paramPanel = document.getElementById("param");
const paramButtonIcon = document.getElementById("btn-param-icon");

const root = document.querySelector(":root");
const nuanceDefault = document.getElementById("nuance-default");
const nuance_1 = document.getElementById("nuance-1");
const nuance_2 = document.getElementById("nuance-2");
const nuance_3 = document.getElementById("nuance-3");
const nuance_4 = document.getElementById("nuance-4");
const nuance_5 = document.getElementById("nuance-5");
const nuance_6 = document.getElementById("nuance-6");
const nuance_7 = document.getElementById("nuance-7");
const nuance_8 = document.getElementById("nuance-8");
const nuance_9 = document.getElementById("nuance-9");
const nuance_10 = document.getElementById("nuance-10");

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

nuanceDefault.addEventListener("click", () => {
  nuanceDefault.classList.add("colorJS");
  nuance_1.classList.remove("colorJS");
  nuance_2.classList.remove("colorJS");
  nuance_3.classList.remove("colorJS");
  nuance_4.classList.remove("colorJS");
  nuance_5.classList.remove("colorJS");
  nuance_6.classList.remove("colorJS");
  nuance_7.classList.remove("colorJS");
  nuance_8.classList.remove("colorJS");
  nuance_9.classList.remove("colorJS");
  nuance_10.classList.remove("colorJS");
  //N0 (default)
  root.style.setProperty("--Theme1-Color3", "#F78361");
  root.style.setProperty("--Theme1-Color4", "#9C523C");
  root.style.setProperty("--Theme1-Color5", "white");
  root.style.setProperty("--Selection-Color", "white");
  root.style.setProperty("--little-buttons", "var(--Theme1-Color3)");
  icons.forEach((icons) => {
    icons.style.setProperty("color", "white");
  });
});

nuance_1.addEventListener("click", () => {
  nuanceDefault.classList.remove("colorJS");
  nuance_1.classList.add("colorJS");
  nuance_2.classList.remove("colorJS");
  nuance_3.classList.remove("colorJS");
  nuance_4.classList.remove("colorJS");
  nuance_5.classList.remove("colorJS");
  nuance_6.classList.remove("colorJS");
  nuance_7.classList.remove("colorJS");
  nuance_8.classList.remove("colorJS");
  nuance_9.classList.remove("colorJS");
  nuance_10.classList.remove("colorJS");
  //N1
  root.style.setProperty("--Theme1-Color3", "#DF6C7F");
  root.style.setProperty("--Theme1-Color4", "#944855");
  root.style.setProperty("--Theme1-Color5", "white");
  root.style.setProperty("--Selection-Color", "white");
  root.style.setProperty("--little-buttons", "var(--Theme1-Color3)");
  icons.forEach((icons) => {
    icons.style.setProperty("color", "white");
  });
});

nuance_2.addEventListener("click", () => {
  nuanceDefault.classList.remove("colorJS");
  nuance_1.classList.remove("colorJS");
  nuance_2.classList.add("colorJS");
  nuance_3.classList.remove("colorJS");
  nuance_4.classList.remove("colorJS");
  nuance_5.classList.remove("colorJS");
  nuance_6.classList.remove("colorJS");
  nuance_7.classList.remove("colorJS");
  nuance_8.classList.remove("colorJS");
  nuance_9.classList.remove("colorJS");
  nuance_10.classList.remove("colorJS");
  //N2
  root.style.setProperty("--Theme1-Color3", "#B06392");
  root.style.setProperty("--Theme1-Color4", "#7D4868");
  root.style.setProperty("--Theme1-Color5", "white");
  root.style.setProperty("--Selection-Color", "white");
  root.style.setProperty("--little-buttons", "var(--Theme1-Color3)");
  icons.forEach((icons) => {
    icons.style.setProperty("color", "white");
  });
});

nuance_3.addEventListener("click", () => {
  nuanceDefault.classList.remove("colorJS");
  nuance_1.classList.remove("colorJS");
  nuance_2.classList.remove("colorJS");
  nuance_3.classList.add("colorJS");
  nuance_4.classList.remove("colorJS");
  nuance_5.classList.remove("colorJS");
  nuance_6.classList.remove("colorJS");
  nuance_7.classList.remove("colorJS");
  nuance_8.classList.remove("colorJS");
  nuance_9.classList.remove("colorJS");
  nuance_10.classList.remove("colorJS");
  //N3
  root.style.setProperty("--Theme1-Color3", "#785F90");
  root.style.setProperty("--Theme1-Color4", "#5D4B6F");
  root.style.setProperty("--Theme1-Color5", "white");
  root.style.setProperty("--Selection-Color", "white");
  root.style.setProperty("--little-buttons", "var(--Theme1-Color3)");
  icons.forEach((icons) => {
    icons.style.setProperty("color", "white");
  });
});

nuance_4.addEventListener("click", () => {
  nuanceDefault.classList.remove("colorJS");
  nuance_1.classList.remove("colorJS");
  nuance_2.classList.remove("colorJS");
  nuance_3.classList.remove("colorJS");
  nuance_4.classList.add("colorJS");
  nuance_5.classList.remove("colorJS");
  nuance_6.classList.remove("colorJS");
  nuance_7.classList.remove("colorJS");
  nuance_8.classList.remove("colorJS");
  nuance_9.classList.remove("colorJS");
  nuance_10.classList.remove("colorJS");
  //N4
  root.style.setProperty("--Theme1-Color3", "#485679");
  root.style.setProperty("--Theme1-Color4", "#3F4B68");
  root.style.setProperty("--Theme1-Color5", "white");
  root.style.setProperty("--Selection-Color", "white");
  root.style.setProperty("--little-buttons", "var(--Theme1-Color3)");
  icons.forEach((icons) => {
    icons.style.setProperty("color", "white");
  });
});

nuance_5.addEventListener("click", () => {
  nuanceDefault.classList.remove("colorJS");
  nuance_1.classList.remove("colorJS");
  nuance_2.classList.remove("colorJS");
  nuance_3.classList.remove("colorJS");
  nuance_4.classList.remove("colorJS");
  nuance_5.classList.add("colorJS");
  nuance_6.classList.remove("colorJS");
  nuance_7.classList.remove("colorJS");
  nuance_8.classList.remove("colorJS");
  nuance_9.classList.remove("colorJS");
  nuance_10.classList.remove("colorJS");
  //N5
  root.style.setProperty("--Theme1-Color3", "#2F4858");
  root.style.setProperty("--Theme1-Color4", "#596D79");
  root.style.setProperty("--Theme1-Color5", "white");
  root.style.setProperty("--Selection-Color", "white");
  root.style.setProperty("--little-buttons", "white");
  // cDefault = 1;
  // cGrey = 0;
  // cWhite = 0;
  // cBlack = 0;
  // nuanceConsoleDefault.classList.remove("colorJS");
  // nuanceConsoleGrey.classList.remove("colorJS");
  // nuanceConsoleWhite.classList.add("colorJS-white");
  // nuanceConsoleBlack.classList.remove("colorJS");

  icons.forEach((icons) => {
    icons.style.setProperty("color", "white");
  });
});

nuance_6.addEventListener("click", () => {
  nuanceDefault.classList.remove("colorJS");
  nuance_1.classList.remove("colorJS");
  nuance_2.classList.remove("colorJS");
  nuance_3.classList.remove("colorJS");
  nuance_4.classList.remove("colorJS");
  nuance_5.classList.remove("colorJS");
  nuance_6.classList.add("colorJS");
  nuance_7.classList.remove("colorJS");
  nuance_8.classList.remove("colorJS");
  nuance_9.classList.remove("colorJS");
  nuance_10.classList.remove("colorJS");
  //N6
  root.style.setProperty("--Theme1-Color3", "#1C6E7D");
  root.style.setProperty("--Theme1-Color4", "#2798ad");
  root.style.setProperty("--Theme1-Color5", "white");
  root.style.setProperty("--Selection-Color", "white");
  root.style.setProperty("--little-buttons", "var(--Theme1-Color3)");
  icons.forEach((icons) => {
    icons.style.setProperty("color", "white");
  });
});

nuance_7.addEventListener("click", () => {
  nuanceDefault.classList.remove("colorJS");
  nuance_1.classList.remove("colorJS");
  nuance_2.classList.remove("colorJS");
  nuance_3.classList.remove("colorJS");
  nuance_4.classList.remove("colorJS");
  nuance_5.classList.remove("colorJS");
  nuance_6.classList.remove("colorJS");
  nuance_7.classList.add("colorJS");
  nuance_8.classList.remove("colorJS");
  nuance_9.classList.remove("colorJS");
  nuance_10.classList.remove("colorJS");
  //N7
  root.style.setProperty("--Theme1-Color3", "#039590");
  root.style.setProperty("--Theme1-Color4", "#04c9c2");
  root.style.setProperty("--Theme1-Color5", "white");
  root.style.setProperty("--Selection-Color", "white");
  root.style.setProperty("--little-buttons", "var(--Theme1-Color3)");
  icons.forEach((icons) => {
    icons.style.setProperty("color", "white");
  });
});

nuance_8.addEventListener("click", () => {
  nuanceDefault.classList.remove("colorJS");
  nuance_1.classList.remove("colorJS");
  nuance_2.classList.remove("colorJS");
  nuance_3.classList.remove("colorJS");
  nuance_4.classList.remove("colorJS");
  nuance_5.classList.remove("colorJS");
  nuance_6.classList.remove("colorJS");
  nuance_7.classList.remove("colorJS");
  nuance_8.classList.add("colorJS");
  nuance_9.classList.remove("colorJS");
  nuance_10.classList.remove("colorJS");
  //N8
  root.style.setProperty("--Theme1-Color3", "#4BBC8E");
  root.style.setProperty("--Theme1-Color4", "#378a68");
  root.style.setProperty("--Theme1-Color5", "white");
  root.style.setProperty("--Selection-Color", "white");
  root.style.setProperty("--little-buttons", "var(--Theme1-Color3)");
  icons.forEach((icons) => {
    icons.style.setProperty("color", "white");
  });
});

nuance_9.addEventListener("click", () => {
  nuanceDefault.classList.remove("colorJS");
  nuance_1.classList.remove("colorJS");
  nuance_2.classList.remove("colorJS");
  nuance_3.classList.remove("colorJS");
  nuance_4.classList.remove("colorJS");
  nuance_5.classList.remove("colorJS");
  nuance_6.classList.remove("colorJS");
  nuance_7.classList.remove("colorJS");
  nuance_8.classList.remove("colorJS");
  nuance_9.classList.add("colorJS");
  nuance_10.classList.remove("colorJS");
  //N9
  root.style.setProperty("--Theme1-Color3", "#9BDE7E");
  root.style.setProperty("--Theme1-Color4", "#7bb063");
  root.style.setProperty("--Theme1-Color5", "#334b28");
  root.style.setProperty("--Selection-Color", "#334b28");
  root.style.setProperty("--little-buttons", "var(--Theme1-Color3)");
  icons.forEach((icons) => {
    icons.style.setProperty("color", "#507340");
  });
});

nuance_10.addEventListener("click", () => {
  nuanceDefault.classList.remove("colorJS");
  nuance_1.classList.remove("colorJS");
  nuance_2.classList.remove("colorJS");
  nuance_3.classList.remove("colorJS");
  nuance_4.classList.remove("colorJS");
  nuance_5.classList.remove("colorJS");
  nuance_6.classList.remove("colorJS");
  nuance_7.classList.remove("colorJS");
  nuance_8.classList.remove("colorJS");
  nuance_9.classList.remove("colorJS");
  nuance_10.classList.add("colorJS");
  //N10
  root.style.setProperty("--Theme1-Color3", "#F9F871");
  root.style.setProperty("--Theme1-Color4", "#bbba54");
  root.style.setProperty("--Theme1-Color5", "#4a4a20");
  root.style.setProperty("--Selection-Color", "#4a4a20");
  root.style.setProperty("--little-buttons", "var(--Theme1-Color3)");

  icons.forEach((icons) => {
    icons.style.setProperty("color", "#797836");
  });
});

// Couleur du texte de la console
let nuanceConsoleDefault = document.getElementById("def");
let nuanceConsoleGrey = document.getElementById("grey");
let nuanceConsoleWhite = document.getElementById("white");
let nuanceConsoleBlack = document.getElementById("black");

nuanceConsoleDefault.classList.add("colorJS");

nuanceConsoleDefault.addEventListener("click", () => {
  cDefault = 1;
  cGrey = 0;
  cWhite = 0;
  cBlack = 0;
  nuanceConsoleDefault.classList.add("colorJS");
  nuanceConsoleGrey.classList.remove("colorJS");
  nuanceConsoleWhite.classList.remove("colorJS");
  nuanceConsoleBlack.classList.remove("colorJS");
  nuanceConsoleWhite.classList.remove("colorJS-white");
  //NC1
  consoleCAA.style.setProperty("color", "var(--Theme1-Color3)");
});

nuanceConsoleGrey.addEventListener("click", () => {
  cDefault = 0;
  cGrey = 1;
  cWhite = 0;
  cBlack = 0;
  nuanceConsoleDefault.classList.remove("colorJS");
  nuanceConsoleGrey.classList.add("colorJS");
  nuanceConsoleWhite.classList.remove("colorJS");
  nuanceConsoleBlack.classList.remove("colorJS");
  nuanceConsoleWhite.classList.remove("colorJS-white");
  //NC2
  consoleCAA.style.setProperty("color", "grey");
});

nuanceConsoleWhite.addEventListener("click", () => {
  cDefault = 0;
  cGrey = 0;
  cWhite = 1;
  cBlack = 0;
  nuanceConsoleDefault.classList.remove("colorJS");
  nuanceConsoleGrey.classList.remove("colorJS");
  nuanceConsoleWhite.classList.add("colorJS-white");
  nuanceConsoleBlack.classList.remove("colorJS");
  //NC3
  consoleCAA.style.setProperty("color", "white");
});

nuanceConsoleBlack.addEventListener("click", () => {
  cDefault = 0;
  cGrey = 0;
  cWhite = 0;
  cBlack = 1;
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
 *  Main Buttons
 *
 ***************/
const btnMain = document.querySelectorAll(".btn");
btnMain.forEach((btnMain) => {
  btnMain.addEventListener("click", () => {
    btnMain.classList.add("animate__animated");
    btnMain.classList.add("animate__heartBeat");
    sfxClick();

    setTimeout(function () {
      btnMain.classList.remove("animate__animated");
      btnMain.classList.remove("animate__heartBeat");
    }, 1000);
  });
});

/***************
 *
 *  SOUND EFFECTS
 *
 ***************/
function sfxClick() {
  const sfxClick = document.getElementById("sfxClick");
  sfxClick.play();
}

function sfxDeleteConsole() {
  const sfxDeleteConsole = document.getElementById("sfxDeleteConsole");
  sfxDeleteConsole.play();
}

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
 *  Custom Selector (Sélecteur de Thème) - From Google
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

// OVERLAY
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
