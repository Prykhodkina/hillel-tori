`use strict`

function calculateNumAverage (arr) {
    let sum = 0;
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        if
        (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            sum += arr[i];
            total ++;
        }

    }
    if (total === 0){
        return `No numeric value found`;
    }
return sum / total;
}

const mixArr = [52, `a`, `b`, NaN, true, null, 1, 2, 37];
const result = calculateNumAverage(mixArr);
console.log(result);


function doMath(x, znak, y) {
    x = Number(x);
    y = Number(y);

    if (isNaN(x) || isNaN(y)) {
        console.log(`Error: x and y must be valid number`);
        return;
    }

    let resultF;
    switch (znak) {
        case `+`:
            resultF = x + y;
            break;
        case `-`:
            resultF = x - y;
            break;
        case `*`:
            resultF = x * y;
            break;
        case `/`:
            if (y === 0) {
                console.log(`Error: Division by zero`);
                return;
            }
            resultF = x / y;
            break;
        case `%`:
            resultF = x % y;
            break;
        case `^`:
            resultF = x ** y;
            break;
        default:
            console.log(`Error: Unsupported operator`);
            return;
    }

    console.log(`Result: ${resultF}`);
}
const x = prompt(`Enter a number`);
const znak = prompt(`Enter the operation sign (+, -, *, /, %, ^):`);
const y = prompt(`Enter the second number:`);

doMath(x, znak, y);

function fill2DArr() {
    const mainLength = parseInt(prompt(`Enter number of rows:`));
    if (isNaN(mainLength) || mainLength <= 0) {
        console.log(`Error: Invalid number of rows.`);
        return;
    }
const rows = [];
for (let i = 0; i < mainLength; i++) {
    const innerLength = parseInt(prompt(`Enter number of elements in row ${i + 1}:`));
    if (isNaN(innerLength) || innerLength <= 0) {
        console.log(`Error: Invalid number of elements.`);
        return;
    }
    const innerArr = [];
    for (let i = 0; i < innerLength; i++) {
        const value = prompt(`Enter number of columns:`);
        innerArr.push(value);
    }
    rows.push(innerArr);
}

console.log(`result:`);
console.log(rows);
}
fill2DArr();

function removeSymbol(str, symbolRe) {
    const removeOne = new Set(symbolRe);
    let upshot = ``;

    for (let symbol of str) {
        if (!removeOne.has(symbol)) {
            upshot += symbol;
        }
    }
    return upshot;
}
const inputString = prompt(`Enter a string:`);
const symbolInput = prompt(`Enter symbol to remove (as one string, e.g., 'l,o')`);

const symbolRe = symbolInput.split(``);
const upshot = removeSymbol (inputString, symbolRe);

console.log(`Result:`, upshot);
