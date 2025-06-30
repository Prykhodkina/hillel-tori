'use strict'

function padString (length, characters) {
    let result = ` `;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }

    return result;
}

const key = padString(8, `0123456789abcdefghijklmnopqrstuvwxyz`);
console.log(`Generated key:`, key);
