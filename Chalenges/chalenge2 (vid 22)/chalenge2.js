//! ---------1---------
let a=10;
let b="20";
let c=80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
//console.log(+b);
//11 + 


// ? 1
//! [++a] [+] [+][b++] [+] [+][c++] [-] [+][a++]
//* [11] [+op]  [20] [+op]  [80] [-op]  [11]      VALUE
//expected result ?100؟

//? 2
//! [++a] [+] [-][b] [+] [+][c++] [-] [-][a++] [+] [+][a]
//* [13] [+OP] [-21] [+OP] [81]  [-op] [-13]  [+OP] [14]
//expected result ?100؟ 


//? 3
//! [--c] [+] [+][b] [+] [--a] [*] [+][b++] [-] [+][b] [*] [a]    [+] [--a] [-] [+][true]
//* [81] [+op] [21] [+op] [13] [*op]  [21]  [-op] [22] [*op][13] [+op] [12] [-op] [1]
81+21+273-273+12-1
//expected result ?100؟ 

//!--------- 2 ---------

let d= "-100";
let e= "20";
let f=30;
let g=true;

console.log();
console.log();