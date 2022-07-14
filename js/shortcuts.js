let array = {
  "btn-main-windows": "F3",
};

array["btn-main-windows"] = "F12";

document.addEventListener("keydown", (ev) => {
  console.log(ev.key);
  document.getElementById("shortcut-prompt").innerHTML += ev.key;
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
