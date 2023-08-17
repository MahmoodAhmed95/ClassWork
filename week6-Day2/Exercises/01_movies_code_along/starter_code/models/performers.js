const mongoose = require("mongoose");
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const performerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  born: { type: Date },
});

// Compile the schema into a model and export it
module.exports = mongoose.model("Performer", performerSchema);
