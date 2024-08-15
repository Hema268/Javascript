//Promises has 3 states: Pending ,Fullfilled, Rejected
const myPromise = new Promise((resolve,reject) =>{
    const error = false;
    if(!error){
        resolve("Yes ! reolved");
    }
    else{
        reject("No! Rejected")
    }
})
console.log(myPromise);
