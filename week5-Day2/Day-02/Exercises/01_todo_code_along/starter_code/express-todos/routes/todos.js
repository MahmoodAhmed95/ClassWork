var express = require("express");
var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// Require the controller that exports To-Do CRUD functions
var todosCtrl = require("../controllers/todo");

// All actual paths begin with "/todos"

// GET /todos
router.get("/", todosCtrl.index);
// get one todo
router.get("/:id", todosCtrl.show);

module.exports = router;
