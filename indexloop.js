"use strich";

const h2names = document.querySelector("#names");
const inputNames = document.querySelector("#name");
const button = document.querySelector("button");

// model
const model = ["Mads", "Malte", "Morris"];
init();
// controller

function init() {
  button.addEventListener("click", button_click);
  upDateView();
}

function addNameToModel(name) {
  model.push(name);
}

function removeName(id) {
  model.splice(id, 1);
  upDateView();
}

function upDateView() {
  h2names.innerHTML = "";
  model.forEach((each, i) => {
    h2names.innerHTML += `<span class="clickname" data-id="${i}">${each}</span>`;
  });
  document.querySelectorAll(".clickname").forEach((each) => {
    each.addEventListener("click", klikspan);
  });
}

function button_click() {
  addNameToModel(inputNames.value);
}

function klikspan(evt) {
  removeName(evt.target.dataset.id);
  upDateView();
}
