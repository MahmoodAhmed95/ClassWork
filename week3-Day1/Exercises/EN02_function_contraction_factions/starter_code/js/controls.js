// global variables
// input element
let firstWordElement = document.getElementById("firstWord");
let secondWordElement = document.getElementById("secondWord");
//output element
let contractionOutputElement = document.getElementById("contractionResult");
let logOutputElement = document.getElementById("logOutput");

// This function will get the values of the two word forms, pass them to the compare function the update the display output

function conjunctionFormChecking() {
  // Create output variables
  let contractionFound = "";
  let logEntry = "";

  // Get words from search forms
  let firstWord = firstWordElement.value;
  let secondWord = secondWordElement.value;
  // Create phrase to test by combining wordOne and wordTwo with a space
  // Note - there is already a function called "checkForConjunction(testPhrase)" that will return the conjunction OR false
  let completePharseForward = firstWord + " " + secondWord;
  let completePharseBackward = secondWord + " " + firstWord;

  // Test phrase
  contractionFound = checkForConjunction(completePharseForward);
  // if Test Phrase returns false search phrase with words in reverse order
  if (!contractionFound) {
    contractionFound = checkForConjunction(completePhraseBackward);
  }
  // If return is true
  if (contractionFound) {
    // Set the output variable to the result
    contractionOutputElement.innerText = contractionFound;
    // Set the log variable to wordOne wordTwo and the contraction
    // Pharse : conteraction
    let logOutputParagraphElement = document.createElement("p");
    logEntry = completePharseForward + " " + contractionFound;
    logOutputParagraphElement.innerText = logEntry;
    logOutputElement.appendChild(logOutputParagraphElement);
  } else {
    // Set the output variable to "None Found"
    contractionFound = "None Found";
    // Set the log variable to wordOne wordTwo and no contraction wrapped in paragraph tags
    let logOutputParagraphElement = document.createElement("p");
    logEntry = completePharseForward + " " + contractionFound;
    logOutputParagraphElement.innerText = logEntry;
    // Update contractionResult
    contractionOutputElement.innerText = contractionFound;
    // Add wordOne + wordTwo + result to log
    logOutputElement.appendChild(logOutputParagraphElement);
  }
  // Empty wordOne

  // Empty wordTwo
} // end conjunctionFormChecking

function resetAllForms() {
  // Empty Result
  contractionOutputElement.innerText = "";
  // Empty wordOne
  firstWordElement.value = "";
  // Empty wordTwo
  secondWordElement.value = "";
  // Empty the log
  logOutputElement.innerText = "";
} // resetAllForms

document.addEventListener("DOMContentLoaded", function (event) {
  // Bind conjunctionFormChecking to button
  let btnCheckConjunctionElement = document.getElementById(
    "btnCheckConjunction"
  );
  btnCheckConjunctionElement.addEventListener("click", conjunctionFormChecking);
  // Bind reset to button
  let btnResetElement = document.getElementById("btnReset");
  btnResetElement.addEventListener("click", resetAllForms);
});
