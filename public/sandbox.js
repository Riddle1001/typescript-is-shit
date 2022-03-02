"use strict";
// example 1
var greet;
greet = function (name, greeting) {
    console.log(greeting + " " + name);
};
// example 2
var calc;
calc = function (num1, num2, action) {
    if (action === 'add') {
        return num1 + num2;
    }
    else if (action === 'subtract') {
        return num1 - num2;
    }
    return 0;
};
