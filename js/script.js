'use strict'

let str = ``;
for (let i = 20; i <= 30; i=i+0.5){
    str += i + ` `;
}
console.log(str);

const dollars = 27;
for (let i = 10; i <= 100; i += 10){
    const inUAH = i * dollars;
    console.log(`${dollars} USD = ${inUAH} UAH`);
}

const N = 200;
for (let i = 1; i <= 100; i++)
if (i *i <= N){
    console.log(i)
}

const num = 32;
let primeNum = true;
if (num <= 1){
    primeNum = false;
} else {
    for (let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            primeNum = false;
            break;
        }
    }
}
if (primeNum){
    console.log(`${num} - is a prime`);
} else {
    console.log(`${num} - is not a prime number`);
}
const num2 = 3;
let isPowerOfThree = false;
if (num2 >= 1) {
    let power = 1;
    while (power < num2) {
        power *= 3;
    }
    if (power === num2) {
        isPowerOfThree = true;
    }
}
if (isPowerOfThree) {
    console.log(`${num2} — can be obtained as 3^n`);
} else {
    console.log(`${num2} — cannot be obtained as 3^n`);
}
