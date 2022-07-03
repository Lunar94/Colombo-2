("use strict");
let btn_copier_id = 0;
let btn_copier;
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

// PS PART

document
  .querySelector(".buttons")
  .addEventListener("click", async function (event) {
    const file = event?.target?.attributes["data-psfile"]?.value;
    if (file) {
      const res = await window.electron.runPS(file);
      // document.querySelector(".response").textContent += `${res}`;
      const response = document.querySelector(".response");

      response.insertAdjacentHTML(
        "beforeend",
        `
        <div id="${content_id}-content" class="animate__animated animate__bounceInLeft" style="color:var(--Theme1-Color3); white-space: pre-wrap;">${res}</div>
        `
      );
      btn_copier = document.getElementById(`${btn_copier_id}-btn-copier`);
      btn_copier_id++;
    }
  });

/**************
Made by StormLx
**************/

const copy = function (id) {
  if (!isAutoCopyChecked) {
    content_id++;
    return;
  }
  const copyText = document.getElementById(`${id}-content`).textContent;
  copyToClipboard(copyText);
};

const copyToClipboard = function (str) {
  const tmp = document.createElement("textarea");
  tmp.value = str;
  tmp.setAttribute("readonly", "");
  tmp.style.position = "absolute";
  tmp.style.left = "-9999px";
  document.body.appendChild(tmp);
  tmp.select();
  document.execCommand("copy");
  document.body.removeChild(tmp);
  content_id++;
};
