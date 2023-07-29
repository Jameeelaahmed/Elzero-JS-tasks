// let swapingCases="elZERo";

// let swap=swapingCases.split("").map( function(ele) {
//     return ele===ele.toUpperCase()? ele.toLowerCase(): ele.toUpperCase();
// }).join("")

// console.log(swap);

// let invertedNumber=[1,-10,-20,15,100,-30];

// let iN= invertedNumber.map(function(ele)
// {
//     return -(ele);
// });

// console.log(iN);

// let ignoreBooleans="Elz123er4o";
// let x;
// let iB= ignoreBooleans.split("").map(function(ele)
// {
//     return isNaN(ele)=== true ? ele: "";
// }).join("");

// console.log(iB);

// console.log(isNaN("E"))

// let mix="A13BS2ZX";

// let filt=mix
// .split("")
// .filter(function(ele)
// { return !isNaN(parseInt(ele)); })
// .map(function(ele)
// { return ele*ele  
// })
// .join("");



// console.log(filt);


//! 1

/*
You can use    (,)--(_)--(space)--(True=> //? one time only )
You can't use  (Numbers)(Letters)

--You must use [filter + Map + Reduce + your knowledge]
--Order is not important 
--All in one chain
*/

let myString= "1,2,3,EE,l,z,e,r,o,_,Web,_,S,c,h,o,o,l,2,0,Z";

let solution= myString.split("").filter(function(ele)
{
    return isNaN(parseInt(ele))
    ? ele
    : ""  || ele ===',' || ele ==='_'? "";
}).join("");

console.log(solution);