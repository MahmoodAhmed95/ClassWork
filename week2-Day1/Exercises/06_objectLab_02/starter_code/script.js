let arr = [
  { title: "batman", duration: 120, stars: ["Broce", "John", "Doe", "Mary"] },
  {
    title: "avengers",
    duration: 180,
    stars: ["Rany", "Johnson", "Jennifer", "James"],
  },
];
for (let i = 0; i < arr.length; i++) {
  console.log(
    `${arr[i].title} lasts for ${arr[i].duration} minutes. Stars: ${arr[i].stars}`
  );
}
