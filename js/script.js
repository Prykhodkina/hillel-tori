`use strict;`


function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                resolve({ id: userId, name: `User ${userId}` });
            } else {
                reject(new Error(`Failed to fetch user ${userId}`));
            }
        }, 300);
    });
}

async function getUsersData(userIds) {
    const promises = userIds.map(id => fetchUserData(id));
    const results = await Promise.allSettled(promises);

    const success = results
        .filter(r => r.status === "fulfilled")
        .map(r => r.value);

    const errors = results
        .filter(r => r.status === "rejected")
        .map(r => r.reason);

        return {success, errors};

}

(async() => {
    const {success, errors} = await getUsersData([1, 2, 3, 4, 5]);
    console.log("Успішні:", success);
    console.log("Помилки:", errors);
})();
