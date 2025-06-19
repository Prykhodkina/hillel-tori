'use strict'

let line = ``;
for (let i = 10; i <= 20; i++) {
    line += i !== 20 ? i + `, ` : i;
}
console.log(`Numbers from 10 to 20:`, line);

for (let i = 10; i <= 20; i++) {
    console.log(i + `squared is` + (i * i));
}

for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum += i;
}
console.log(`Sum from 1 to 15 is:`, sum);

let product = 1;
for (let i = 15; i <= 35; i++) {
    product *= i;
}
console.log(`Product from 15 to 35 is:`, product);

let total = 0;
for (let i = 1; i <= 500; i++) {
    total += i;
}
let mean = total / 500;
console.log(`Average from 1 to 500 is:`, mean);

let evenSum = 0;
for (let i = 30; i <= 80; i++) {
    evenSum += i % 2 === 0 ? i : 0;
}
console.log(`Sum of even numbers from 30 to 80:`, evenSum);

for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

let number = Number(prompt(`Enter a number:`));
console.log(`Divisors of`, number + `:`);
for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        console.log(i);
    }
}

let evenDivisors = 0;
for (let i = 1; i <= number; i++) {
    if (number % i === 0 && i % 2 === 0) {
        evenDivisors++;
    }
}
console.log(`Number of even divisors:`, evenDivisors);

let sumEvenDivisors = 0;
for (let i = 1; i <= number; i++) {
    if (number % i === 0 && i % 2 === 0) {
        sumEvenDivisors += i;
    }
}
console.log(`Sum of even divisors:`, sumEvenDivisors);

for (let i = 1; i <= 10; i++) {
    console.log(`--- Table for ${i} ---`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

