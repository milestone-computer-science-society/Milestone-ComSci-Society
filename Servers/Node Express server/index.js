//
// Basic server using the Express package
//


// Install all packages by typing 'npm install' in the terminal
// Run this file by typing 'node index.js' in the terminal
// Check the localhost:3000 and localhost:3000/about pages
// Find code explanation in README.md on our GitHub page


const express = require('express');

const app = express();

app.get('/', (req, res) => {
   res.send('Hello, World!');
});

app.get('/about', (req, res) => {
   res.send('Welcome to the about us page!');
});

app.listen(3000, () => console.log('Server is running.'));
