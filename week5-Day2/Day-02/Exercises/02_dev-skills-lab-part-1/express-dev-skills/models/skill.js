const mySkills = [
  { id: 1, skill: "Developing", done: true },
  { id: 2, skill: "Coding", done: true },
  { id: 3, skill: "DataBase", done: false },
  { id: 4, skill: "HTML", done: true },
  { id: 5, skill: "CSS", done: true },
  { id: 6, skill: "JavaScript", done: true },
  { id: 7, skill: "Python", done: false },
  { id: 8, skill: "Bootstrap", done: true },
  { id: 9, skill: "React", done: false },
  { id: 10, skill: "Programing", done: true },
  { id: 11, skill: "Express", done: true },
  { id: 12, skill: "Node", done: true },
  { id: 13, skill: "MongoDB", done: false },
  { id: 14, skill: "SQL", done: false },
];

function getOne(id) {
  // URL params are strings - convert to a number
  id = parseInt(id);
  // The Array.prototype.find iterator method is
  // ideal for finding objects within an array
  return mySkills.find((skill) => skill.id === id);
}
function getAll() {
  return mySkills;
}
module.exports = {
  getAll,
  getOne,
};
