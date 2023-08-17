// ToDo
// When the user submits the search form, make an API request to Giphy's search endpoint
// https://api.giphy.com/v1/gifs/search?api_key="YOURAPIKEY"&q="SEARCHSTRING"
// Display the results in the #giphy-results div provided in the html
// Each new search should replace the previous search results
// CSS Bonus: Use flex or grid properties to display the results in a responsive, clean layout

const apiKey = "PYL9akEjVWmh5YAnUNPxgmsK9AhNCUfP";

async function giphySearch(e) {
  // prevent the page from submitting/reloading
  e.preventDefault();
  console.log(`e ==> ${JSON.stringify(e)}`);
  console.log(`sss`);
  // get the user input from the form
  const searchTerm = document.querySelector("#search-term").value;
  // make an API call using fetch() - include your API key and the user's search term (template strings are your friend)
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}`;
  const response = await fetch(apiUrl);
  // convert your response data into .json()
  const giphyData = await response.json();
  // print your data to the console to see its format, dont forget to delete later
  // console.log(`giphyData ==> ${JSON.stringify(giphyData, 2, null)}`);
  // clear out all gifs from previous searches
  const giphyRes = document.querySelector("#giphy-results");
  giphyRes.innerHTML = "";
  // use a loop to create and append each image to the dom
  for (let i = 0; i < giphyData.data.length; i++) {
    const imageUrl = giphyData.data[i].images.fixed_width.url;
    const imageTitle = giphyData.data[i].title;
    const imageEl = document.createElement("img");
    imageEl.setAttribute("src", imageUrl);
    imageEl.setAttribute("alt", imageTitle);
    const giphyRes = document.querySelector("#giphy-results");
    giphyRes.appendChild(imageEl);
  }
}

// dont forget your event listener
window.addEventListener("DOMContentLoaded", (event) => {
  document
    .querySelector("#search-form")
    .addEventListener("submit", giphySearch);
});
