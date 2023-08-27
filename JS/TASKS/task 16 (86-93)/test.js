

// let myElement= document.createElement("div");
// let myText= document.createTextNode("my-product");
// myElement.appendChild(myText);

// //*create attribute method one
// let myAttribute = document.createAttribute("data-custom");
// // myElement.setAttributeNode(myAttribute) 

// //*create attribute method two
// myElement.setAttribute("alt","jam") 


// // myElement.appendChild(myAttribute);
// console.log(myElement);

// document.body.appendChild(myElement);

let myElement = document.createElement("div");
let myText = document.createTextNode("my-product");
myElement.appendChild(myText);

//* create attribute method one
let myAttribute = document.createAttribute("data-custom");
myAttribute.value = "attribute-value";
myElement.setAttributeNode(myAttribute);

//* create attribute method two
myElement.setAttribute("alt", "jam");

console.log(myElement);

document.body.appendChild(myElement);