'use strict'
//let name = prompt("Please write your name");
//alert("Hello,"+name+"how are you?");
//
// let name = prompt("What's your name?");

//if (name === null || name === "") {
    //console.log("You didn't enter anything!");
//} else {
 //   console.log(`You entered: ${name}`);
//}

//if (confirm("Do you want to say Hello?") === true) {
  //  name = "success!";
// name = confirm ("Your name is John?")
// if (name === true)
// {
//     alert("Hello, John");
// }
// else
// {
//     let user = prompt("What's your name?");
//     alert ("Welcome ${user}!!");
// }
// Ask for the user's name
let name = prompt("What is your name?");

// Ask if they want to see a greeting
let showGreeting = confirm("Do you want to see a greeting?");

// Show greeting if confirmed
if (showGreeting && name) {
    alert("Hello, " + name + "! Welcome to the site.");
}