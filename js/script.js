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
const arr = [1, 2, 3, -1, -2, -3];
const result = getPositiveNum(arr);
console.log(result);


