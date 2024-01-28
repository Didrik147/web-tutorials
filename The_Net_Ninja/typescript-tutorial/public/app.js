const me = {
    name: 'shaun',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    }
};
console.log(me);
let someone;
const greetPerson = (person) => {
    console.log('Hello', person.name);
};
greetPerson(me);
import { Invoice } from './classes/Invoice.js';
const invOne = new Invoice('Mario', 'work on the Mario website', 250);
const invTwo = new Invoice('Luigi', 'work on the Luigi website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form');
//console.log(form.children)
// Inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
