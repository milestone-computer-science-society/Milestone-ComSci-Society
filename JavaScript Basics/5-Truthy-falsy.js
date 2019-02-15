//
// MCSS - JavaScript Basics: Truthy falsy
//

/*
Some values that are not booleans (true/false) can be considered
true or false, if used as a condition e.g. in an if-else.
*/

// Falsy:

const falsy1 = undefined;   // Undefined values / variables
const falsy2 = null;        // Null
const falsy3 = 0;           // Zero
const falsy4 = '';          // Empty string
const falsy5 = "";          // Empty string
const falsy6 = false;       // False
const falsy7 = NaN;         // Not a Number


// Truthy

const truthy1 = 'false';   // String 'false'
const truthy2 = '0';       // String '0' zero
const truthy3 = [];        // Empty array
const truthy4 = {};        // Empty object

// Any other string, number etc. is truthy too

if (undefined) {
   // This won't run
} else {
   // This WILL run
}

if ('') {
   // This won't run
} else {
   // This WILL run
}

if ([]) {
   // This WILL run
} else {
   // This won't run
}
