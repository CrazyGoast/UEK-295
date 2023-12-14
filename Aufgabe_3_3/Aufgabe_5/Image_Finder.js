const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'images')));

app.get('/image', (req, res) => {
  res.sendFile(path.join(__dirname, 'example.jpg'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
