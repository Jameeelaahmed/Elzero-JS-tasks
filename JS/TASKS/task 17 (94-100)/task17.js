// let addClass= document.querySelector(".classes-to-add");
// let removeClass=document.querySelector(".classes-to-remove");

// let curr=document.querySelector(".current");

// addClass.addEventListener('blur',function(){
//     curr.classList.add(addClass.value);
//     let newElement=document.querySelector(".new-elements");
//     newElement.innerHTML=addClass.value;

// })

// removeClass.addEventListener('blur',function(){
//     curr.classList.remove(removeClass.value);
// })


//! 3
// let para=document.getElementsByTagName("p")[0];
// let div=document.querySelector(".our-element");

// let prevDiv=para.cloneNode();
// let nextDiv=para.cloneNode();

// para.remove();

// function addDiv(ele,att){
//     ele.className=att.toLowerCase();
//     ele.title=`${att} ELement`;
//     ele.setAttribute("data-value",att);
//     ele.textContent=att;
// }

// addDiv(prevDiv,"Start");
// addDiv(nextDiv,"End");

// div.before(prevDiv);
// div.after(nextDiv);

// ??????????????????????  4

// let sp=document.getElementsByTagName("span")[0];
// let com=sp.nextSibling;//???????????????????
// let com2=com.nextSibling;
// let com3=com2.nextSibling;
// console.log(com3.nodeValue.trim());

//! 5

[...document.body.children].forEach(
    el=>(el.onclick= _ => console.log(`This is ${el.localName}`))//???????????????????????
);



