"use strict";

/*Loop exercises*/

/*0-9*/

for (let counter = 0; counter < 10; counter++) {
  console.log(counter);
}
// console.log(`After the loop counter is ${counter}`);

/*1-10*/

for (let counter = 1; counter < 11; counter++) {
  console.log(counter);
}
// console.log(`After the loop counter is ${counter}`);

/*10-0*/

for (let counter = 10; counter > -1; counter--) {
  console.log(counter);
  if (counter < 1) {
    console.log("Lift Off");
  }
}

// console.log(`After the loop counter is ${counter}`);

/*1-19 only odd numbers*/

for (let counter = 1; counter < 20; counter += 2) {
  console.log(counter);
}

// console.log(`After the loop counter is ${counter}`);

/*1-16777216 double each time*/

for (let counter = 1; counter < 33554432; counter *= 2) {
  console.log(counter);
}

// console.log(`After the loop counter is ${counter}`);

/*111-138 add 3 every time*/

for (let counter = 111; counter < 141; counter += 3) {
  console.log(counter);
}

// console.log(`After the loop counter is ${counter}`);

/*100-0 add -10 every time*/

for (let counter = 100; counter > -1; counter -= 10) {
  console.log(counter);
}

// console.log(`After the loop counter is ${counter}`);
