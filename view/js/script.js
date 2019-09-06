"use strict";

window.onload = function createButtons(event) {
  for (let i = 1; i <= 20; i++) {
    var btn = document.createElement("button");
    btn.innerHTML = "Button #" + i;
    btn.class = "buttons";
    btn.id = i;
    btn.onclick = function(e) {
      alert(e.target.id);
    };
    document.getElementById("button-container").appendChild(btn);
  }
};
