//import { readFile } from 'node:fs';
//  import { dirname } from 'node:path';
const fs = require('fs')
const path = require('path')
//Asynchronously reads the entire contents of a file.
//readFile('./files/first.txt', (err, data) => { 
  //if (err) throw err;
  //console.log(data.toString());}); 

//encoding the reading file using utf8 
// readFile('./files/first.txt', 'utf8' ,(err, data) => {
//   if (err) throw err;
//   console.log(data);
  
// });

fs.readFile(path.join(__dirname,'files','first.txt'), 'utf8' ,(err, data) => {
  if (err) throw err;
  console.log(data);
  
});

//Display error what error is happend 
//exit pn uncaught errors

process.on('uncaughtException', er => {
  console.error(`There was an uncaught error: ${er}`);
  process.exit(1)
  
})