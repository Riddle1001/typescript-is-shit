import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Payment implements HasFormatter {
    constructor(
        readonly recipient: string,
        private details: string, 
        public amount: number // This also assigns them to the instance, i.e automatically does this.amount = amount
    ){

    } 

    format() {
        return `${this.recipient} is owed £${this.amount} for ${this.details}`;
    }
}