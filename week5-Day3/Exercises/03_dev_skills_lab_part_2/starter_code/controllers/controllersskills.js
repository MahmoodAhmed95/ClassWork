// controllers/skills.js
const skillModel = require("../models/modelsskill");

module.exports = {
  index: function (req, res) {
    const skills = skillModel.getAll();
    res.render("viewsskills/index", { skills });
  },
  show: function (req, res) {
    const id = req.params.id;
    const skill = skillModel.getOne(id);

    if (skill) {
      res.render("viewsskills/show", { skill });
    } else {
      res.status(404).send("Skill not found.");
    }
  },
  new: newSkill,
  create: newCreate,
};
function newSkill(req, res) {
  res.render("viewsskills/newViews", { title: "Add new Skill" });
}
function newCreate(req, res) {
  skillModel.createOne(req.body);
  res.redirect("/routesskills");
}
