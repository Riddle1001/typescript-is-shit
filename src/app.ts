// const aTag = document.querySelector("a")!; // The ! is saying that 100% sure that the variable will have a value.

// // if (aTag){
// //     console.log(aTag.href);
// // }

// console.log(aTag.href);

// Casts this value to a HTMLFormElement class, meaning that we should now see intelligence in the IDE. (Which wont happen with ! because it doesn't know the type)
const form = document.querySelector(".new-item-form") as HTMLFormElement; 

console.log(form.children);

// inputs

const types = document.querySelector("#type") as HTMLSelectElement;
const torom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
    e.preventDefault(); // Prevents the browser from refreshing the page.

    console.log(types.value, torom.value, details.value, amount.value);
});