const express = require('express');
const app = express();

const names = [
  'Anna', 'Ben', 'Charlie', 'Diana', 'Eva', 'Frank', 'Gina', 'Henry', 'Irene', 'Jack',
];

function getRandomName() {
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}

app.get('/name', (req, res) => {
  const randomName = getRandomName();
  
  res.status(200).json({ randomName: randomName });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
