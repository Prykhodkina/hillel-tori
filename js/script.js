`use strict`

function findValuesByKey(obj, targetKey) {
const result = [];
function search(curr) {
    if (typeof curr !== `object` || curr === null) return;
    for (let key in curr) {
        if (key === targetKey) {
            result.push(curr[key]);
        }
        if (typeof curr[key] === `object` && curr[key] !== null) {
            search(curr[key]);
        }
    }

}
search(obj);
return result;
}
const data = {
    id: 1,
    name: "root",
    meta: {
        id: 2,
        parent: {
            id: 3,
            name: "leaf",
        },
    },
    array: [
        { id: 4 },
        { name: "node", children: [{ id: 5 }] },
    ],
};
const result = findValuesByKey(data, `id`);
console.log(result);

