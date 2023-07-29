
//! 1 
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// Elzero

let mixNew=mix.map(function(ele)
{
    return !isNaN(parseInt(ele))? "" :ele;
}).reduce(function(acc,cur)
{
    //??????????
    return acc+cur;
});

console.log(mixNew);//? Elzero

//! 2 

//????????????
let myString = "EElllzzzzzzzeroo";

let newString= myString.split("").filter(function(ele,index)
{
    return myString.indexOf(ele)===index;
}).join("");

console.log(newString);
console.log(myString.indexOf('z'));
// Elzero

//! 3

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let myArrayNew=myArray.reduce(function(acc,cur)
{
return acc+cur;
}.join(""));
// Elzero

console.log(myArrayNew);