// Explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

//age = 'luigi';
age = 30;

isLoggedIn = true;


// Arrays
let ninjas: string[] = [];

ninjas.push('Shaun')


// Union types
let mixed: (string|number|boolean)[] = [];

mixed.push('hello')
mixed.push(20)
mixed.push(false)

console.log(mixed)

let uid: string|number;

uid = '123'
uid = 456


// Object
let ninjaOne: object;
ninjaOne = {name: "Yoshi", age: 30}

let ninjaTwo: {
    name: string,
    age: number,
    beltColour: string
}
