export class Payment {
    constructor(recipient, details, amount // This also assigns them to the instance, i.e automatically does this.amount = amount
    ) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed £${this.amount} for ${this.details}`;
    }
}
