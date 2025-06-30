`use strict`

function padString(str, targetLength, padChar, padLeft) {
     if (typeof str !== `string`) {
        return `Error: The first argument must be a string`;
    }
    if (typeof targetLength !== `number` || !Number.isInteger(targetLength)) {
        return `Error: The second argument must be an integer number`;
    }
    if (typeof padChar !== `string` || padChar.length !== 1) {
        return `Error: The third argument must be a single character string`;
    }
    if (padLeft === undefined) {
        padLeft = false;
    }
    if (typeof padLeft !== `boolean`) {
        return `Error: The fourth argument must be true or false (boolean)`;
    }
    if (str.length >= targetLength) {
        return str;
    }
    let howManyToAdd = targetLength - str.length;
    let padding = ``;
    for (let i = 0; i < howManyToAdd; i++) {
        padding += padChar;
    }
    if (padLeft) {
        return padding + str;
    } else {
        return str + padding;
    }
}


console.log(padString(`hi`, 5, `*`));
console.log(padString(`cat`, 6, `-`, true));
console.log(padString(`hello`, 3, `_`));
console.log(padString(123, 6, `*`));

