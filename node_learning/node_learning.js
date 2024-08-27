console.log("Hello hema");

const os = require('os')
const path = require('path')
//const test = require('./test')
const {add,sub,mul,div} = require('./test')

//gives us informations about operating system
console.log(os.type()) /// op: Windows_NT
console.log(os.version()); //op: Windows 10 Pro Education
console.log(os.homedir()); // op: C:\Users\ELCOT
//shows folder 
console.log(__dirname); //op: D:\Presidio\nodejs_web_server-main\nodejs_web_server-main
//shows filename
console.log(__filename);//op:D:\Presidio\nodejs_web_server-main\nodejs_web_server-main\node_learning.js

//shows paths
console.log(path.dirname(__filename));// directory    op:D:\Presidio\nodejs_web_server-main\nodejs_web_server-main
console.log(path.basename(__filename));//base name alone   op: node_learning.js
console.log(path.extname(__filename));//shows extensions alone  op:.js

console.log(path.parse(__filename)); 
// op: 
// {
//     root: 'D:\\',
//     dir: 'D:\\Presidio\\nodejs_web_server-main\\nodejs_web_server-main',
//     base: 'node_learning.js',
//     ext: '.js',
//     name: 'node_learning'
//   }

// console.log(test.add(4,2));//6
// console.log(test.sub(4,2));//2
// console.log(test.mul(4,2));//8
// console.log(test.div(4,2));//2

console.log(add(4,2));//6
console.log(sub(4,2));//2
console.log(mul(4,2));//8
console.log(div(4,2));//2