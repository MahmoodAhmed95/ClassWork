function validateOrderQty(e) {
  // Get the requested quantity
  const orderQty = document.getElementById("pbeOrderQty").value;
  orderQty = parseInt(orderQty);

  // If quantity is above or below the allowed then show alert message
  if (orderQty < 20) {
    alert("Please limit your order to a quantity between 10 and 200.");
  } else {
    // Show acceptance alert message if allowed quantity
    alert("Your order has been submitted");
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
  document
    .querySelector("#pbeOrderSubmit")
    .addEventListener("click", validateOrderQty);

  document
    .querySelector("#pbeDescCharacteristics header a")
    .addEventListener("click", function (e) {
      e.preventDefault();
      document
        .getElementById("pbeDescCharacteristics")
        .classList.toggle("pbeDescAccordionCollapsed");
    });

  document
    .querySelector("#pbeDescHistory header a")
    .addEventListener("click", function (e) {
      e.preventDefault();
      document
        .getElementById("pbeDescHistory")
        .classList.toggle("pbeDescAccordionCollapsed");
    });
});
