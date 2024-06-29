//This Recursive function uses the stack alloction where it is first in first out or last in first out
//this example were we can call function from another function also
function show(){ 
    console.log("hi..."); //and then show calls the log function
}
function abc(){
    show();
}
show(); // show is first called(3)
abc();

/// Recursion is the one were function is called by itself
let num = 1;
 function see(){
    console.log("HI...",num);
    num++;
    if (num<=2)
        see();
 }
 see();


 /// Factorial using Rceursion

 function fact(n){
    if(n == 0)
        return 1;
    else 
        return n* fact(n-1);
 }

 let x = 6;
 let res = fact(x);

 console.log(res);
 