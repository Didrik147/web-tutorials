/* let greet = () => {
    console.log('Hello world')
} */

let greet: Function;

greet = () => {
    console.log('Hello again')
}

greet()

const add = (a: number, b: number, c: number | string = 7) => {
    console.log(a+b)
    console.log(c)
}

add(5, 10)