const Order = require("../models/order");
module.exports = {
  index,
};
// controllers/orders.js

function index(req, res) {
  res.render("orders/index", {
    orders: Order.getAll(),
  });
}
function show(req, res) {
  res.render("orders/show", {
    order: Order.getOne(req.params.id),
  });
}
