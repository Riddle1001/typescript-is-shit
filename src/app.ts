import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { ListTemplate } from './classes/listTemplate.js';


const form = document.querySelector(".new-item-form") as HTMLFormElement; 

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector("ul") as HTMLUListElement;

const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
    e.preventDefault(); // Prevents the browser from refreshing the page.

    let doc: HasFormatter;

    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }

    list.render(doc, type.value, "end");
});


// <T> captures the type.
// <T extends object> captures the type and makes sure it is an object.

const addUID = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
}

let docOne = addUID({ name: "yoshi", age: 40 });

console.log(docOne.name)

interface Resource {
    uid: number;
    resourceName: string;
    data: "???"
}