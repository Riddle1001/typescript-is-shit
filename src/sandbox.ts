type StringOrNumber = string | number;
type objWithName = {name: string, uid: string|number};

const logDetails = (uid: number|string, item: string): void => {
    console.log(`${item} (uid: ${uid})`);
}

const greet = (user: objWithName) => {
    console.log(`Hi, ${user.name} (uid: ${user.uid})`);
}

const greetAgain = (user: objWithName) => {
    console.log(`Hi, ${user.name} (uid: ${user.uid})`);
}