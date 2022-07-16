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
  shownShortcut.style.animation = "fadeIn 0.5s";

  if (shortcutWrapper.style.display !== "block") {
    // document.getElementById("shortcut-prompt").appendChild(shownShortcut);
    //   if (ev.key.length == 3) {
    //     alert("ANUS");
    //   }
  }

  if (
    [
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
    document.getElementById("shortcut-prompt").appendChild(shownShortcut);

  document.getElementById("shortcut-prompt").style.boxShadow =
    "0 0 50px 6px white";
  btnCancelShortCutPrompt.style.display = "none";

  alertify.set("notifier", "position", "bottom-center");
  const notification = alertify.notify(
    '<i class="fa-duotone fa-keyboard-down"></i>' +
      " Raccourcis " +
      ev.key +
      " assigné",
    "success",
    2
  );

  setTimeout(() => {
    document.getElementById("shortcut-prompt").style.animation =
      "flipOutY 1.5s";
  }, 500);

  setTimeout(() => {
    shortcutWrapper.style.animation = "fadeOut 1s";
    setTimeout(() => {
      shortcutWrapper.style.display = "none";
      shortcutWrapper.style.animation = "fadeIn 1s";
      document.getElementById("shortcut-prompt").removeChild(shownShortcut);
      document.getElementById("shortcut-prompt").style.boxShadow = "none";
    }, 500);
  }, 1000);

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
