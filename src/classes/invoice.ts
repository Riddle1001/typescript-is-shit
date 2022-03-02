import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Invoice implements HasFormatter {
    constructor(
        readonly client: string,
        private details: string, 
        public amount: number // This also assigns them to the instance, i.e automatically does this.amount = amount
    ){

    } 

    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}