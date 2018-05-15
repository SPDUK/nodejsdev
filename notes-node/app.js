console.log('Starting app.');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
let command = process.argv[2];
console.log('Command: ', command);
console.log(process.argv);

if (command = 'add') {
  console.log("Adding a new note");
} else if (command === 'list') { 
  console.log('listing all notes');
} else if (command === 'read') {
  console.log('Reading note');
} else if (command === 'remove') {
  console.log('removing note');
} else {
  console.log('command not recognized');
}
