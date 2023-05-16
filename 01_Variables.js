console.log("Hello JavaScript Learners");

//declaring variables
/**
 * Js is dynamic typing language
 */

let a;
console.log(typeof a);
a=5;  //infers that a is a number
console.log(typeof a);
a='BootCamp';  //infers that a is String
console.log(typeof a);
a=true; //infers that a is boolean
console.log(typeof a);


let x=5, y='Oscar';
console.log(x+y) //concatination : 5Oscar
console.log(x*y); //Nan

// Naming Rules : same with Java naming rules

//constant variables

const number=35;

//TypeError: Assignment to constant variable
//number=45;

console.log(number);

let c=null;

console.log(typeof c);
console.log(c)


