const mongoose = require("mongoose");
// const Movie = require("../models/movie");

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;
const movieSchema = new Schema(
  {
    title: String,
    releaseYear: Number,
    mpaaRating: String,
    cast: [String],
    nowShowing: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);
// Compile the schema into a model and export it
module.exports = mongoose.model("Movie", movieSchema);
