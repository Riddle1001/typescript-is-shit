"use strict";
var Invoice = /** @class */ (function () {
    // You must either set an intial value here, or in the constructor.
    // readonly client: string;
    // private details: string;
    // public amount: number;
    // constructor(c: string, d: string, a: number) {
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }
    function Invoice(client, details, amount // This also assigns them to the instance, i.e automatically does this.amount = amount
    ) {
        this.client = client;
        this.details = details;
        this.amount = amount;
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
invoices.forEach(function (invoice) {
    console.log(invoice.client, invoice.amount, "-", invoice.format());
});
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
