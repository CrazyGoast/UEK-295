const express = require('express');
const app = express();
const port = 3000;

app.get('/now', (req, res) => {
  const timezone = req.query.tz || 'UTC';
  const currentTime = new Date().toLocaleString('en-US', { timeZone: timezone });

  res.status(200).json({ timezone, currentTime });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
