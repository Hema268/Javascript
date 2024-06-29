// Map 
/*
1. Map looks similar to object
2. Key and value pair
3. Map is class and is also a DS 
*/

let m = new Map();

m.set("Hema", "web");
m.set("Poorna","coding");
m.set("trisa","data");
m.set("Hema", "Python");
//Keys are ==> { 'Hema', 'Poorna', 'trisa' }
console.log(m);
console.log(m.keys());
// use has to check it is there or not
console.log(m.has('Hema'));

//for loop

for(let [k,v] of m){
    console.log(k, " : " ,v);
}

// For each loop
m.forEach((v,k) => {
    console.log(k,":" ,v);
} );