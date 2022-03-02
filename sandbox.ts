// there should be very few things you use any for.

let age: any = 25;

age = '25'; // works
age = true // works
age = null // works
age = undefined // works
age = {}; // works
age = []; // works
age = () => {}; // works
age = 25; // works
age = 25.25; // works

console.log(age);

let mixed: any[] = [1, '2', true, null, undefined, {}, [], () => {}, 25, 25.25];
// all work
mixed.push('string');
mixed.push(() => {});
mixed.push(null);
mixed.push(undefined); 

console.log(mixed);

let ninja: {name: any, age: any};
ninja = {
    name: 'Yoshi',
    age: 25
};
console.log(ninja);
ninja = {
    name: 'Yoshi',
    age: 25,
}