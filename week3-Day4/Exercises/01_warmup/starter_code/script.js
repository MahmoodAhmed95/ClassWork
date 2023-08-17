function buildTOC() {
  //get all h1 and h2 elements
  const allHeaders = document.querySelectorAll("h1,h2");
  //create a ordered list
  let theTOC = document.createElement("ol");
  // loop thrrough the element
  for (let i = 0; i < allHeaders.length; i++) {
    // add id to the headers
    allHeaders[i].id = "topic" + i;
    //create a list item
    let newEnt = document.createElement("li");
    //create a link item
    let newLink = document.createElement("a");
    //set the text of list item to the header text
    newEnt.innerText = allHeaders[i].innerText;
    // add the href to the link
    newLink.href = "#topic" + i;

    // add the link to the list
    newEnt.appendChild(newLink);

    //add the list item to the ordered list
    theTOC.appendChild(newEnt);
  }
  // put the ordered list on the page in the side
  document.querySelector("#table-of-contents").appendChild(theTOC);
}
// on document ready trigger the load function
document.addEventListener("DOMContentLoaded", buildTOC);

///////////

$(document).ready(function () {
  console.log(`Document has been loaded...`);
  // Grab all h1 and h2 headers
  let $headings = $("h1, h2");
  console.log(`headings: ${JSON.stringify($headings)}`);

  // Get a handle on the aside / table of contents
  const $tableOfContents = $("#table-of-contents");

  // Create an ol item / element
  const $olItem = $("<ol>");

  // Iterate over all the h1 and h2 headings
  $headings.each(function (index) {
    console.log(`inside the loop`);
    // create a const for the id
    const id = `header-${index}`;

    // Create a handle / const / variable to the current element
    let $heading = $(this);
    console.log(`$heading: ${$heading}`);
    $heading.attr("id", id);

    // Create a list item / element
    let $listItem = $("<li>");
    // Create a link item / element
    let $linkItem = $("<a>");

    console.log(`id: ${id}`);

    // Put the header text inside the a item
    $linkItem.text($heading.text());

    // Set the href attr for each link
    $linkItem.attr("href", `#${id}`);

    // Put a element into li element
    $listItem.append($linkItem);

    // put the li inside ol
    $olItem.append($listItem);
  });

  // Put ol inside table of contents
  $tableOfContents.append($olItem);
});
