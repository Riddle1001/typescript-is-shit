"use strict";
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes \u00A3" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('mario', 'work on the mario website', 250);
var invTwo = new Invoice('luigi', 'work on the luigi website', 300);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invOne.client = "yoshi";
invTwo.amount = 500;
console.log(invOne);
console.log(invTwo);
var form = document.querySelector(".new-item-form");
// inputs
var types = document.querySelector("#type");
var torom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevents the browser from refreshing the page.
    console.log(types.value, torom.value, details.value, amount.value);
});
