//
// MCSS - JavaScript Basics: Data types
//

// Data types are the following:

let myNumber1 = 10; let myNumber2 = 30.54; let myNumber3 = Math.PI;        // Integers

let myString1 = 'Text'; let myString2 = "Text too"; let myString3 = '';    // Strings

let myBoolean1 = false; let myBoolean2 = true;                             // Booleans

let myArray1 = [ 'item', 17, false, [ '1', '2' ] ]; let myArray2 = [];     // Arrays

let myObject1 = { id: 1, name: 'Joe', pets: [ 'dog, cat' ] };              // Objects

let myUndefinedVariable = undefined;                                       // Undefined

let myNullVariable = null;                                                 // Null


// Check type

console.log(typeof 'I am a string');       // Output: 'string'
console.log(typeof 20);                    // Output: 'number'
console.log(typeof [ 'item', 'item' ]);    // Output: 'object'


// Integers

let x = 4, y = 2, z;

console.log(x + y);  // Output: 6
console.log(x - y);  // Output: 2
console.log(x * y);  // Output: 8
console.log(x / y);  // Output: 2
console.log(x ** y); // Output: 16
console.log(x % y);  // Output: 0

console.log(x);   // Output: 4
x++;              // Increase x by one
console.log(x);   // Output: 5
x--;              // Decrease x by one
console.log(x);   // Output: 4
x += y;           // Add y to x
console.log(x);   // Output 6


// Booleans

console.log(x < y);    // Output: false
console.log(x <= y);   // Output: false
console.log(x > y);    // Output: true
console.log(x >= y);   // Output: true

console.log(x == '6');     // Output: true
console.log(x === '6');    // Output: false
console.log(x != '6');     // Output: false
console.log(x !== '6');    // Output: true

console.log(!true);        // Output: false
console.log(!false);       // Output: true

/* Type coertion: with '==' or '!=' JS will try to parse the string to integer */


// Strings

let string1 = 'Hello, ', string2 = 'World!';
console.log(string1 + string2);  // Add to strings together

let string3 = string1;
string3 += string2;  // Add strings together
console.log(string3);

console.log("Escape double quotes: \" ");
console.log('Escape single quotes: \' ');
console.log('Escape backslash: \\ ');

console.log('short string'.length, 'lorem ipsum dolor sit amet'.length);   // Get length of string

const lipsum = 'Lorem ipsum dolor sit amet...';

console.log(lipsum.indexOf('ipsum'));  // Get first index of 'ipsum' in the variable (indexing starts at 0)

console.log(lipsum.substring(6, 12));  // Selection starts at index 6, ends before index 12

console.log(lipsum.substr(6, 5));      // Selection starts at index 6, selects 5 characters


// Arrays

let pets = [ 'cat', 'dog', 'hamster' ];

console.log(pets[0], pets[1]);   // Log items at index 0 and index 1, output: cat dog

console.log(pets.indexOf('hamster'));  // Get index of 'hamster', output: 2
console.log(pets.indexOf('parrot'));   // Get index of non-existent item, output: -1

pets[3] = 'tarantula';     // Add a new item
console.log(pets[3]);      // Output: 'tarantula'

pets[3] = 'bunny';         // Overwrite item
console.log(pets[3]);      // Output: 'bunny'

pets.push('parrot');       // Add item to the end of the array
pets.unshift('lizard');    // Add new item at the beginning of the array

console.log(pets);         // Output: [ 'lizard', 'cat', 'dog', 'hamster', 'bunny', 'parrot' ]

console.log(pets.length);  // Get the length of the array, output: 6

pets.shift();        // Remove first item
pets.pop();          // Remove last item
console.log(pets);   // Output: [ 'cat', 'dog', 'hamster', 'bunny' ]

pets.splice(1, 2);   // Start removing items at index 1, remove 2 elements
console.log(pets);   // Output: [ 'cat', 'bunny' ]

const newPets = [ 'hedgehog', 'turtle' ];    // New array with new pets
pets = [ ...pets, ...newPets, 'horse' ];     // Pets is now pets + newPets + 'horse'
console.log(pets);                           // Output: [ 'cat', 'bunny', 'hedgehog', 'turtle', 'horse' ]


// Objects

let user = { id: 1, username: 'johndoe12', fullname: 'John Doe', password: '123456' };

console.log(user['username']);   // Output: 'johndoe12'
console.log(user.username);      // Output: 'johndoe12'

user.username = 'johndoe36';     // Change property of object
console.log(user.username);      // Output: 'johndoe36'
user['username'] = 'johndoe48';  // Change property of object
console.log(user.username);      // Output: 'johndoe48'

user.email = 'john@doe.com';     // Add new property
console.log(user.email);         // Output: 'john@doe.com'
user['age'] = 30;                // Add new property
console.log(user['age']);        // Output: 30

delete user.age;                 // Delete property 'age'
console.log(user.age);           // Output: undefined

const k = Object.keys(user);     // Returns keys of user as an array
console.log(k);                  // Output: [ 'id', 'username', 'fullname', 'password', 'email' ]
const v = Object.values(user);   // Returns values of user as an array
console.log(v);                  // Output: [ 1, 'johndoe48', 'John Doe', '123456', 'john@doe.com' ]

const userData = { registered: '2019.01.01', lastOnline: '2019.02.15' };
user = { ...user, ...userData, age: 30 };    // Merge objects
console.log(user);

/*
Objects can have methods (e.g.: console.log(), log is the method).
A method is a function inside an object
*/
