const express = require('express');
const app = express();

app.get('/teapot', (req, res) => {
  res.sendStatus(418);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
