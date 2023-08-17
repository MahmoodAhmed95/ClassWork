// Create a light status variable. This will be used to determine if a button press will be honored.  A button press should not cause the light to change if it is in transition.

let lightStatusChangeInProgress = false;
let lightState = "";

// Clear all the lights (remove the on and cycle classes)
function clearLights() {
  let bulbset = document.querySelectorAll(".bulb");
  for (let i = 0; i < bulbset.length; i++) {
    bulbset[i].classList.remove("on");
    bulbset[i].classList.remove("cycle");
  }
}

// Set the lights into a go cycle
function setStateGo() {
  // Halt execution if the light status change is in progress OR if light's current state is go
  if (lightState == "go" || lightStatusChangeInProgress == true) {
    return false;
  }

  // Set the light state
  lightState = "go";
  // Start the status change process by setting the in progress variable
  lightStatusChangeInProgress = true;
  // Clear the lights
  clearLights();
  // Set the initial state (both yellow and red on)
  document.querySelector("#stopLight").classList.add("on");
  document.querySelector("#slowLight").classList.add("on");
  // Set a timeout and call the finishStateGo
  setTimeout(finishStateGo, 4000);
}

function finishStateGo() {
  // Clear the lights
  clearLights();
  // Set the final go state
  document.querySelector("#goLight").classList.add("on");
  // Release the progress variable by setting it false
  lightStatusChangeInProgress = false;
}

function setStateStop() {
  // Halt execution if the light status change is in progress or if the current state is stop
  if (lightState == "stop" || lightStatusChangeInProgress == true) {
    return false;
  }
  // Set the light state
  lightState = "stop";
  // Start the status change process by setting the in progress variable
  lightStatusChangeInProgress = true;
  // Clear the lights
  clearLights();
  // Set the initial state (blinking green to warn of stop) by adding a class with blinking animation
  document.querySelector("#goLight").classList.add("cycle");
  // Set a timeout and call the middleStateStop to turn on the yellow light
  setTimeout(middleStateStop, 7500);
}

function middleStateStop() {
  // Clear the lights
  clearLights();
  // Set the middle stop state (yellow light)
  document.querySelector("#slowLight").classList.add("on");
  // Set a timeout and call the finalStateStop to turn on the red light
  setTimeout(finalStateStop, 4000);
}

function finalStateStop() {
  console.log("Finish Stop");

  // Clear the lights
  clearLights();
  // Set the final stop state (red light)
  document.querySelector("#stopLight").classList.add("on");
  // Release the progress variable by setting it false
  lightStatusChangeInProgress = false;
}

// Bind the click even to the stop and go buttons
document.querySelector("#goButton").addEventListener("click", setStateGo);
document.querySelector("#stopButton").addEventListener("click", setStateStop);
