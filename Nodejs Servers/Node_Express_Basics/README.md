# Basic server using the Express package
Create a very basic webserver using the Express package, that can listen for requests and send responses to them.

## Prerequisites
- Have [Node.js](https://nodejs.org/en/) installed on your machine
- Have already read and understood the 'Node HTTP server' section
- Have already read and understood the 'JavaScript Basics' section

## Getting started
1. Clone or download this repository on your machine
2. Navigate to the *Node_Express_Basics* folder in your terminal
3. Install the packages by typing `npm install` in your terminal
4. Run the server by typing `node index.js` in the terminal
5. Open `localhost:3000` in your browser
6. Stop server by pressing `ctrl + c` in the terminal

## Node Package Manager
There is no need to reinvent the wheel. This is true in programming too. Most problems that we encounter are usually already solved by somebody else - and these solutions are available for download. Packages available through the Node Package Manager (from now on: npm) can really make it easier for us to write cleaner and more efficient code. Npm is installed together with Node.js, and we can use it to download necessary packages - in our case, Express.

**Using npm in a project:**
In order to use npm packages we need to create a *package.json* file, that contains information about our project and keeps track of the packages that we install along the way. We can create it manually, but there is a simpler way. Navigate to your project folder in a terminal, and use the `npm init` command to initiate a new project. We are going to have to type in the name of our project and a few other (optional) details, and npm is going to create the *package.json* file for us. Now we can start installing packages and use them in our code.

**Installing packages:**
We can install npm packages using `npm install package_name` in the terminal or `npm install` to install all packages listed in the *package.json* file. All installed dependencies are going to be saved in the *package.json* file. Upon installing a package a *package-lock.json* will also be created, as well as a folder named *node_modules*. The *package-lock.json* will contain additional details about the installed packages, and *node_modules* is the directory where they'll be downloaded. We don't *ever* need to do anything with either the file, nor the folder, we can leave them as they are.

## Code explanation
We can import *Express* into our code, just as if it would be a built-in module, like *HTTP*. We can save the imported package in a variable called *express*.
```js
const express = require('express');
```
The *express* variable is actually a function that initiates our server. We need to run the *express* function, and save the result in a variable named *app*. This variable is now an object containing methods and properties used to customize our server.
```js
const app = express();
```
The *app* variable has several methods to listen for requests: `app.get()`, `app.post()`, `app.put()` and `app.delete()`. These correspond to the HTTP ([protocol](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol), not the Node module) *read*, *create*, *update* and *delete* (CRUD) operations. These functions take two parameters. The first is the path of the request, the second parameter is a callback function with the parameters req and res - these have the same function as the ones in the HTTP module.
```js
app.get('/', (req, res) => {
   // Handle requests
});
```
We use the `res.send()` function to send the string *'Hello, World!'* as a response to the request - it works the same way as `res.write()` did in the HTTP module.
```js
app.get('/', (req, res) => {
   res.send('Home');
});
```
We can repeat the same piece of code for other paths as well.
```js
app.get('/about', (req, res) => {
   res.send('Welcome to the about us page!');
});
```
In order for our server to be able to listen to incoming requests we need to start it. This is done with the `listen()` function of the *app* object. The *listen* function takes two parameters, the port, and a callback function. The callback function runs when the server starts up.
```js
app.listen(3000, () => console.log('Server is running.'));
```
---
##### Milestone Computer Science Society - 2019
