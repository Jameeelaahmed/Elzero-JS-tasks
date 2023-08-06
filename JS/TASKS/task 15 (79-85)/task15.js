//? not done 
//! 1

// Create Your Object Here
// let member={
//     //properties
//     name:"Elzero",
//     age: 38,
//     country:"Egypt",
//     //methods
//     fullDetails : function()
//     {
//         return `My Name is ${member.name}, My age is ${member.age}, I live in ${member.country}`;
//     },
// }


// console.log(member.name); // Elzero
// console.log(member.age); // 38
// console.log(member.country); // Egypt
// console.log(member.fullDetails());
//// My Name Is Elzero, My Age Is 38, I Live in Egypt

//! 2 

// // Method One
// // Create Your Object Here
// let objMethodOne={
//     property:"one",
// }

// console.log(`=>1 ${objMethodOne.property}`); // "Method One"

// // Method Two
// // Create Your Object Here

// let objMethodTwo= new Object({
//     property:"two",
// })

// console.log(`=>2 ${objMethodTwo.property}`); // "Method Two"

// // Method Three
// // Create Your Object Here

// let objMethodThree =Object.create(objMethodOne);

// console.log(`=>3 ${objMethodThree.property}`); // "Method Three"

// // Method Four
// // Create Your Object Here

// let objMethodFour=Object.assign({},objMethodTwo,objMethodOne)

// console.log(`=>4 ${objMethodFour.property}`); // "Method Four"

//! 3 

// let a = 1;

// let threeNums = {
//   b: 2,
//   c: 3,
//   d: 4,
// };

// let twoNums = {
//   e: 5,
//   f: 6,
// };

// // Create Your Object Here in One Line

// let finalObject= Object. assign({},{a},threeNums,twoNums);
// console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/


//! 4 
//????????????????????????????????????????????????????????????
// The Object To Work With
let myFavGames = {
    "Trinity Universe": {
      publisher: "NIS America",
      price: 40,
    },

    "Titan Quest": {
      publisher: "THQ",
      bestThree: {
        one: "Immortal Throne",
        two: "Ragnarök",
        three: "Atlantis",
      },
      price: 50,
    },
    YS: {
      publisher: "Falcom",
      bestThree: {
        one: "Oath in Felghana",
        two: "Ark Of Napishtim",
        three: "origin",
      },
      price: 40,
    },
  };
  
  // Code One => How To Get Object Length ?
  let objectl = Object.keys(myFavGames).length;
  // console.log(objectl);
  
  let game=Object.keys(myFavGames);
  for (let i = 0; i < objectl; i++) {
    console.log(`The Game Name Is ${game[i]}`);
    console.log(`The Publisher Is ${myFavGames[game[i]]["publisher"]}`);
    console.log(`The Price Is ${myFavGames[game[i]]["price"]}`);
  
    // Check If Nested Object Has Property (bestThree)
    if (Object.hasOwn(myFavGames[game[i]],"bestThree")) {
      console.log("- Game Has Releases");
      console.log(`First => ${myFavGames[game[i]]["bestThree"]["one"]}`);
      console.log(`Second => ${myFavGames[game[i]]["bestThree"]["two"]}`);
      console.log(`Third => ${myFavGames[game[i]]["bestThree"]["three"]}`);
    }
    console.log("#".repeat(20));
  }
  
  // Ouput
  
  // "The Game Name Is Trinity Universe"
  // "The Publisher Is NIS America"
  // "The Price Is 40"
  // "####################"
  // "The Game Name Is Titan Quest"
  // "The Publisher Is THQ"
  // "The Price Is 50"
  // "- Game Has Releases"
  // "First => Immortal Throne"
  // "Second => Ragnarök"
  // "Third => Atlantis"
  // "####################"
  // "The Game Name Is YS"
  // "The Publisher Is Falcom"
  // "The Price Is 40"
  // "- Game Has Releases"
  // "First => Oath in Felghana"
  // "Second => Ark Of Napishtim"
  // "Third => origin"
  // "####################"

