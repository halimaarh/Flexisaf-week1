const students = [
  { name: "Halima", score: 85 },
  { name: "Ahmed", score: 45 },
  { name: "Zainab", score: 70 },
  { name: "John", score: 92 },
  { name: "Jane", score: 60 },
];

const names = students.map((s) => s.name);
const passed = students.filter((s) => s.score >= 60);
const total = students.reduce((sum, s) => sum + s.score, 0);
let removed = students.splice(1, 1); // Removes Ahmed

function displayResult() {
  let message = "Top Performers:";
  const topStudents = students.filter((s) => s.score > 80);
  return topStudents.map((s) => `${message} ${s.name}`).join("<br>");
}

document.getElementById("output").innerHTML = `
  <h2>Names:</h2> ${names.join(", ")} <br><br>
  <h2>Passed:</h2> ${passed.map((s) => s.name).join(", ")} <br><br>
  <h2>Total Score:</h2> ${total} <br><br>
  <h2>Removed Student:</h2> ${removed[0].name} <br><br>
  <h2>${displayResult()}</h2>
`;
