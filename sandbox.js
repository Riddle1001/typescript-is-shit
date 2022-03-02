// explicit types
var character;
var age;
var isLoggedIn;
// age = '30'; // doesn't work
age = 30; // works
isLoggedIn = true; // works
// arrays
var ninjas; // now this can only be an array of strings.
// ninjas = [10, 20] // doesn't work
ninjas = ['shaun', 'ryu', 'chun-li']; // works
// Also quick note, if you don't assign the array it's value when initializing it, then it will be undefined, meaning methods like .push() won't work.
// union types
var mixed = []; // Now this array is allowed to have strings and numbers inside of it.
mixed.push('hello'); // works
mixed.push(10); // works
// mixed.push(true); // doesn't work
console.log(mixed);
var uid; // this is a union type, meaning it can be either a string or a number.
uid = '123'; // works
uid = 123; // works
// uid = true; // doesn't work
// objects
var ninjaOne;
ninjaOne = { name: 'shaun', age: 30 }; // works
// ninjaOne = "test"; // doesn't work
ninjaOne = []; // works because an array is a kind of object.
var ninjaTwo;
// ninjaTwo = {} // doesn't work because it's missing the properties.
ninjaTwo = {
    name: 'shaun',
    age: 30,
    beltColor: 'black'
}; // works
