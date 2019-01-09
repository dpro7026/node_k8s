# Create Hello World app
Initialise a package.json:
```
npm init
```
Create an index file:
```
touch index.js
```
Add to the package.json a start command:
```
"test": "echo \"Error: no test specified\" && exit 1",
"start": "node index.js"
```
Install Express:
```
npm install express
```
Update index.js:
```
//Import Express package
const express = require('express');
const app = express();

// Add a root route
app.get('/', (req, res) => {
  res.send('Homepage! Hello world.');
});

// Expose port 3000
app.listen(3000, () => console.log('listening on port 3000'));
```
