`use strict`

const num = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

function calculateAverage(arr) {
    let sum = 0;
    let count = 0;
     for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (typeof item === `number` && !isNaN(item)) {
            sum += item;
            count++;
        }
    }
    if (count === 0) {
        return `No numeric values found`;
    }
    return sum / count;
}
const average = calculateAverage(num);
console.log(`${average}`);

function findMaxAndIndex(arr) {
    if (!arr || arr.length === 0) {
        return {max: undefined, index: undefined};
    }
    const max = Math.max(...num);
    const index = num.indexOf(max);
    return {max: max, index: index};
}
const maxAndIndex = findMaxAndIndex(num);
console.log(`Max element: ${Math.max(...num) }`);
console.log(`Index of maximum number: ${maxAndIndex.index}`);


function minElement(arr) {
    if (!arr === arr.length) {
        return `No numeric values found`;
    }
    let min = Math.min(...num);
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === min) {
            min = arr[i];
            index = i;
        }
    }
    return {min: min, index: index};
}
const minIndex = minElement(num);
console.log(`Min element: ${minIndex.min}`);
console.log(`Index of minimum number: ${minIndex.index}`);

function countNegative(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;
        }
    }
    return count;
}
const negative = countNegative(num);
console.log(`Negative element: ${negative}`);


function oddPositiveElement(arr){
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (item > 0 && item % 2 !== 0) {
            count++;
        }
    }
    return count;
}
const oddPositive = oddPositiveElement(num);
console.log(`Number of odd positive elements: ${oddPositive}`);

function countPositiveElement(arr){
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (item > 0 && item % 2 === 0) {
            count++;
        }
    }
    return count;
}
const positiveElement = countPositiveElement(num);
console.log(`The number of even positive elements: ${positiveElement}`);

function sumPositiveNum(arr){
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 && arr[i] % 2 === 0){
            count += arr[i];
        }
    }
    return count;
}
const sum = sumPositiveNum(num);
console.log(`Sum of even positive elements: ${sumPositiveNum(num)}`);

function sumNegativeNum(arr){
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 && arr[i] % 2 !== 0){
            count += arr[i];
        }
    }
    return count;
}
const sumNegative = sumNegativeNum(num);
console.log(`Sum of even positive elements: ${sumNegativeNum(num)}`);

const product = num.reduce((acc, item) => acc * item);
console.log(`Product: ${product}`);

function somethingElse(arr) {
    if (!arr || arr.length === 0) {
        return {max: undefined};
    }
    const max = Math.max(...arr);
    for (let i = 0; i < arr.length; i++ ) {
        if (arr[i] !== max) {
            arr[i] = 0;
        }
    }
    return arr;
}
console.log(somethingElse(num));