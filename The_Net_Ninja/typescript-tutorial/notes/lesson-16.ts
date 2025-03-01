import { Invoice } from './classes/Invoice.js'
import { Payment } from './classes/Payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js'

/* let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('Yoshi', 'web work', 250);
docTwo = new Payment('Mario', 'plumbing work', 200);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log(docs)


const invOne = new Invoice('Mario', 'work on the Mario website', 250);
const invTwo = new Invoice('Luigi', 'work on the Luigi website', 300);

let invoices: Invoice[] = [];
invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format())
}) */


//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;

//console.log(form.children)

// Inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;

    if (type.value === 'invoice'){
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
    }else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
    }

    /* console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    ) */

    console.log(doc)
})