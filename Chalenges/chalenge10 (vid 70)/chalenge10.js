//???????????? DONE ?????????????
//! 1

//? [1] One statement In function
//? [2] Convert To arrow function
//? [3] print the output [arguments may change]

// let names = (...Names) => `String [${Names.join(`],[`)}] => Done !`;
// ;

// console.log(names("Osama" , "Mohamed" , "Ali" ,"Ibrahim"));
//? OUTPUT-> String [Osama], [Mohamed] , [Ali] , [Ibrahim] => Done !

//! 2

// [1] Replace ??? In Return Statment  to get the output 
// [2] Create the same Function with regular syntax
// [3] use array inside the arguments to get the output 

let myNumbers = [20,50,10,60];

let calc = (one, two, ...num) => one+two+num[myNumbers.length-myNumbers.length][myNumbers.indexOf(20)];

console.log(calc(20, 50 , [10,60])); //80