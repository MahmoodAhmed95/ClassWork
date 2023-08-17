// Try making the traffic light work - Think through the problem BEFORE you code!
// You'll use addEventListener and getElementById if you're doing it right...

// without loop

//  function to turn the red light on
// function redLight() {
//   // clear the lights
//   blackLight();
//   // turn the stop light on
//   document.getElementById("stopLight").style.backgroundColor = "red";
// }

// //  function to turn the yellow light on
// function yellowLight() {
//   // clear the lights
//   blackLight();
//   // turn the slow light
//   document.getElementById("slowLight").style.backgroundColor = "yellow";
// }

// //  function to turn the green light on
// function greenLight() {
//   // clear the lights
//   blackLight();
//   // turn the go light
//   document.getElementById("goLight").style.backgroundColor = "green";
// }

// //  function to turn of all the lights
// function blackLight() {
//   document.getElementById("stopLight").style.backgroundColor = "black";
//   document.getElementById("slowLight").style.backgroundColor = "black";
//   document.getElementById("goLight").style.backgroundColor = "black";
// }

// document.getElementById("stopButton").onclick = redLight;
// document.getElementById("slowButton").onclick = yellowLight;
// document.getElementById("goButton").onclick = greenLight;

// by loop

function clearLight() {
  const allBulbs = document.querySelectorAll(".bulb");
  for (let i = 0; i < allBulbs.length; i++) {
    allBulbs[i].classList.remove("on");
  }
}

function setLight(bt) {
  clearLight();
  let clickId = bt.target.id;
  for (let i = 0; i < clickId.length; i++) {
    if (clickId == "stopButton") {
      document.querySelector("#stopLight").classList.add("on");
    } else if (clickId == "slowButton") {
      document.querySelector("#slowLight").classList.add("on");
    } else if (clickId == "goButton") {
      document.querySelector("#goLight").classList.add("on");
    }
  }
}

let buttonSet = document.querySelectorAll(".btn");
for (let i = 0; i < buttonSet.length; i++) {
  buttonSet[i].addEventListener("click", setLight);
}
