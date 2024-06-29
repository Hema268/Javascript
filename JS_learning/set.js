// Set in JavaScript
/*  
1. set is collections of unique value 
2. it is normally unordered list 
3. not have index value.
4. Basically it is class
*/

let num = new Set("bookkeeper");
console.log(num);
//output will be ===> Set(6) { 'b', 'o', 'k', 'e', 'p', 'r' } it doesn't have repeated values

// adding elements in the set

let d = new Set();
d.add(3);
d.add(44);
d.add(3);
d.add('hema');
d.add('code');

console.log(d);
//printing using foreach loop
d.forEach((n) => {
    console.log(n);
});

//Searching Elements in the set are there or not

console.log(d.has(2));
console.log(d.has('hema'));