`use strict`

function getPositiveNum(arr) {
    const positiveArr = [];
    if (arr.length === 0) {
        return `The input array is empty.`;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
        positiveArr.push(arr[i]);
        }
    }
    if (positiveArr.length > 0) {
        return positiveArr;
    }
}
const arr = [1, -2, 3, -4, 5, 6, 7, -8, 9];
const result = getPositiveNum(arr);
console.log(result);