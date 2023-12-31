const grades = [
  {name: "Thomann", grade: 5.0},
  {name: "Bürgis", grade: 5.0},
  {name: "Norris", grade: 7.0},
  {name: "Lopez", grade: 6.5},
  {name: "Smith", grade: 4.8},
  {name: "Patel", grade: 6.2},
  {name: "Kim", grade: 5.7},
  {name: "Garcia", grade: 6.0},
  {name: "Zhang", grade: 7.1},
  {name: "Kumar", grade: 5.5}
];

const studentWithFive = grades.find(student => student.grade === 5.0);

if (studentWithFive) {
  console.log("Der erste Schüler mit der Note 5.0 ist:", studentWithFive.name);
} else {
  console.log("Es gibt keinen Schüler mit der Note 5.0.");
}
