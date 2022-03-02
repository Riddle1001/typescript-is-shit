export class Invoice {
    constructor(client, details, amount // This also assigns them to the instance, i.e automatically does this.amount = amount
    ) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
