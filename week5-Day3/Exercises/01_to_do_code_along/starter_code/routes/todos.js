var express = require("express");
var router = express.Router();
var todosCtrl = require("../controllers/todos");

// All actual paths start with "/todos"
// GET /todos
router.get("/", todosCtrl.index);

// GET new
router.get("/new", todosCtrl.create);
//POST Create
router.post("/", todosCtrl.createTodo);
// GET /todos/:id
router.get("/:id", todosCtrl.show);

module.exports = router;
