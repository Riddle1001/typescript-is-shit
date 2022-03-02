import { Invoice } from './classes/invoice.js';

const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((invoice) => {
    console.log(invoice.client, invoice.amount, "-", invoice.format());
});



const form = document.querySelector(".new-item-form") as HTMLFormElement; 

// inputs

const types = document.querySelector("#type") as HTMLSelectElement;
const torom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
    e.preventDefault(); // Prevents the browser from refreshing the page.

    console.log(types.value, torom.value, details.value, amount.value);
});