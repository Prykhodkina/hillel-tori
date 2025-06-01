'use strict'

let name = prompt("What is your name?");


let showGreeting = confirm("Do you want to see a greeting?");

if (showGreeting && name) {
    alert("Hello, " + name + "! Welcome to the site!");
}