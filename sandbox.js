// there should be very few things you use any for.
var age = 25;
age = '25'; // works
age = true; // works
age = null; // works
age = undefined; // works
age = {}; // works
age = []; // works
age = function () { }; // works
age = 25; // works
age = 25.25; // works
console.log(age);
var mixed = [1, '2', true, null, undefined, {}, [], function () { }, 25, 25.25];
// all work
mixed.push('string');
mixed.push(function () { });
mixed.push(null);
mixed.push(undefined);
console.log(mixed);
var ninja;
ninja = {
    name: 'Yoshi',
    age: 25
};
console.log(ninja);
ninja = {
    name: 'Yoshi',
    age: 25
};
