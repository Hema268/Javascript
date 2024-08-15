//Asynchrous function is the tasks which will done parallely
//Main importance of async function id "Asynchronous programming allows you to divide your logic into available tasks, which allow you to perform long-running operations such as reading a large file, making an API call, downloading a resource from the web, or performing a complex calculation without blocking the execution of your application on the UI"

console.log("Squential First");
//console log is not really a  javascript its a browser's package
console.log('Squential Second');
console.log('Squential Third');

setTimeout(() => console.log('Async Test'),1000);
console.log("Async First");
//set timeout for 2 seconds  here in this function time is optional
//after execting all synchronus task lastly the async function will get executed
setTimeout(() => console.log('Async Second'),2000);

console.log('async third');

//Callback function = It is a function passed as an argument to another function.

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(num1, num2) {
    let sum = num1 + num2;
    myDisplayer(sum);
  }
  
  myCalculator(5, 5);

//example 2 
function myDisplay(s){
    document.getElementById("demo").innerHTML = s;
}
function mycalci(n1,n2,mycallB){
    let sum = n1 + n2;
    mycallB(sum);
}
mycalci(4,4,myDisplay);

//understanding of callback function 

const myNum = [4,2,-8,26,-20,6,9];//Create an Array
// Call removeNeg with a callback
const positiveNum = removeNeg(myNum, (x) => x > 0);
//Display Result
document.getElementById('demo1').innerHTML = positiveNum ;

//Keep only positive numbers
function removeNeg(num , callback){
    const myArr = [];
    for (const x of num){
        if(callback(x)){
            myArr.push(x);
        }
    }
    return myArr;
}