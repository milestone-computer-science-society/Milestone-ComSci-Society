//
// MCSS - JavaScript Basics - Variables
//

/* Variables are used to store and retrieve data that the program needs. */

let myVariable;
console.log(myVariable);      // Output: undefined

myVariable = 'Hello, World!';
console.log(myVariable);      // Output: Hello, World!


// Declaring and defining variables

let testVariable1;         // Declaration (creating a variable without any value)

let testVariable2 = 10;    // Definition (declaration + giving the variable a value)


// Variables declared with the keyword 'let' can be changed

let changeable = 10;
console.log(changeable);   // 'changeable' is 10

changeable = 20;
console.log(changeable);   // 'changeable' is now 10

changable = 'I am text now!';
console.log(changeable);   // 'changeable' is now 'I am a text now!' and is of type string


// Variables declared with the keyword 'const' are NOT changable

const constant = 'Try and change my value!';
console.log(constant);     // Output: Try and change my value!

constant = 'New value!';   // JavaScript throws an error: "Assignment to constant variable."
