# Basic server using Node.js' HTTP module
Create a very basic webserver using Node.js' built-in *HTTP* module, that can listen for requests and send responses to them.

## Prerequisites
- Have [Node.js](https://nodejs.org/en/) installed on your machine
- Have already read and understood the 'JavaScript Basics' section

## Getting started
1. Clone or download this repository on your machine
2. Navigate to the *Node_HTTP_Basics* folder in your terminal
3. Run the server by typing `node index.js` in the terminal
4. Open `localhost:3000` in your browser
5. Stop server by pressing `ctrl + c` in the terminal

## Code explanation
Node.js comes with a number of built-in modules used for file manipulation, accessing OS information and creating servers. The latter one is called *HTTP*. We have to import it into our code using the `require()` function. The created *http* obejct will contain methods and properties used to create our server.
```js
const http = require('http');
```
The *http* object has a function called `createServer()` - which creates the server itself. This function takes a *callback function* as a parameter. A callback function is simply a function that is passed to something else as a parameter, and gets executed at a certain time or event - in this case when a request is received. This callback function has the req and res parameters, which contain information about the request and functions to send a response, respectively. We can save the server in the *server* variable.
```js
const server = http.createServer((req, res) => {
    // Handle requests
});
```
We can handle requests inside of the callback function passed to `createServer()`. We use the *url* property of the *req* object to handle requests sent to a specific path. A path can be e.g. the homepage '/', the about us page '/about' or some other path '/mypage/api/something'. We use the `res.write()` function to respond to the request with the string *'Hello, World!'*. We also must use the `res.end()` function to finish the response.
```js
const server = http.createServer((req, res) => {
   if (req.url === '/') {
      res.write('Hello, World!');
      res.end();
   }
});
```
We can simply add other paths to the listener like this:
```js
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
```
In order for our server to be able to listen to incoming requests we need to start it. This is done with the `listen()` method of the *server* object. This function takes one parameter, the port. A server is usually accessed through the machines IP address it is running on (Google: 172.217.6.142, Facebook: 31.13.93.35, Your own machine: 127.0.0.1 or localhost). Usually a single machine is running several processes that are using the IP address, so we differentiate between them using the port (in this case: 3000).
```js
server.listen(3000);
```
---
##### Milestone Computer Science Society - 2019
