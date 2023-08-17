// ToDo
// When the user submits the search form, make an API request to open weather api's search endpoint
// https://api.openweathermap.org/data/2.5/weather?q=CITY&APPID=KEY
// Icon URL - refer to docs on how to use
// https://openweathermap.org/img/wn/####@2x.png  - replace #### with icon code
// Display the results in the #weather-results div
// Each new search should erase the previous results

const myApiKey = "d1f4cd74b2f4ef480e8e796c422458e4";

async function handleWeatherRequest(e) {
  e.preventDefault();

  console.log(`e ==> ${JSON.stringify(e)}`);
  console.log(`sss`);
  // get user input value from textbox
  const userIn = document.querySelector("#userInput").value;
  // build the url address with YOUR personal API key and the users input city
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${userIn}&APPID=${myApiKey}`;
  // make an API call using fetch() and capture the response in a variable
  const response = await fetch(apiUrl);
  // make an API call using fetch() - include your API key and the user's search term (template strings are your friend)

  // convert the response to a readable json format with .json()
  const responseRead = await response.json();

  // print your data to the console to see its format, dont forget to delete later
  console.log(responseRead);
  // Write a separate function to convert the temps from the default units (Kelvin) to a more readable F or C
  function tempsConvert(temp, unit) {
    if (unit === "F") {
      return ((temp - 273.15) * 9) / 5 + 32; // convert Kelvin to Fahrenheit
    } else if (unit === "C") {
      return temp - 273.15; // convert Kelvin to Celsius
    } else {
      return temp; // return temperature in Kelvin if unit is not recognized
    }
  }
  // build the icon src

  //   for (let i = 0; i < giphyData.data.length; i++) {
  //     const imageUrl = giphyData.data[i].images.fixed_width.url;
  //     const imageTitle = giphyData.data[i].title;
  //     const imageEl = document.createElement("img");
  //     imageEl.setAttribute("src", imageUrl);
  //     imageEl.setAttribute("alt", imageTitle);
  //     const giphyRes = document.querySelector("#giphy-results");
  //     giphyRes.appendChild(imageEl);
  //   }
  // }
  // create icon img tag

  // add icon url as src

  // clear out previous icon img

  // print all results to dom

  // append icon img to dom
}

// Attach an event listener to the submit button
window.addEventListener("DOMContentLoaded", (event) => {
  document
    .querySelector("#weather-search")
    .addEventListener("submit", handleWeatherRequest);
});
