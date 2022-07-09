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
  if (document.querySelector(".response").textContent != ``) {
    sfxDeleteConsole();
  }

  document.querySelector(".response").classList.add("animate__flash");

  setTimeout(() => {
    document.querySelector(".response").classList.remove("animate__flash");
    document.querySelector(".response").textContent = ``;
  }, 1000);
});

const btnAstuces = document.getElementById("btn-astuces");
const theRoot = document.querySelector(":root");

function toggleClass() {
  if (btnAstuces.classList.contains("astucesActivated")) {
    snd2.play();
    snd3.play();
    btnAstuces.classList.remove("astucesActivated");
    btnAstuces.style.setProperty("margin-top", "-41px");
    theRoot.style.setProperty("--display-astuces", "none");
    theRoot.style.setProperty(
      "--current-cursor",
      "url(../../assets/Images//cursors/Hand.cur), auto"
    );
  } else {
    snd1.play();
    snd2.play();
    btnAstuces.classList.add("astucesActivated");
    btnAstuces.style.setProperty("margin-top", "-64px");
    theRoot.style.setProperty("--display-astuces", "block");
    theRoot.style.setProperty(
      "--current-cursor",
      "url(../../assets/Images//cursors/Help.cur), auto"
    );
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
    snd2.play();
    snd5.play();
    consoleCAA.classList.add("animate__shakeY");
    consoleCAA.classList.remove("console-overflow");
    setTimeout(() => {
      consoleCAA.classList.add("console-overflow");
      consoleCAA.classList.remove("animate__shakeY");
    }, 500);
    consoleCAA.style.height = "50%";
    moreButtonIcon.classList.remove("fa-down-from-line");
    moreButtonIcon.classList.add("fa-expand");
    moreButtonIcon.classList.add("fa-animate__shakeY");
  } else {
    snd2.play();
    snd6.play();
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
  sfxBtn();
  snd7.play();
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
  snd13.play();
  b1.classList.add("topbar-1-demo-selected");
  b2.classList.remove("topbar-1-demo-selected");

  bStyle1.style.display = "flex";
  bStyle2.style.display = "none";

  btnParamClose1.style.display = "flex";
  btnParamClose2.style.display = "none";
});

b2.addEventListener("click", () => {
  +snd13.play();
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
    littleButton: "white",
  },
  nuance4: {
    primary: "#485679",
    secondary: "#3F4B68",
    icons: "white",
    littleButton: "white",
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
    littleButton: "white",
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
  snd14.play();
  lastSelected.classList.remove("colorJS");
  ev.target.classList.add("colorJS");
  lastSelected = ev.target;
  root.style.setProperty("--theme-primary", colors[ev.target.id].primary);
  root.style.setProperty("--theme-secondary", colors[ev.target.id].secondary);
  root.style.setProperty("--theme-icons", colors[ev.target.id].icons);
  root.style.setProperty(
    "--selection-color",
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
  snd14.play();
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
  snd14.play();
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
  snd14.play();
  consoleColor = "cWhite";
  nuanceConsoleDefault.classList.remove("colorJS");
  nuanceConsoleGrey.classList.remove("colorJS");
  nuanceConsoleWhite.classList.add("colorJS-white");
  nuanceConsoleBlack.classList.remove("colorJS");
  //NC3
  consoleCAA.style.setProperty("color", "white");
});

nuanceConsoleBlack.addEventListener("click", () => {
  snd14.play();
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

/***************;
 *
 *  SOUND EFFECTS
 *
 ***************/

function cashOut() {
  setTimeout(() => {
    snd8.play();
  }, 300);
}

const prev = document.querySelector(".swiper-button-prev");
const next = document.querySelector(".swiper-button-next");

prev.addEventListener("click", () => {
  sfxChangePage();
});

next.addEventListener("click", () => {
  sfxChangePage();
});

function sfxClick() {
  const sfxClick = document.getElementById("sfxClick");
  sfxClick.play();
}

function sfxDeleteConsole() {
  const sfxDeleteConsole = document.getElementById("sfxDeleteConsole");
  sfxDeleteConsole.play();
  snd2.play();
}

function sfxChangePage() {
  const sfxChangePage = document.getElementById("sfxChangePage");
  sfxChangePage.play();
  snd2.play();
}

function sfxBtn() {
  const sfxBtn = document.getElementById("sfxBtn");
  sfxBtn.play();
}

function sfxBtn2() {
  const sfxBtn2 = document.getElementById("sfxBtn2");
  sfxBtn2.play();
}

const snd1 = new Audio();
const src1 = document.createElement("source");
src1.type = "audio/mpeg";
src1.src = "./assets/sounds/sfxAstuces.wav";
snd1.appendChild(src1);

const snd2 = new Audio();
const src2 = document.createElement("source");
src2.type = "audio/mpeg";
src2.src = "./assets/sounds/sfxBtn.wav";
snd2.appendChild(src2);

const snd3 = new Audio();
const src3 = document.createElement("source");
src3.type = "audio/mpeg";
src3.src = "./assets/sounds/sfxAstuces2.ogg";
snd3.appendChild(src3);

const snd5 = new Audio();
const src5 = document.createElement("source");
src5.type = "audio/mpeg";
src5.src = "./assets/sounds/sfxConsoleMinimize.wav";
snd5.appendChild(src5);

const snd6 = new Audio();
const src6 = document.createElement("source");
src6.type = "audio/mpeg";
src6.src = "./assets/sounds/sfxGong.wav";
snd6.appendChild(src6);

const snd7 = new Audio();
const src7 = document.createElement("source");
src7.type = "audio/mpeg";
src7.src = "./assets/sounds/sfxDrill.wav";
snd7.appendChild(src7);

const snd8 = new Audio();
const src8 = document.createElement("source");
src8.type = "audio/mpeg";
src8.src = "./assets/sounds/sfxCash.wav";
snd8.appendChild(src8);

const snd9 = new Audio();
const src9 = document.createElement("source");
src9.type = "audio/mpeg";
src9.src = "./assets/sounds/sfxNewForm.wav";
snd9.appendChild(src9);

const snd10 = new Audio();
const src10 = document.createElement("source");
src10.type = "audio/mpeg";
src10.src = "./assets/sounds/sfxCancel.wav";
snd10.appendChild(src10);

const snd11 = new Audio();
const src11 = document.createElement("source");
src11.type = "audio/mpeg";
src11.src = "./assets/sounds/sfxSwitch.wav";
snd11.appendChild(src11);

const snd12 = new Audio();
const src12 = document.createElement("source");
src12.type = "audio/mpeg";
src12.src = "./assets/sounds/sfxSwitch2.wav";
snd12.appendChild(src12);

const snd13 = new Audio();
const src13 = document.createElement("source");
src13.type = "audio/mpeg";
src13.src = "./assets/sounds/sfxAnvil.wav";
snd13.appendChild(src13);

const snd14 = new Audio();
const src14 = document.createElement("source");
src14.type = "audio/mpeg";
src14.src = "./assets/sounds/sfxChirp.wav";
snd14.appendChild(src14);

const snd15 = new Audio();
const src15 = document.createElement("source");
src15.type = "audio/mpeg";
src15.src = "./assets/sounds/sfxMinimize.wav";
snd15.appendChild(src15);

let snd16 = new Audio();
let src16 = document.createElement("source");
src16.type = "audio/mpeg";
src16.src = "./assets/sounds/sfxMaximize.wav";
snd16.appendChild(src16);

let snd17 = new Audio();
let src17 = document.createElement("source");
src17.type = "audio/mpeg";
src17.src = "./assets/sounds/sfxExit.wav";
snd17.appendChild(src17);

let snd18 = new Audio();
let src18 = document.createElement("source");
src18.type = "audio/mpeg";
src18.src = "./assets/sounds/sfxCredits.mp3";
snd18.loop = true;
snd18.appendChild(src18);

let snd19 = new Audio();
let src19 = document.createElement("source");
src19.type = "audio/mpeg";
src19.src = "./assets/sounds/sfxShhh.wav";
snd19.appendChild(src19);

const switches = document.querySelectorAll(".cb");
switches.forEach((xSwitch) => {
  xSwitch.addEventListener("click", () => {
    if (xSwitch.checked) {
      snd11.play();
    } else {
      snd12.play();
    }
  });
});

// function myFunction(grandeur) {
//   if (grandeur.matches) {
//     // If media query matches
//     document.body.style.backgroundColor = "yellow";

//   } else {
//     document.body.style.backgroundColor = "pink";
//     console.log("PINK");
//   }
// }

// let grandeur = window.matchMedia("(max-width: 600px)");
// myFunction(grandeur); // Call listener function at run time
// grandeur.addListener(myFunction); // Attach listener function on state changes

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
  snd18.pause();
  snd18.currentTime = 0;
  paramPanel.classList.add("animate__zoomOut");
  setTimeout(function () {
    paramPanel.style.display = "none";
    paramPanel.classList.remove("animate__zoomOut");
  }, 800);

  sfxBtn2();
});

btnParamClose2.addEventListener("click", () => {
  snd18.pause();
  snd18.currentTime = 0;
  paramPanel.classList.add("animate__zoomOut");
  setTimeout(function () {
    paramPanel.style.display = "none";
    paramPanel.classList.remove("animate__zoomOut");
  }, 800);

  sfxBtn2();
});

btnConsole.classList.add("param-section-activated");

btnConsole.addEventListener("click", () => {
  snd18.pause();
  snd18.currentTime = 0;
  snd2.play();
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
  snd18.pause();
  snd18.currentTime = 0;
  snd2.play();
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
  snd18.pause();
  snd18.currentTime = 0;
  snd2.play();
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
  snd18.pause();
  snd18.currentTime = 0;
  snd2.play();
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
  snd2.play();
  snd18.play();

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
