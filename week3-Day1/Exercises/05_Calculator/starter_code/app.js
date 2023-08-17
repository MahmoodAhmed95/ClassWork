let input = "";
let value1 = 0;
let value2 = 0;
let operator = "+";
let whichVal = true;

// Attach a click event to each number action button
let eachButton = document.getElementsByClassName("num");
for (let i = 0; i < eachButton.length; i++) {
  eachButton[i].addEventListener("click", function (e) {
    let val = e.target.innerText;
    let a = document.querySelector("#output");
    a.innerText += val;
  });
}
// Get the math operation

// Get the value of the input and turn it into a number

// Reset the input
let clear = document.querySelector("#clear");
clear.addEventListener("click", function (e) {
  let val = e.target.innerText;
  let a = document.querySelector("#output");
  a.innerText = "0";
});
// Display the operator
let opsButton = document.getElementsByClassName("action");
for (let x = 0; x < opsButton.length; x++) {
  opsButton[x].addEventListener("click", function (el) {
    let valv = el.target.innerText;
    let b = document.querySelector("#output");
    b.innerText += valv;
  });
}
// Switch which value is being input

// Attach a click event on each number button

// Add the number clicked on to the current input variable's value

// Show the inputted number

// This runs the math operation

// Handle the math cases for each operator

//Show the value of the math operation in the DOM
