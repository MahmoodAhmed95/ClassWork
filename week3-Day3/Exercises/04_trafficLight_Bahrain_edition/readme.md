# Traffic Light: Bahrain Edition

This traffic light exercise is intended to mimic the way lights in Bahrain work.

## Key Patterns

### Go

* Before turning green, the traffic light should show both yellow and red at the same time for a few seconds and then turn green.
* If the light is already in a 'go' state, then nothing should change.

### Stop

* If the light is already in a 'stop' state, then nothing should change.
* The green light should blink for a few seconds
* Then the green light turns off and the yellow is on for a few seconds
* Then turn red.

## Notes

* The lights can be turned on an off by adding or removing the class 'on' (already defined in CSS)
* The green light can be blinked by adding the 'cycle' class (animation already defined in the css)
* You will need to break the steps into several functions that are called by setTimeout
* Use the variable 'lightState' to store what mode the light is in to prevent it from showing the change transitions if it is already in the desired state (example - do not run the stop transitions if it is already stopped)
* Use the variable 'lightStatusChangeInProgress' to prevent more than one transition from running at once.