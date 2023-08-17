// routes/skills.js
const express = require("express"); //
const router = express.Router(); //
const skillsController = require("../controllers/controllersskills");

// GET /skills
router.get("/", skillsController.index);

// GET /skills/:id
router.post("/create", skillsController.create);
router.get("/new", skillsController.new);
router.get("/:id", skillsController.show);
module.exports = router; //
