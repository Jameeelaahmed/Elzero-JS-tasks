let a ="Elzero web school";

//! 1

//* include the method in your solution (charat(),slice())
console.log(a.charAt(2).toUpperCase()+a.slice(3,6)); //? Zero 

//! 2

//* 8 H
console.log(a.charAt(13).repeat(8).toUpperCase()); //? HHHHHHHH

//! 3

//* return array 
console.log(a.split(" ",1)); //? [Elzero]

//! 4

//*Use Only "substr" method + templete literals in your solution 
console.log(`${a.substr(0,6)} ${a.substr(11,17)}`); //? Elzero School

//! 5

//*solution must be dynamic and string may change 

console.log(a.charAt(0).toLowerCase() + a.slice(1, length-1).toUpperCase()  +a.charAt(16).toLowerCase()); //? eLZERO WEB SCHOOl
