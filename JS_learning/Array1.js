// For loop in Array
// THis for of loop will print in considered of length of the array

let nums = [];
nums[0]= 1;
nums[55]=55;
nums[99]=99;
//for of loop
for(let n of nums){
    console.log(n);
}
//for in loop
// This for in loop will print what are the elements in array not considered about the length of the array 

for(let key in nums){
    console.log(key);
}

// Array Destructing 

let num = [5,7,2,4];
console.log(num);

let [a,b,c,d]= num;
console.log(d);

//Swapping two number
let x = 5;
let y = 67;

console.log(x,y);
[x,y] = [y,x]
console.log(x);
console.log(y);

// Arrays in String 

let words = "My name is Hema Latha".split(" ");

//let [m,n,o,p,q] = words;
let [m,n,o, ...p] = words;
console.log(p);
console.log(m,p);
console.log(o);
console.log(words);

//Array Methods ==> For Each method

let nt = [42,54,65,23,56,12];

nt.forEach( (nx,i,nt) => {
    console.log(nx*2,i*42,nt);
});
console.log(nt);

// Array method  filter map

// in array we have to print even  numbers we can use filter method were it filters for our condition

console.log(nt.filter( n=> n%2 === 0));

nt.filter( n => n%2 === 0)
   .map(n => n*2)
   .forEach(n => {
        console.log(n);
       // console.log(n*2);
   })

   //map reduce 

   let res = nt.filter( n => n%2 === 0 )
       .map( n => n*2)
       .reduce((r,s) => r+s);

    console.log(res);

