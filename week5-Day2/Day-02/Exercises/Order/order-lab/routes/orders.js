var express = require("express");
var router = express.Router();

var ordersCtrl = require("../controllers/orders");
router.get("/", ordersCtrl.index);
router.get("/:id", ordersCtrl.show);
// /* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });

module.exports = router;
