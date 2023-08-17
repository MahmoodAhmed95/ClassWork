// controllers/skills.js
const skl = require("../models/skill");

function index(req, res) {
  res.render("skills/index", {
    skills: skl.getAll(),
  });
}
function show(req, res) {
  let theData = skl.getOne(req.params.id);
  res.render("skills/show", {
    skills: theData,
  });
}
module.exports = {
  index,
  show,
};
