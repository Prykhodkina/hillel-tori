`use strict`

function removeElement(arr, item) {
    const index = arr.indexOf(item);
    if (index !== -1) {
        arr.splice(index, 1);
    }
    return  arr;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
removeElement(arr, 3);
console.log(arr);