/// //Promises has 3 states: Pending ,Fullfilled, Rejected
const myPromise = new Promise((resolve,reject) =>{
    const error = false;
    if(!error){
        resolve("Yes ! resolved");
    }
    else{
        reject("No! Rejected")
    }
})
console.log(myPromise);
/* OUTPUT:
Promise {<fulfilled>: 'Yes ! resolved'}
[[Prototype]]
: 
Promise
catch
: 
ƒ catch()
constructor
: 
ƒ Promise()
finally
: 
ƒ finally()
then
: 
ƒ then()
Symbol(Symbol.toStringTag)
: 
"Promise"
[[Prototype]]
: 
Object
[[PromiseState]]
: 
"fulfilled"
[[PromiseResult]]
: 
"Yes ! resolved" 
*/

//a thenable is an object that has a then() function. All promises are thenables, but not all thenables are promises. 
// wee want straightly a value means we use then().

myPromise
.then(valu =>{
    console.log(valu);
})
/* 
output:
Yes ! resolved
*/

myPromise
.then(valu =>{
    return valu + " Welcome";
})
.then(newvalue => {console.log("Second " +newvalue);
})

/* 
output:
Second Yes ! resolved
*/
// Trying to show error
const myPromise1 = new Promise((resolve,reject) =>{
    const error = true;
    if(!error){
        resolve("Yes ! resolved the Promise");
    }
    else{
        reject("No! Rejected the Promise")
    }
})
console.log(myPromise1);

myPromise1
.then(valu =>{
    console.log(valu);
}).
catch(err =>{
    console.log(err);
    
})

//pending State

const users = fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
.then(res => {
    return res.json()
}).then(users =>{
    users.forEach(user =>{
        console.log(user);
    })
    console.log(users);
    
})
console.log(users);



