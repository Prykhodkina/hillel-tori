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

function getUsersData(userIds) {
    const promises = userIds.map(id => fetchUserData(id));

    return Promise.allSettled(promises).then(results => {
        const success = results
            .filter(r => r.status === "fulfilled")
            .map(r => r.value);

        const errors = results
            .filter(r => r.status === "rejected")
            .map(r => r.reason);

        return {success, errors};
    });
}
const userIds = [1, 2, 3, 4, 5];
getUsersData(userIds).then((result) => {
    console.log("Успішні:", result.success);
    console.log("Помилки:", result.errors);
});
