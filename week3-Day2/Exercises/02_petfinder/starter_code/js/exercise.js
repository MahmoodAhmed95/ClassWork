function selectPet(petType) {
  // Get the specific pet data set
  let thisPet = petData[petType];
  // Set the title
  document.querySelector(".petDisplayName").innerText = thisPet.displayName;
  // Empty the specification data
  document.querySelector(".petsDataSpecs").innerHTML = "";
  let newElements = "";
  // Add the space required, size, weight
  newElements += `<dt>Space Required</dt><dd>${thisPet.spaceRequired}</dd>`;
  newElements += `<dt>Size</dt><dd>${thisPet.size}</dd>`;
  newElements += `<dt>weight</dt><dd>${thisPet.weight}</dd>`;
  // Add logic to add the trainability and lap size images
  if (thisPet.trainability) {
    newElements += `<dt>Trainability</dt><dd><img src='img/200px-Gnome-emblem-default.svg.png' alt='Yes'class='checkmark'></dd>`;
  } else {
    newElements += `<dt>Trainability</dt><dd><img src='img/200px-Gnome-emblem-unreadable.svg.png' alt='No'class='checkmark'></dd>`;
  }
  if (thisPet.fitsOnLap) {
    newElements += `<dt>Lab Size</dt><dd><img src='img/200px-Gnome-emblem-default.svg.png' alt='Yes'class='checkmark'></dd>`;
  } else {
    newElements += `<dt>Lab Size</dt><dd><img src='img/200px-Gnome-emblem-unreadable.svg.png' alt='No'class='checkmark'></dd>`;
  }
  // Add the foods (may require loop)
  newElements += `<dt>Foods</dt><dd><ul>`;
  for (let i = 0; i < thisPet.foods.length; i++) {
    newElements += `<li>${thisPet.foods[i]}</li>`;
  }
  newElements += `</ul></dd>`;
  document.querySelector(".petsDataSpecs").innerHTML = newElements;

  // Update the images

  // Apply the click event to thumbnails (note - this will likely need to be applied to the a and not the img direclty)
  // Empty the ideal for
  // Insert the ideal for
  // Empty the Adoption Groups
  // Add the adoption groups
} // end selectPet

document.addEventListener("DOMContentLoaded", function (event) {
  // Initial run
  selectPet("dog");
  //Update whenever a new value is picked
  document.querySelector("#petType").addEventListener("change", function () {
    // get the value of the selector
    let selectedPet = this.value;
    //select the pet
    selectPet(selectedPet);
  });
});
