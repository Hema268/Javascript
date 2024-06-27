//one method to create an array
let values = new Array();

//pushing the elements
values.push(33,44,55,'Hema');
console.log(values);

//another method to create an array
let values1 = [2,4,'Hema'];
console.log(values1);

//length of an array
console.log(values1.length);

//accessing the elements
console.log(values1[0]);
console.log(values1[1]);
console.log(values1[2]);
console.log(values1[3]);

//changing the value of an array
values1[1] = 23;
console.log(values1);

//deleting an element
values1.pop();
console.log(values1);

//adding an element
values1.push('Latha');
console.log(values1);

let names = ['Hema','poorna','trisa'];
//another way to add an element
names[3] = 'jeeva';
console.log(names)

let data = ['Hema',21, {tech: 'Js', role: 'developer'}, function(){console.log('hello....')}];
console.log(data);
data[3]();

//other methods of array

//shift => removes the first element
data.shift();
console.log(data);

//unshift => adds an element
data.unshift('Hema(unshift)');
console.log(data);

//concat
let arr = [1,2,3];
let arr1 = [4,5,6];
let arr2 = arr.concat(arr1);
console.log(arr2);

//splice
let arr3 = [11,22,33,44,'splice', 'method'];
//console.log(arr3.splice(2));
console.log(arr3)
console.log(arr3.splice(3,3));
// First value is the index and second value is the number of elements to be deleted
console.log(arr3)
console.log(arr3.splice(1,2, 'hello', 'world', 'bye', 100));
console.log(arr3);