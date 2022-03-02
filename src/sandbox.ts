let greet = () => {
    console.log("hello world");
}

let greet2: Function;

greet2 = () => {
    console.log("hello world2");
}

const add = (n1: number, n2: number, c?: number, b: number = 10) =>{ 
    // the c?: <type> makes it optional.
    // the b: number = 10 makes it have a default value of 10.
    return ""
    console.log(b)
}

const minus = (n1: number, n2: number): number => { // the : after the () maeans it returns a number.
    return n1 - n2
}

// the return type of add is 