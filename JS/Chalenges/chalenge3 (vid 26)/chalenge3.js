let a=1_00;
let b=2_00.5;
let c=1e2;
let d=2.44;

//! 1 
//* find smalest number in all variables and return integer 

//console.log(Math.trunc(Math.min(a,b,c,d)));

//! 2
//* use variable a + d One time to get the needed output 

//console.log(Math.pow(a,Math.trunc(d))); //? 10000

//! 3

//* Get integer 2 with d variable with 4 method

// console.log(Math.round(d));
// console.log(Math.floor(d));
// console.log(Math.trunc(d));
// console.log(Number((d).toFixed(0)));

//! 4 

//* use variable b+d to get this values 

console.log((Math.trunc(b)/Math.ceil(d)).toFixed(2)); //? 66.67 => string 
console.log(Math.floor(Math.trunc(b)/Math.ceil(d))); //? 67    => number 
