//
// MCSS - JavaScript Basics: Scopes
//

/*
Variables created inside a code block '{ }' can be accessed
only in the same code block, or it's children blocks.
The main code block is the file itself.
*/

for (let i = 0; i < 10; i++) {   // 'i' is created in the for loop
   console.log(i);               // 'i' can be accessed inside the code block
   for (let j = 0; j < 10; j++) {
      console.log(i);            // 'i' can be accessed inside a child block as well
   }
}

//console.log(i);      // Throws an error, 'i' is not defined

let i = 'some text';    // We can create i here as well
console.log(i);      // 'i' is 'some text'


// Variables created with the keyword 'var'

/*
The variables defined with the keyword 'var' have a global / function scope.
They can be created in a block of code (e.g. for loop), but they will be
accessible outside of that block.
Just like 'let' variables, 'var'-s can also be modified.
*/

var variable = 'Hello';

for (var k = 0; k < 10; k++) {
   console.log(k);
}

console.log(k);   // 'k' is available outside of it's block, output: 10
