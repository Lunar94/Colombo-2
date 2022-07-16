let array = {
  "btn-main-windows": "F3",
};

array["btn-main-windows"] = "F12";

document.addEventListener("keydown", (ev) => {
  console.log(ev.key);

  shownShortcut = document.createElement("shownShortcut");
  shownShortcut.innerHTML = ev.key;
  shownShortcut.style.textShadow =
    "0 0 80px rgb(192 219 255 / 35%), 0 0 32px rgb(65 120 255 / 24%)";
  shownShortcut.style.letterSpacing = ".1em";
  shownShortcut.style.fontSize = "3rem";

  if (shortcutWrapper.style.display == "block") {
    document.getElementById("shortcut-prompt").appendChild(shownShortcut);
  }

  if (
    ![
      "F1",
      "F2",
      "F3",
      "F4",
      "F5",
      "F6",
      "F7",
      "F8",
      "F9",
      "F10",
      "F12",
    ].includes(ev.key)
  )
    return;
  let buttonId = Object.keys(array).find((key) => array[key] == ev.key);
  if (!buttonId) return;
  document.getElementById(buttonId).click();
});

const btnCancelShortCutPrompt = document.getElementById(
  "cancel-shortcut-prompt"
);

btnCancelShortCutPrompt.addEventListener("click", () => {
  soundPlayer.play("sfxClick.wav", "click");
  shortcutWrapper.style.display = "none";
});
