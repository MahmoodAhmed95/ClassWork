// When the #grayButton is clicked, the color scheme of the page should change to more of a "dark mode" feel, with gray backgrounds and white text throughout.
// The #whiteButton should bring things back to the "light mode" color scheme with white backgrounds and dark text
// Try to do this by setting styles (.style)
// Remember to try one step at a time, testing each stage as you go!

// // when i click the gray button
// document.querySelector("#grayButton").addEventListener("click", function () {
//   console.log("hh");

//   // turn the body gray
//   document.querySelector("body").style.backgroundColor = "gray";

//   // turn the text white
//   document.querySelector("body").style.color = "white";
// });

// //when i click the white button
// document.querySelector("#whiteButton").addEventListener("click", function () {
//   // turn the body white
//   document.querySelector("body").style.backgroundColor = "white";

//   // turn the text black
//   document.querySelector("body").style.color = "black";
// });

// light and dark mode by id

// // when i click the gray button
// document.querySelector("#grayButton").addEventListener("click", function () {
//   // turn the dark mode
//   document.querySelector("body").classList.add("darkTheme");
//   document.querySelector("body").classList.remove("lightTheme");
// });

// //when i click the white button
// document.querySelector("#whiteButton").addEventListener("click", function () {
//   // turn the light mode

//   document.querySelector("body").classList.add("lightTheme");
//   document.querySelector("body").classList.remove("darkTheme");
// });

// when i click the gray button
document.querySelector("#grayButton").addEventListener("click", function () {
  // turn the dark mode
  document.querySelector("body").setAttribute("class", "darkTheme");
});

// when i click the white button
document.querySelector("#whiteButton").addEventListener("click", function () {
  // turn the light mode
  document.querySelector("body").setAttribute("class", "lightTheme");
});
