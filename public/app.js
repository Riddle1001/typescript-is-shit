"use strict";
// const aTag = document.querySelector("a")!; // The ! is saying that 100% sure that the variable will have a value.
// // if (aTag){
// //     console.log(aTag.href);
// // }
// console.log(aTag.href);
// Casts this value to a HTMLFormElement class, meaning that we should now see intelligence in the IDE. (Which wont happen with ! because it doesn't know the type)
var form = document.querySelector(".new-item-form");
console.log(form.children);
// inputs
var types = document.querySelector("#type");
var torom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevents the browser from refreshing the page.
    console.log(types.value, torom.value, details.value, amount.value);
});
