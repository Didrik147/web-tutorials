// Generics
//const addUID = (obj: object) => {
//const addUID = <T>(obj: T) => {
//const addUID = <T extends object>(obj: T) => {
const addUID = <T extends {name: string}>(obj: T) => {
  let uid = Math.floor(Math.random()*100);
  return {...obj, uid};
}

let docOne = addUID({name: 'Yoshi', age: 40})
console.log(docOne)

//let docTwo = addUID('hello') // not an object
// console.log(docTwo)

// With interfaces
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

/* const docThree: Resource<string> = {
  uid: 1,
  resourceName: 'person',
  data: 'Didrik'
} */

const docThree: Resource<object> = {
  uid: 1,
  resourceName: 'person',
  data: { name: 'Didrik' }
}

const docFour: Resource<string[]> = {
  uid: 2,
  resourceName: 'shoppingList',
  data:  ['bread', 'milk', 'bananas']
}

console.log(docThree)
console.log(docFour)