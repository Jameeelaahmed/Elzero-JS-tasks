//??????????? DONE ??????????

// ! 1

//let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
//let num = 3;

//*  Method 1
//myFriends.pop()
//console.log(myFriends); //? ["Ahmed", "Elham", "Osama"];

//* Method 2

//console.log(myFriends.slice(num-num)) //? ["Ahmed", "Elham", "Osama"];

//* method 3
// myFriends.length=num;
// console.log(myFriends);

//! 2

//let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here

//friends.shift();
//friends.pop();
//console.log(friends); // ["Eman", "Osama"]

//! 3


//let arrOne = ["C", "D", "X"];
//let arrTwo = ["A", "B", "Z"];
//let finalArr = arrOne.concat(arrTwo).sort().reverse();

//? Write One Single Line Of Code

//console.log(finalArr); //? ["Z", "X", "D", "C", "B", "A"]

//! 4

//let website = "Go";
//let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

//console.log(words[website.length][0].slice(website.length).toUpperCase()); //? ZERO

//! 5

// let needle = "JS";
// let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
//* 1
// if(haystack.includes(needle))
// console.log("Found");

//* 2
// x=needle.length -1;
// if(needle == haystack[x] )
// {
//     console.log("Found");
// }

//* 3

// if(needle==haystack[1])
// {
//     console.log("Found");
// }



//! 6 

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];

//? Your Code Here
let allArrs = arr1.concat(arr2).sort().join("").slice(arr2.length).toLowerCase();



console.log(allArrs); //? fxy
