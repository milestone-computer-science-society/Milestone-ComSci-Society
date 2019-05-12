//
// MCSS - JavaScript Basics: Loops
//

/*
Repeat same piece of code with different (e.g.: increasing) values.
Usually used to iterate over arrays or objects.
Notable types: for; while; do-while.
*/

const presidents = [
   { number: 41, name: 'George H. W. Bush', elected: 1989, incumbent: false },
   { number: 43, name: 'George W. Bush', elected: 2001, incumbent: false },
   { number: 45, name: 'Donald Trump', elected: 2017, incumbent: true },
   { number: 42, name: 'Bill Clinton', elected: 1993, incumbent: false },
   { number: 44, name: 'Barack Obama', elected: 2009, incumbent: false }
];

// Used when the number of iterations is known
for (let i = 0; i < presidents.length; i++) {
   if (presidents[i].incumbent === false) {
      continue;
   } else {
      console.log('The current president is: ' + presidents[i].name);
      break;
   }
}

// Modern way of iterating arrays
for (const president of presidents) {
   if (president.elected >= 2000 && president.elected < 2100) {
      console.log(president.name + ' was elected in the 21st century.');
   }
}

// Iterate objects
for (const property in presidents[3]) {
   if (property === 'name') {
      console.log('The name of this president is ' + presidents[3][property]);
   }
}

// Usually used when iterating unknown number of times
let i = 0;
while (i < presidents.length) {
   if (presidents[i].number !== 41) {
      i++;
      continue;
   } else {
      console.log('George H. W. Bush was elected in: ' + presidents[i].elected);
      break;
   }
}

// Something needs to be done first, condition is checked afterwards
let j = 0;
do {
   if (presidents[j].name !== 'Donald Trump') {
      j++;
      continue;
   } else {
      console.log('Donald Trump is the #' + presidents[j].number + ' president of the US.');
      break;
   }
} while (j < presidents.length);


// Infinite loop
/*for (let i = 0; i < Infinity; i++) {
   console.log(i);
}*/

/*while (Infinity) {
   console.log('Hello');
}*/
