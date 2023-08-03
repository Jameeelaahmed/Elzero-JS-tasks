//???????? DONE ????????

//! 1

/*
You can use    (,)--(_)--(space)--(True=> //? one time only )
You can't use  (Numbers)(Letters)

--You must use [filter + Map + Reduce + your knowledge]
--Order is not important 
--All in one chain
*/

let myString= "1,2,3,EE,l,z,e,r,o,_,Web,_,S,c,h,o,o,l,2,0,Z";

let newString= myString.split("")
.filter(function(ele)//*
{
    return isNaN(parseInt(ele)) ;
})
.filter(function(ele)//*
{
    return !( ele===',');
})
.map(function(ele)
{
    return ele==='_' ? " " : ele;
})
.reduce(function(acu,cur)//*
{
    return acu+cur;
}).slice(true, -isNaN(myString))

//console.log(-isNaN(myString));

console.log(newString);  //? Elzero Web School