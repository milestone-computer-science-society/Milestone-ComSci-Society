//
// MCSS - JavaScript Basics: Data types
//

// The types of data in JavaScript are the following:

let myNumber1 = 10; let myNumber2 = 30.54; let myNumber3 = Math.PI;        // Numbers

let myString1 = 'Text'; let myString2 = "Text too"; let myString3 = '';    // Strings

let myBoolean1 = false; let myBoolean2 = true;                             // Booleans

let myArray1 = [ 'item', 17, false, [ '1', '2' ] ]; let myArray2 = [];     // Arrays

let myObject1 = { id: 1, name: 'Joe', pets: [ 'dog, cat' ] };              // Objects

let myUndefinedVariable = undefined;                                       // Undefined

let myNullVariable = null;                                                 // Null


// Check type of a variable

console.log(typeof 'I am a string');       // Output: 'string'
console.log(typeof 20);                    // Output: 'number'
console.log(typeof [ 'item', 'item' ]);    // Output: 'object'


// I. Numbers

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


// II. Booleans

console.log(x < y);    // Output: false
console.log(x <= y);   // Output: false
console.log(x > y);    // Output: true
console.log(x >= y);   // Output: true

console.log(x == '6');     // Output: true
console.log(x === '6');    // Output: false
console.log(x != '6');     // Output: false
console.log(x !== '6');    // Output: true

console.log('text1' !== 'text2');    // Output: true
console.log('text1' === 'text2');    // Output: false

console.log(!true);        // Output: false
console.log(!false);       // Output: true

/*
Type coertion: with '==' or '!=' JavaScript will try to convert (parse)
the string to a number. For example the number 5 and the string '5'
would be equal, because the string '5' can be converted into a number.
To avoid type coertion, we need to use === or !== this way 5 is not
equal to '5'.
*/


// Strings

/*
Strings are a string of characters, they are usually used to store text, usernames
e-mail addresses, passwords, etc. We can store almost anything in strings.
*/

let string1 = 'Hello, ', string2 = 'World!';
console.log(string1 + string2);  // Log the two strings concatenated

let string3 = string1;  // string3 is now the same as string1
string3 += string2;     // Concatenate strings, save the result in string3
console.log(string3);   // Output: Hello, World!

/*
Double or single quotes mark the beginning and the end of a string.
If we need to have a double or single quote inside the text, and
we don't want javascript to think that it is the end of the string,
we need to put an "escape character", a backlash in front of it.
*/

console.log("Escape double quotes: \" ");    // Escape double quote
console.log('Escape single quotes: \' ');    // Escape a single quote
console.log('Escape backslash: \\ ');        // Escape backlash

console.log('short string'.length, string3.length);   // Get length of string

const lipsum = 'Lorem ipsum dolor sit amet...';

console.log(lipsum.indexOf('ipsum'));  // Get first index of 'ipsum' in the variable (indexing starts at 0)

console.log(lipsum.substring(6, 12));  // Selection starts at index 6, ends before index 12

console.log(lipsum.substr(6, 5));      // Selection starts at index 6, selects 5 characters


// Arrays

/*
Arrays are essentially a list of items. We can store anything in arrays,
strings, numbers, booleans, objects or other arrays. The items are indexed
from 0 (first item is 0, second is 1 and so on). We can access the items
using the indexes.
*/

let pets = [ 'cat', 'dog', 'hamster' ];

console.log(pets[0], pets[1]);   // Log items at index 0 and index 1, output: cat dog

console.log(pets.indexOf('hamster'));  // Get index of 'hamster', output: 2
console.log(pets.indexOf('parrot'));   // Get index of non-existent item, output: -1

pets[3] = 'tarantula';     // Add a new item at 3rd index
console.log(pets[3]);      // Output: 'tarantula'

pets[3] = 'bunny';         // Overwrite item at index 3
console.log(pets[3]);      // Output: 'bunny'

pets.push('parrot');       // Add new item to the end of the array
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

/*
Objects are similar to arrays, except that they not only store values,
but key-value pairs. Instead of indexes we can retrieve values using the keys.
*/

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
