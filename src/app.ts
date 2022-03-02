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

enum ResourceType {
    BOOK, AUTHOR, FILM, DIRECTOR, PERSON
}

interface Resource<T> { // Allows data to have a custom type that can be passed in.
    uid: number;
    resourceName: ResourceType;
    data: T;
}

let docOne: Resource<object> = {
    uid: 1,
    resourceName: ResourceType.BOOK,
    data: {
        title: "The Dark Tower",
    }
}

let docTwo: Resource<object> = {
    uid: 2,
    resourceName: ResourceType.AUTHOR,
    data: {
        title: "Eloquent Javascript",
    }
}

console.log(docOne, docTwo);

