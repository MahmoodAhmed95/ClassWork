// Average Price of All Products Ordered
// Calulate the average price of all products ordered in the product data using loops, array methods, or both. Console log the result.
let price = 0;
for (let i = 0; i < productData.length; i++) {
  price = price + productData[i].price;
}
console.log("Average Product Value");
console.log(price / productData.length);

// Get a list of all categories
// Console log the result.
let list = [];
for (const product of productData) {
  if (!list.includes(product.product_category)) {
    list.push(product.product_category);
  }
}
console.log(list);
// Calculate the TOTAL value of all products ordered. Console log the result.
let orders = 0;
for (let i = 0; i < productData.length; i++) {
  orders = orders + productData[i].price * productData[i].quantity;
}
console.log("Total Order Value");
console.log(orders);
// Calculate the TOTAL value of all products ordered where more than one of each product was ordered. Console log the result.
let torders = 0;
for (let i = 0; i < productData.length; i++) {
  if (productData[i].quantity > 1) {
    torders = torders + productData[i].price * productData[i].quantity;
  }
}
console.log("Total Order Value with Quantity > 1");
console.log(torders);
// Count the numer of Unique email addresses in the product data. Console log the result.
let cEmail = 0;
for (let i = 0; i < productData.length; i++) {
  cEmail = cEmail + 1;
}
console.log("Unique Email Addresses");
console.log(cEmail);
// Average Price by Category
// Calculate the average price by category of all orders. The output should look something like this:
//     category1: 82.45,
//     category2: 5
// Console log the result.
// Use the categories array you created in the previous step to help you solve this problem.

// Set the initial values for an object to store the category sales data

// Go through all the orders and add up the total value and order count for each category

// Calculate the average value for each category and console log the result
// function calc(arr, cat) {
//   const res = arr.filter((product) => {
//     return product.product_category === cat;
//   });
//   let avPrice = 0;

//   for (let i = 0; i < res.length; i++) {
//     avPrice = avPrice + res[i].price / res.length;
//   }
//   return avPrice;
// }

//console.log(calc(productData, "home goods"));
for (let x = 0; x < list.length; x++) {
  const res = productData.filter((product) => {
    return product.product_category === list[x];
  });
  let avPrice = 0;

  for (let i = 0; i < res.length; i++) {
    avPrice = avPrice + res[i].price / res.length;
  }
  console.log(`${list[x]}: ${avPrice}`);
}
