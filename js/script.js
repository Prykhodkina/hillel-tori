'use strict'

function greetUser(name){
    return `Hello, ${name}!`;
}
let userName = prompt(`Enter your name`);
let message = greetUser(userName);
console.log(message)
