//
// MCSS - JavaScript Basics - Variables
//

/*
Variables are used to store and retrieve data that the program needs.
Creating variables: keyword variableName = value;
Example: let myFirstVariable = 20;
*/

let myVariable;
console.log(myVariable);      // Output: undefined

myVariable = 'Hello, World!';
console.log(myVariable);      // Output: Hello, World!


// Declaring and defining variables

let testVariable1;         // Declaration (creating a variable without any value)

let testVariable2 = 10;    // Definition (declaration + giving the variable a value)


// I. 'let': variables declared with the keyword 'let' can be changed

let changeable = 10;
console.log(changeable);   // 'changeable' is 10

changeable = 20;
console.log(changeable);   // 'changeable' is now 10

changable = 'I am text now!';
console.log(changeable);   // 'changeable' is now 'I am a text now!'


// II. 'const': variables declared with the keyword 'const' are NOT changable

const constant = 'Try and change my value!';
console.log(constant);

// Trying to change a constant's value will result in the program stopping with an error


// III. 'var': variables declared with 'var' keyword

/*
We can also create variables with the 'var' keyword. Var is similar to let,
and it's value can be changed. The only difference is, that when we create a
vairable with 'var', JavaScript moves the variable declaration to the beginning
of the file. This way we can access the variable (even if it has no value) before
we create it in the code, and JavaScript will not throw errors.
*/

console.log(variableWithVar); // Output is 'undefined', but variable can still be accessed

var variableWithVar = 394;    // Set variable to 394

console.log(variableWithVar); // Output: 394
