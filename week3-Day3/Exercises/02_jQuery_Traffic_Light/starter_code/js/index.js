// //Implement the red light using jQuery. Don't forget to add the script tags.
// // let red = $("#stopLight").css("background-color", "red");
// // let yellow = $("#slowLight").css("background-color", "yellow");
// // let green = $("#goLight").css("background-color", "green");
$(document).ready(function () {
  let lightStatusChangeInProgress = false;
  let lightState = "";

  function clearLights() {
    $(".bulb").css("background-color", "black");
  }

  function setStateGo() {
    if (lightState == "go" || lightStatusChangeInProgress == true) {
      return false;
    }
    lightState = "go";
    lightStatusChangeInProgress = true;

    clearLights();
    $("#stopLight").css("background-color", "red");
    $("#slowLight").css("background-color", "yellow");

    setTimeout(finishStateGo, 2000);
  }

  function finishStateGo() {
    clearLights();
    $("#goLight").css("background-color", "green");
    lightStatusChangeInProgress = false;
  }

  function setStateStop() {
    if (lightState == "stop" || lightStatusChangeInProgress == true) {
      return false;
    }
    lightState = "stop";
    lightStatusChangeInProgress = true;

    clearLights();
    $("#goLight").css("background-color", "green");
    $("#goLight").animate();

    setTimeout(middleStateStop, 2000);
  }

  function middleStateStop() {
    clearLights();
    $("#slowLight").css("background-color", "yellow");

    setTimeout(finalStateStop, 2000);
  }

  function finalStateStop() {
    console.log("Finish Stop");

    clearLights();
    $("#stopLight").css("background-color", "red");
    lightStatusChangeInProgress = false;
  }

  $("#goButton").on("click", setStateGo);
  $("#stopButton").on("click", setStateStop);
});
