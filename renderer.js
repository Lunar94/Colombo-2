("use strict");
let content_id = 0;
// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All APIs exposed by the context bridge is available here.

// Binds the buttons to the context bridge API.
document.getElementById("minimize").addEventListener("click", () => {
  windowControls.minimize();
});

document.getElementById("maximize").addEventListener("click", () => {
  windowControls.maximize();
});

document.getElementById("close").addEventListener("click", () => {
  const exit = document.getElementById("exit");
  exit.style.display = "block";
  setTimeout(function () {
    windowControls.close();
  }, 3500);
});

document.getElementById("minimize2").addEventListener("click", () => {
  windowControls.minimize();
});

document.getElementById("maximize2").addEventListener("click", () => {
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
let cDefault = 1;
let cGrey;
let cWhite;
let cBlack;

document
  .querySelector(".buttons")
  .addEventListener("click", async function (event) {
    const file = event?.target?.attributes["data-psfile"]?.value;
    if (file) {
      const res = await window.electron.runPS(file);
      const response = document.querySelector(".response");

      if (cDefault == 1) {
        response.insertAdjacentHTML(
          "beforeend",
          `
          <div id="${content_id}-content" class="animate__animated animate__bounceInLeft" style="color:var(--Theme1-Color3); white-space: pre-wrap;">${res}</div>
          `
        );
      }

      if (cGrey == 1) {
        response.insertAdjacentHTML(
          "beforeend",
          `
          <div id="${content_id}-content" class="animate__animated animate__bounceInLeft" style="color:grey; white-space: pre-wrap;">${res}</div>
          `
        );
      }

      if (cWhite == 1) {
        response.insertAdjacentHTML(
          "beforeend",
          `
          <div id="${content_id}-content" class="animate__animated animate__bounceInLeft" style="color:white; white-space: pre-wrap;">${res}</div>
          `
        );
      }

      if (cBlack == 1) {
        response.insertAdjacentHTML(
          "beforeend",
          `
          <div id="${content_id}-content" class="animate__animated animate__bounceInLeft" style="color:black; white-space: pre-wrap;">${res}</div>
          `
        );
      }
    }
  });
