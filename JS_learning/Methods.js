let laptop = {
    brand: 'asus',
    ram: 8,
    cpu: 'i7',

    //method
    greet: function() {
        console.log("Hello");
    },
}
laptop.greet();

//another way
let laptop1 = {
    brand: 'asus',
    ram: 8,
    cpu: 'i7',
    //method
    greet() {
        console.log("In Different way");
    },
}
laptop1.greet();

// this  keyword
 let student = {
     name: 'Hemalatha',
     age: 21,
     role: 'developer',

     placement: function() {
         console.log(this.name + " is placed in web " + this.role + " role at Amazon");
     }

 }
 student.placement();

 // Constructor

 function freaky(name, age, role){
    this.name = name;
    this.age = age;
    this.role = role;
    //method
    this.work = () => {
        console.log("Sloving bugs....");
    }
 }
 let freak1= new freaky('Hema', 21, 'developer');
 let freak2= new freaky('Latha', 21, 'designer');

 console.log(freak1);
 //changing value of property
 freak1.role = 'CEO';
 console.log(freak1);
 console.log(freak2);

 freak1.work();
 