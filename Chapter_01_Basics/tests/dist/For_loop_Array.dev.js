"use strict";

// let browsers = ["chrome", "firefox", "safari", "edge", "opera"];
// console.log(browsers[browsers.length - 2]);
// for (let i = 0; i < browsers.length; i++) {
//     console.log(browsers[i]);
// }
// let chars = Array.from("hello");
// for (let i = 0; i < chars.length; i++) {
//     console.log(chars[i], i);
// }
//let browsers = ["chrome", "firefox", "safari", "edge", "opera"];
// console.log(browsers[browsers.length - 2]);
// let numbers = new Array(100, 200, 300, 400, 500);
// console.log(numbers[4]);
// let numbers2 = new Array(5);
// console.log(numbers2[4]);
var arr = [1, 2, 3, 4, 5];
console.log(arr);
arr.push(6);
console.log(arr);
arr.pop();
console.log(arr);
arr.push(7);
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift(1);
console.log(arr);
arr.splice(5, 1, 6, 11);
console.log(arr.join(", "));