const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'data.xml')));

app.get('/xml', (req, res) => {
  res.sendFile(path.join(__dirname, 'data.xml'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
