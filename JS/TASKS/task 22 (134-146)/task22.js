// ! 1
// let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

// let validIP= /2001:db8(:\d+){6}/g;

// console.log(ip.match(validIP));


// ! 2 
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

let valid=/^Os{\d+}O$/g;

console.log(specialNames.match(valid))
// Output
// ['Os10O', 'OsO', 'Os100O']