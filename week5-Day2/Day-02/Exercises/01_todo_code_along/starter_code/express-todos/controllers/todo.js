// controllers/todos.js
const Todo = require("../models/todo");

function index(req, res) {
  res.render("todos/index", {
    todos: Todo.getAll(),
  });
}
function show(req, res) {
  let theData = Todo.getOne(req.params.id);
  res.render("todos/show", {
    todo: theData,
  });
}
module.exports = {
  index,
  show,
};
