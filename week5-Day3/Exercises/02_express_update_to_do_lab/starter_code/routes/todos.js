var express = require("express");
var router = express.Router();
var todosCtrl = require("../controllers/todos");

// All actual paths start with "/todos"

// GET /todos
router.get("/", todosCtrl.index);
// GET /todos/new <- Define BEFORE show route
router.get("/new", todosCtrl.new);
// GET /todos/:id
router.get("/:id", todosCtrl.show);
// POST /todos
router.post("/", todosCtrl.create);
// DELETE /todos/:id
router.delete("/:tuna", todosCtrl.delete);
// update todo page
router.get("/:id/edit", todosCtrl.editTodo);
// update the todo item
router.put("/:id", todosCtrl.updateTodo);

module.exports = router;
