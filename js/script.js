'use strict'

let userName = prompt("What is your name?");
let age = Number(prompt("How old are you?"));
let consent = confirm("Do you agree to participate?");
let status = consent ? "Agree" : "Not agree";

let userId = 12345678901234567890n;

let bonusCode = null;

// Second name (undefined)
let secondName;


alert(`Hello, ${userName}! Your age ${age}! Your status - ${status}`);

console.log("User Name:", userName, typeof userName);
console.log("Age:", age, typeof age);
console.log("Consent Given:", consent, typeof consent);
console.log("User ID:", userId, typeof userId);
console.log("Bonus Code:", bonusCode, typeof bonusCode);
console.log("Second Name:", secondName, typeof secondName);

