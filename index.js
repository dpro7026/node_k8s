//Import Express package
const express = require('express');
const app = express();

// Add a root route
app.get('/', (req, res) => {
  res.send('Homepage! Hello world.');
});

// Expose port 3000
app.listen(3000, () => console.log('listening on port 3000'));
