//
// MCSS - JavaScript Bacics: Conditionals
//

// If - else statement

const user = { id: 1, fullname: 'John Doe', password: '123456' };

// If username doesn't exist, create it
if (typeof user.username === 'undefined') {
   user.username = 'johndoe12';
}

// If username doesn't exist, create it
if (!user.username) {
   user.username = 'johndoe12';
}

// "Validate" password
if (user.password.length < 5) {
   console.log('The password is too short!');
} else if (user.password.length > 50) {
   console.log('The password is too long!');
} else if (user.password === '123456') {
   console.log('Your password is too weak!')
} else {
   console.log('Password okay.');
}

// "Validate" password
switch (user.password) {
   case '123456':
      console.log('Password too weak!');
      break;
   case 'password':
      console.log('Password too weak');
      break;
   default:
      console.log('Password okay.');
}


const user2 = { id: 2, fullname: 'James Holden', username: 'johndoe12', password: 'Hsk734nhE' };

if (user2.username === user.username) {
   console.log('Sorry, this username is taken.');
}
