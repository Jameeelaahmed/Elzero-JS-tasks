//?????????? DONE ??????????????

//! 1
// function sayHello(theName, theGender) {
//     if(theGender=="Male")
//     console.log(`Hello Mr ${theName}`);
//     else if(theGender=="Female")
//     console.log(`Hello Miss ${theName}`);
//     else
//     console.log(`Hello ${theName}`);
//   }
//   // Needed Output
//   sayHello("Osama", "Male"); // "Hello Mr Osama"
//   sayHello("Eman", "Female"); // "Hello Miss Eman"
//   sayHello("Sameh"); // "Hello Sameh"

  //! 2 

// function calculate(firstNum, secondNum, operation)
// {
//     // Your Code Here
//     if(secondNum===undefined || firstNum===undefined)
//     console.log("You should enter two numbers ");
//     else if(operation==="add")
//     console.log(firstNum+secondNum);
//     else if(operation==="subtract")
//     console.log(firstNum-secondNum);
//     else if(operation==="multiply")
//     console.log(firstNum*secondNum)
//     else
//     console.log(firstNum+secondNum)
// }
//   // Needed Output
//   calculate(20); // Second Number Not Found
//   calculate(20, 30); // 50
//   calculate(20, 30, 'add'); // 50
//   calculate(20, 30, 'subtract'); // -10
//   calculate(20, 30, 'multiply'); // 600

//! 3 

// function ageInTime(theAge) {
//     if(theAge<10 || theAge >100)
//     {
//         console.log("out of range")
//     }
//     else
//     {
//         console.log(`years => ${theAge}`);
//         console.log(`months => ${theAge * 12}`);
//         console.log(`weeks => ${theAge * 12 * 4}`);
//         console.log(`days => ${theAge * 12 * 4 * 7}`);
//         console.log(`hours => ${theAge * 12 * 4 * 7 * 24}`);
//         console.log(`minutes => ${theAge * 12 * 4 * 7* 24 * 60}`);
//         console.log(`seconds => ${theAge * 12 * 4 * 7 * 24 * 60 * 60}`);
//     }
// }
//   // Needed Output
//   ageInTime(110); // Age Out Of Range
//   ageInTime(38); // Months Example => 456 Months

//! 5

// function createSelectBox(startYear, endYear) {
//     document.write(`<div>`);
//         document.write(`<select>`);
//     for(startYear; startYear<=endYear;startYear++)
//     {
//         document.write(`<option value="${startYear}"> `);
//         document.write(`${startYear}`);
//         document.write(`</option>`);
//     }
//         document.write(`</select>`);
//     document.write(`</div>`);
// }
// createSelectBox(2000, 2021);

//! 6

// function multiply(...num)
// {
//     let result=1;
//     for(let i=0;i<num.length;i++)
//     {
//         if(typeof num[i]==="number")
//         {
//             result*=Math.trunc(num[i]);
//         }
//     } 
//     console.log(result);
// }

// multiply(10, 20); // 200
// multiply("A", 10, 30); // 300
// multiply(100.5, 10, "B"); // 1000

