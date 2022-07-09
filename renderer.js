("use strict");
let content_id = 0;
// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All APIs exposed by the context bridge is available here.

// Binds the buttons to the context bridge API.
document.getElementById("minimize").addEventListener("click", () => {
  snd15.play();
  windowControls.minimize();
});

document.getElementById("maximize").addEventListener("click", () => {
  snd16.play();
  windowControls.maximize();
});

document.getElementById("close").addEventListener("click", () => {
  snd17.play();
  const exit = document.getElementById("exit");
  exit.style.display = "block";
  setTimeout(function () {
    windowControls.close();
  }, 3500);
});

document.getElementById("minimize2").addEventListener("click", () => {
  snd15.play();
  windowControls.minimize();
});

document.getElementById("maximize2").addEventListener("click", () => {
  snd16.play();
  windowControls.maximize();
});

document.getElementById("close2").addEventListener("click", () => {
  const exit = document.getElementById("exit");
  exit.style.display = "block";
  setTimeout(function () {
    windowControls.close();
  }, 3500);
});

// PS PART
let consoleColor = "cDefault";

document
  .querySelector(".buttons")
  .addEventListener("click", async function (event) {
    const file = event?.target?.attributes["data-psfile"]?.value;
    if (file) {
      let res = await window.electron.runPS(file);
      res = res
        .split("\n")
        .filter((e) => e != "\r")
        .filter((e) => e != null)
        .join("\n");

      const response = document.querySelector(".response");

      let div = document.createElement("div");
      div.id = `${content_id}-content`;
      div.classList.add("animate__animated");
      div.classList.add("animate__bounceInLeft");

      div.style.whiteSpace = "pre-wrap";
      div.style.padding = "1rem";

      switch (consoleColor) {
        case "cDefault":
          div.style.color = "var(--theme-primary)";
          break;
        case "cGrey":
          div.style.color = "grey";
          break;
        case "cWhite":
          div.style.color = "white";
          break;
        case "cBlack":
          div.style.color = "black";
          break;
      }
      div.innerText = res;

      response.appendChild(div);
    }
  });
