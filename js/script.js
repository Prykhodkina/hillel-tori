'use strict'

    // 1. Username (string)
    let username = "Tori April";

    // 2. Age (number)
    let age = 32;

    // 3. Is the user verified? (boolean)
    let isVerified = true;

    // 4. Registration date (string as date)
    let registrationDate = new Date(2023,4,14);

    // 5. User card number (BigInt)
    let cardNumber = 1234567890123456n;

    // 6. Promo code (null or string)
    let promoCode = null;

    // 7. Alternate name (not defined)
    let altName;

    // 8. Number of bonuses per account (number)
    let bonusPoints = 150;

 

console.log(`User name: ${username}, Age: ${age}, Registration date: ${registrationDate}`);
console.log(`Alt name: ${altName}, Bonus points: ${bonusPoints}`);
console.log(`Promo Code: ${promoCode}`);

let now = new Date();
console.log(now);

console.log(typeof username)
console.log (typeof null);

