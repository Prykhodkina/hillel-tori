`use strict`

function customShift(arr) {
    if (arr.length === 0) return undefined;

    const first = arr[0];

    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }

    arr.length = arr.length - 1;

    return first;
}

let a = [10, 20, 30];
console.log(customShift(a));
console.log(a);


function customReverse(arr) {
    const len = arr.length;

    for (let i = 0; i < Math.floor(len / 2); i++) {
        let temp = arr[i];
        arr[i] = arr[len - 1 - i];
        arr[len - 1 - i] = temp;
    }

    return arr;
}

let b = [1, 2, 3, 4, 5];
console.log(customReverse(b));
console.log(b);
