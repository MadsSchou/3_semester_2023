`use strict`;

const person3 = {
  firstName: "Harry",
  lastname: "Potter",
  hired: false,
};

const person4 = {
  firstName: "Fred",
  lastname: "Weasley",
  hired: false,
};

function hire(person) {
  person.hired = true;
}
function fire(person) {
  person.hired = false;
}
function fireOrHire(action, person) {
  action(person);
}

fireOrHire(hire, person4);
fireOrHire(fire, person3);

console.log(fireOrHire, person3);
