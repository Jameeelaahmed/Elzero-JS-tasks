// ????????     DONE    ????????????????

//! 1

//* Examples
//* console.log(100_000); // 100000
//* console.log(100000); // 100000
//* console.log(5e4 + 5e4); // 100000

// Your Solutions
// console.log(100000); //? 100000
// console.log(100_000); //? 100000
// console.log(1e5); //? 100000
// console.log(50000*2); //? 100000
// console.log(5e4+5e4); //? 100000
// console.log(200_000/2); //? 100000
// console.log(100001-1); // 100000
// console.log(Math.round(100000.4)); //? 100000
// console.log(Math.floor(100000.8)); //? 100000
// console.log(Math.trunc(100000.5)); //? 100000
// console.log(Math.pow(10,5));
// console.log(10**5);

//! 2

//console.log(-Number.MIN_SAFE_INTEGER); //? 9007199254740991

//!3
//let num=Number.MAX_SAFE_INTEGER;

//console.log(`$(num()`.length()); // 16
//console.log(`${Number.MAX_SAFE_INTEGER}`.length);

//! 4
//let myVar = "100.56789 Views";

// console.log(parseInt(myVar)); //? 100
// console.log(parseFloat(myVar).toFixed(2)); //? 100.57

//! 5

//let num = 10;
//if(Number.isInteger(num))
   //console.log(`${num}`.length); //? 2

//! 6

let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(flt.toFixed(0)); // 10

//!7

console.log(Math.floor(Math.random()*5)); // 0 || 1 || 2 || 3 || 4
