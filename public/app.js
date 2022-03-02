// The object must match the structure of the interface. It cannot have a missing property, or it cannot have a property that isn't defined in the interface.
const me = {
    name: "shaun",
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        return amount;
    }
};
let someone; // this enforces the strcuture when we assign it.
const greetPerson = (person) => {
    console.log("hello, " + person.name);
};
// greetPerson({name: "test"}) // doesnt work because it doesn't match the structure of the interface. (it's missing age, speak, spend).
import { Invoice } from './classes/invoice.js';
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((invoice) => {
    console.log(invoice.client, invoice.amount, "-", invoice.format());
});
const form = document.querySelector(".new-item-form");
// inputs
const types = document.querySelector("#type");
const torom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevents the browser from refreshing the page.
    console.log(types.value, torom.value, details.value, amount.value);
});
