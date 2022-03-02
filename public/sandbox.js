"use strict";
var greet = function () {
    console.log("hello world");
};
var greet2;
greet2 = function () {
    console.log("hello world2");
};
var add = function (n1, n2, c, b) {
    if (b === void 0) { b = 10; }
    // the c?: <type> makes it optional.
    // the b: number = 10 makes it have a default value of 10.
    return "";
    console.log(b);
};
var minus = function (n1, n2) {
    return n1 - n2;
};
// the return type of add is 
