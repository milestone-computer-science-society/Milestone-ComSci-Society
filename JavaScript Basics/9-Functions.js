//
// MCSS - JavaScript Basics: Functions
//

/*
A JS function is a block of code that can be executed arbitrary times.
It is used to write a specific code only once, and then
use it everywhere, where such code is needed.
*/

// Functions take 0 or more paramaters
function myFunction(parameter) {
   console.log(parameter);
}

// Functions can return a value to their caller
function sum(num1, num2) {
   return num1 + num2;
}

const x = sum(1, 2);

// Sum numbers in an array
function sumArray(numbers) {
   let summary = 0;
   for (const number of numbers) {
      summary += number;
   }
   return summary;
}

// Convert fahrenheit to celsius
function toCelsius(fahrenheit) {
   return (5 / 9) * (fahrenheit - 32);
}

// Calling functions
console.log(sum(4, 5));  // Output: 9

console.log(sumArray([ 1, 5, 28, 96, 112, 4, -5 ]));  // Output: 241
console.log(sumArray([ -5, -10, 2, -4 ]));            // Output: -17


// Methods of objects

const user = { id: 1, username: 'johndoe12', online: false };

user.isOnline = function () {
   return this.online;
}

/*
The keyword 'this' inside a method represents the object itself.
In this case it is the same, as typing user.something outside
of the method.
*/

user.goOnline = function () {
   this.online = true;
};

user.goOffline = function () {
   this.online = false;
};

user.goOnline();
console.log(user.isOnline());
