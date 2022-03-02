// arrays
let names = ["Josh", "John", "Jane"];

names.push("Tony"); // works
// names.push(3); // doesnt work
// names[0] = "5"; // doesnt work


let numbers = [10, 20, 30, 40];

numbers.push(25); // works
// numbers.push("25"); // doesnt work
// numbers[0] = "25"; // doesnt work

let mixed = ["Ken", 4, "John", 5, true];
mixed.push("Jane"); // works
mixed.push(false); // works
mixed[0] = "Jane"; // works
mixed[1] = false; // works


// objects

let ninja = {
    name: "John",
    belt: "black",
    age: 30
};

ninja.age = 40; // works
ninja.name = "Jane"; // works
// ninja.age = "40"; // doesnt work

// ninja.skills = ["html", "css", "javascript"]; // doesnt work.

/*
    Summary:
        You cannot change the types of elements inside the array unless you have atleast that type in the array once.
        You cannot change the type of an object property from it's initial value type.
        You cannot add a property to an object if it wasn't in the initial object.

        If you redine ninja, it must have the same structure as the original ninja.

*/