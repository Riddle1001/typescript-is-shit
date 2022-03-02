let lastName = "Johnson";
let age = 30;
let isBlackBelt = false;

// lastName = 20; // cannot change because the initial value is a string.
// age = "test" // same thing here.

// age = 40; // works.

// isBlackBelt = 'yes' // fails.

const circ = (diameter: number) => {
    return diameter * Math.PI;
}


console.log(circ(7.5))