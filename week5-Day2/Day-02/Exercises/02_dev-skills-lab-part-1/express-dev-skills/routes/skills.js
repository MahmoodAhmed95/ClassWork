// var express = require("express");
// var router = express.Router();

// /* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });

// module.exports = router;
var express = require("express");
var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// Require the controller that exports To-Do CRUD functions
var skillCtrl = require("../controllers/skill");

// All actual paths begin with "/todos"

// GET /todos
router.get("/", skillCtrl.index);
// get one todo
router.get("/:id", skillCtrl.show);

module.exports = router;
