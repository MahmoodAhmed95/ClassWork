// data/skill.js
const skillsArr = [
  { name: "JavaScript", type: "Programming Language" },
  { name: "HTML", type: "Markup Language" },
  { name: "CSS", type: "Style Sheet Language" },
  { name: "Python", type: "Programming Language" },
  { name: "Java", type: "Programming Language" },
  { name: "C++", type: "Programming Language" },
  { name: "React", type: "JavaScript Library" },
  { name: "Node.js", type: "Runtime Environment" },
  { name: "Express.js", type: "Web Application Framework" },
  { name: "MongoDB", type: "NoSQL Database" },
  { name: "SQL", type: "Database Query Language" },
  { name: "Git", type: "Version Control System" },
  { name: "AWS", type: "Cloud Services Platform" },
  { name: "Docker", type: "Containerization Platform" },
  { name: "Kubernetes", type: "Container Orchestration Platform" },
];

module.exports = {
  getAll: function () {
    return skillsArr;
  },
  getOne: function (id) {
    return skillsArr[id];
  },
  createOne,
};
function createOne(nSkill) {
  skillsArr.push(nSkill);
}
