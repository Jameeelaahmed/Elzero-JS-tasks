//????????? DONE ??????????
//! 1

// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// // Elzero

// let mixNew=mix.map(function(ele)
// {
//     return !isNaN(parseInt(ele))? "" :ele;
// }).reduce(function(acc,cur)
// {
//     return acc+cur;
// });

// console.log(mixNew);//? Elzero

//! 2 

// let myString = "EElllzzzzzzzeroo";

// let newString= myString.split("").filter(function(ele,index)
// {
//     return myString.indexOf(ele)===index;
// }).reduce(function(acc,cun)
// {
//     return acc+cun;
// });

// console.log(newString); //? Elzero

//! 3


// let myArray = ["E", "l", "z", ["e","r"], "o"];

// let mA=myArray.reduce(function(acu,cur)
// {
//     return acu+cur;
// })
// .split("")
// .filter(function(ele)
// {
//     return ele!=',';
// })
// .join("");

// console.log(mA);

//! 4

// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// let naS= numsAndStrings.filter(function(ele)
// {
//     return !isNaN(parseInt(ele));
// }).map(function(ele)
// {
//     return -ele;
// })

// // [-1, -10, 10, 20, -5, -3]

// console.log(naS);

//! 5

// let nums = [2, 12, 11, 5, 10, 1, 99];

// // 500

// let n= nums.reduce(function(acu,cur)
// {
//     return cur%2!=0? cur+acu: acu*cur;
// },1);

// console.log(n);

