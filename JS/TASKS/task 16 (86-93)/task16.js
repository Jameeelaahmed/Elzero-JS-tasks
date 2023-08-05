//! using for loop to the example in vid --> 92
// for(let i=0;i<=10;i++)
// {
//     let myMainElement = document.createElement("div");
//     let myMainTitle = document.createElement("h1");
//     let myMainDescription = document.createElement("p");
    
//     let myTitle = document.createTextNode("product title" + ' '+(i+1));
//     let myDesc = document.createTextNode("Product Description" + ' ' + (i+1));
    
//     //* HEADING 
//     //add heading text 
//     myMainTitle.appendChild(myTitle);
//     // add heading to main element 
//     myMainElement.appendChild(myMainTitle);
    
//     //*DESCRIPTION 
//     //add description 
//     myMainDescription.appendChild(myDesc);
//     //add description to main element 
//     myMainElement.appendChild(myMainDescription);
    
    
//     myMainElement.className=("product");
//     document.body.appendChild(myMainElement);
// }
//????????????
// document.links[0].onmouseenter=function(event)
// {
//     console.log(event);
// };

//? vid 93 ??????????
// let userInput = document.querySelector("[name='username']");
// let ageInput = document.querySelector("[name='age']");

// document.forms[0].onsubmit =function(e){
//     let userValid=false;
//     let ageValid=false;

// console.log(userInput.value);
// console.log(ageInput);

// if(userInput.value !=="" && userInput.value.length <=10)
// {
//     console.log("valid");
// }



//     if(userValid===false || ageValid===false)
//     {
//         e.preventDefault();
//     }
// }

//!  1

// let one=document.querySelector("#elzero");
// console.log(one);
// let two=document.querySelector(".element");
// console.log(two);
// let three=document.querySelector("[name='js']");
// console.log(three);
// let four= document.querySelector("div");
// console.log(four);

// let five=document.querySelectorAll("#elzero")[0];
// console.log(five);
// let six=document.querySelectorAll(".element")[0];
// console.log(six);
// let seven=document.querySelectorAll("[name='js']")[0];
// console.log(seven);
// let eight= document.querySelectorAll("div")[0];
// console.log(eight);

// let nine=document.getElementById("elzero");
// console.log(nine);
// let ten=document.getElementsByClassName("element")[0];
// console.log(ten);
// let eleven=document.getElementsByTagName("div")[0];
// console.log(eleven)
// let twelve=document.getElementsByName("js")[0];
// console.log(twelve);

// let thirteen=document.body.firstElementChild;
// console.log(thirteen);

//???????????? why doctype and comment appear in console
// let fourteen=document.body.childNodes[3];
// console.log(fourteen);

// let fifteen=document.body.children[0];
// console.log(fifteen);

//! 2

// let img=document.images;

// for(let i=0;i<img.length;i++)
// {
//     img[i].src="https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//     img[i].alt="Elzero Logo";
//     img[i].style="background-color:#e6e6ff ; padding:30px; margin:10px"
// }

//! 3

// let input = document.querySelector("input");
// let result= document.querySelector("div");

// input.oninput=function(){
//     result.innerHTML=`${input.value} USD Dollar = ${((input.value * 15.6).toFixed(2))} Egyptian Pound`;
// }
// input.style="width:50%; padding:12px 20px; margin: 8px 0 ;box-sizing:border-box";

//! 4

// let one=document.querySelector(".one");
// let two=document.querySelector(".two");

// one.title=one.className;
// two.title=two.className;

// let ch1 = one.innerHTML;
// let ch2 = two.innerHTML;

// num=ch1.length;

// one.innerHTML=ch2;
// two.innerHTML=ch1 +" "+--num;
// console.log(one);
// console.log(two);

//! 5

// let img = document.querySelectorAll("img");

// for(let i=0; i<img.length;i++)
// {
//     if(img[i].hasAttribute("alt"))
//     {
//         img[i].alt="old";
//     }
//     else
//     {
//         img[i].alt="Elzero New";
//     }
// }