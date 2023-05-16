let x = function (a) {
  return 5 * a;
};

//ES6  Arrow expresion
let y = (a) => a * 5; // y = a => a * 5; same
console.log(y(5));

//map fuction that comes with arrow expressions

let arr=[5,10,20];

let newArr=arr.map(x=>x*2)
console.log(newArr);


//varArgs in Java

let mid=[3,4];

let arr2=[1,2,...mid,5,6];
console.log(arr2);

function howManyElemnts(...theArgs) {
console.log(theArgs.length);
   
}

howManyElemnts();
howManyElemnts(5);
howManyElemnts(3,4,23,43,2);

function multiply(multiplier, ...theArgs){
return theArgs.map(element=>multiplier*element);
}
console.log(multiply(5,1,2,3,4,5)); //[5,10,15,20,25]
let str='CYDEO';
let chars=[...str];
console.log(chars); //[ 'C', 'Y', 'D', 'E', 'O' ]
