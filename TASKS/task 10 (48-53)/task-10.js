// ???????????????????????? DONE ????????????????????

//! 1

// let start = 10;
// let end = 100;
// let exclude = 40;

//* solution
// x=start;
// for(start; start<=end; start+=x)
// {
//     if(start==exclude)
//     continue;
//     console.log(start);
// }

//? Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100

//! 2

// let start = 10;
// let end = 0;
// let stop = 3;

//* solution 

// for(start;start>end;start--)
// {
//     if(start==stop)
//     break;
//     if(start<10)
//     console.log(`${0}${start}`);
//     else
//     console.log(start);
// }
//? Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03

//! 3

// let start = 1;
// let end = 6;
// let breaker = 2;

//* solution

// for(start;start<=end;start++)
// {
//     console.log(start);
//     console.log(`--${breaker}\n--${breaker+breaker}`);
// }
//? Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4
//

//! 4

// let index = 10;
// let jump = 2;

//* solution
// for (;;) {
 //Write Your Code Here
//   console.log(index);// 10 8 6
//   index-=2;//8 6 4
//   if(index==jump)
//   break;
// }

// Output
// 10
// 8
// 6
// 4

//!5

// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";

//console.log(friends[0][letter.length-letter.length].toLowerCase())
//* solution 1

// for(let i =letter.length-letter.length; i<friends.length; i++)
// {
//   if((friends[i][letter.length-letter.length].toLowerCase())==letter)
//   continue;
//   console.log(`${i+1} => ${friends[i]}`);
// }

//* solution 2

// for(let i =letter.length-letter.length; i<friends.length; i++)
// {
//   if((friends[i].startsWith(letter.toUpperCase())))
//   {
//     continue;
//   }
//   console.log(`${i+1} => ${friends[i]}`);
// }

//?`Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"

//! 6

//??????????????????????????????????????????????????????????????????????????????
// let start = 0;
// let swappedName = "elZerO";
// let result;

//* solution

// for(let i=start; i<swappedName.length;i++)
// {
//   if(swappedName[i]===swappedName[i].toUpperCase())
//   result+=swappedName[i].toLowerCase();
//   else if (swappedName[i]===swappedName[i].toLowerCase())
//   result+=swappedName[i].toUpperCase();
// }
// console.log(result);

//?Output
//"ELzERo"

//!7

let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];


//* solution

// for(start; start<mix.length; start++)
// {
//   if(mix[start]==1 || typeof mix[start]==="string" )
//   continue;
//   else
//   console.log(mix[start]);
// }
// ?Output
// 2
// 3
// 4