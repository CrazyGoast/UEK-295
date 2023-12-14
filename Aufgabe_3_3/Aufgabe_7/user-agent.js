const express = require('express');
const app = express();

app.get('/user-agent', (req, res) => {
  const userAgent = req.headers['user-agent'];

  res.send(`User-Agent: ${userAgent}`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
