var lastName = "Johnson";
var age = 30;
var isBlackBelt = false;
// lastName = 20; // cannot change because the initial value is a string.
// age = "test" // same thing here.
// age = 40; // works.
// isBlackBelt = 'yes' // fails.
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(7.5));
