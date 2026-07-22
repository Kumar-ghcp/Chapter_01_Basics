"use strict";

// let a=10;
// console.log(++a + a);
// console.log(a);
var _require = require("node:events"),
    addAbortListener = _require.addAbortListener; // let a=10;
// console.log(++a + a + a++);
// console.log(a);


var a = 10;
var result = ++a + a + a++;
console.log("Print result", result); //console.log("Print a", a);
// let i=1;
// let result = (i++ + ++i);
// console.log(result,i);
// let a=10;
// console.log(++a + ++a);
// console.log(a);
// let a=34;
// let result = a++;
// //console.log(result);
// //console.log(a);
// console.log(result,a);
// let a=100;
// console.log(a++ + ++a + a++ + ++a );
// console.log(a);
// let a=37;
// let result = (--a + a--);
// console.log(result);
// console.log(a);
// let a=5;
// let result = (a-- - --a);
// console.log("Print a", a); 
// console.log("Print result", result);
// let a = 5;
// let result = a++ + ++a + --a + a--;
// console.log(result, a);