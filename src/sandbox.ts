
// example 1
let greet: (a: string, b: string) => void;
greet = (name: string, greeting: string) => {
    console.log(`${greeting} ${name}`);
};

// example 2
let calc: (a: number, b: number, c: string) => number;

calc = (num1: number, num2: number, action: string) => {
    if (action === 'add') {
        return num1 + num2;
    } else if (action === 'subtract') {
        return num1 - num2;
    }
    return 0;
}



