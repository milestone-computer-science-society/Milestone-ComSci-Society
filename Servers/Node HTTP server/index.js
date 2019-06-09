//
// Basic server using Node.js' HTTP module
//


// Run this file by typing 'node index.js' in the terminal
// Check the localhost:3000 and localhost:3000/about pages
// Find code explanation in README.md on our GitHub page


const http = require('http');

const server = http.createServer((req, res) => {

   if (req.url === '/') {
      res.write('Hello, World!');
      res.end();
   }

   if (req.url === '/about') {
      res.write('Welcome to the about us page!');
      res.end();
   }

});

server.listen(3000);
