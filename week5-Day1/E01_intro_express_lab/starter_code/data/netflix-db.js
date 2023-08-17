// data/netflix-db.js
const content = [
  { title: "Better Call Saul", type: "show", genre: ["crime", "dark-comedy"] },
  { title: "OA", type: "show", genre: ["Fantasy", "Mystery"] },
  { title: "Love", type: "show", genre: ["Comedy", "Romantic Comedy"] },
  { title: "Dark", type: "show", genre: ["Thriller", "Science Fiction"] },
  { title: "Fargo", type: "show", genre: ["Crime", "Drama"] },
  {
    title: "The End of the F***ing World",
    type: "show",
    genre: ["Dark Comedy", "Drama"],
  },
  { title: "BoJack Horseman", type: "show", genre: ["Animation", "Comedy"] },
  { title: "Narcos", type: "show", genre: ["Crime", "Drama"] },
  { title: "Money Heist", type: "show", genre: ["Crime", "Thriller"] },
  { title: "Peaky Blinders", type: "show", genre: ["Crime", "Drama"] },
  { title: "The Crown", type: "show", genre: ["Drama", "Biography"] },
  {
    title: "Stranger Things",
    type: "show",
    genre: ["Science Fiction", "Horror"],
  },
  {
    title: "Black Mirror",
    type: "show",
    genre: ["Science Fiction", "Anthology"],
  },
  { title: "Ozark", type: "show", genre: ["Crime", "Drama"] },
  { title: "The Witcher", type: "show", genre: ["Fantasy", "Action"] },
  { title: "Daredevil", type: "show", genre: ["Action", "Superhero"] },
  {
    title: "The Haunting of Hill House",
    type: "show",
    genre: ["Horror", "Drama"],
  },
  {
    title: "Altered Carbon",
    type: "show",
    genre: ["Science Fiction", "Dystopian"],
  },
  { title: "Mindhunter", type: "show", genre: ["Crime", "Drama"] },
];

module.exports = {
  getAll: function () {
    return content;
  },
};
