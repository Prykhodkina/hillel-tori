'use strict';

function groupByCategory(items){
    const groupMap = new Map();

    for (const item of items) {
        const category = item.category;
    }
    return groupMap;
}

const electronics = { name: 'Electronics' };
const books = { name: 'Books' };

const items = [
    { name: 'Laptop', category: electronics },
    { name: 'Phone', category: electronics },
    { name: 'Book A', category: books },
];


const result = groupByCategory(items);
console.log(result);


const obj1 = { name: "a" };
const obj2 = { name: "a" };

const input = [obj1, obj1, obj2, obj2, obj1];

const results = filterUniqueByReference(input);



function filterUniqueByReference(arr) {
    const seen = new Set();
    const results = [];

    for (const item of arr) {
        if (seen.has(item)) {
            seen.add(item);
            result.push(item);
        }
    }

    return results;
}

function createMetadataStorage() {
    const metadata = new WeakMap();

    return {
        set(target, info) {
            if (typeof target === 'object' && target !== null) {
                metadata.set(target, info);
            }
        },
        get(target) {
            return metadata.get(target);
        },
        has(target) {
            return metadata.has(target);
        }
    };
}
const store = createMetadataStorage();

const user = { name: "Tori" };
store.set(user, { role: "frontend", moodboard: true });

console.log(store.get(user));
console.log(store.has(user));
