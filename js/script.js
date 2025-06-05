'use strict'


let userName = "Tori April";
console.log("Username:", typeof userName);// String - рядкове значення

let age = 32;
console.log("Age:",typeof age);// Number - числове значення

let isVerified = true;
console.log("Is Verified:",typeof isVerified);// Boolean - логічне значення типу правда/неправда

let registrationDate = new Date(2024,4, 14);// рядкове значення перетворене на дату
console.log("Registration Date:",typeof registrationDate);

let cardNumber = 1234567890123456n;
console.log("Card Number:",typeof cardNumber);// Bigint використовуються для зберігання великих числових значень, які занадто великі для Number

let promoCode = null;
console.log("Promo Code:",typeof promoCode);// Null (тут у майбутньому буде внесене значення)

let altName;
console.log("Alternate Name:",typeof altName);// Unidentified відсутнє значення

let bonusPoints = 150;
console.log("Bonus Points:",typeof bonusPoints);// Number - числове значення




console.log(`User name: ${userName}, Age: ${age}, Registration date: ${registrationDate}`);
console.log(`Alt name: ${altName}, Bonus points: ${bonusPoints}`);
console.log(`Promo Code: ${promoCode}`);

console.log(typeof username)
console.log (typeof null);

