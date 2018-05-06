console.log('Starting app.');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var numbers = notes.add(1, 5);
console.log(numbers);

// var user = os.userInfo();

// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}`);
