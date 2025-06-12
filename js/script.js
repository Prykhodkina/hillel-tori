'use strict'

const user = {
    name: prompt("Enter your name"),
    age: Number(prompt("Enter your age")),
    userId: 98745623398533n,
    settings: {
        theme: prompt("Choose a theme: 'dark' or 'light'"),
        autoLogin: false,
    },
    nickname: undefined,
    lastLogin: null,
};

let wantsNotification = confirm("Do you want to receive notifications?");
let favoriteTech = ["HTML", "CSS", "JavaScript"];

const session = {
    user: user,
    wantsNotification: wantsNotification,
    favoriteTech: favoriteTech,
};

alert(`Hello, ${user.name}! Your ID is: ${user.userId}`);

console.log("Wants notifications:", wantsNotification);
console.log("Favorite technologies:", favoriteTech);

console.log("User:", user);

console.log("name:", typeof user.name);
console.log("age:", typeof user.age);
console.log("userId:", typeof user.userId);
console.log("settings:", typeof user.settings);
console.log("settings.theme:", typeof user.settings.theme);
console.log("settings.autoLogin:", typeof user.settings.autoLogin);
console.log("nickname:", typeof user.nickname);
console.log("lastLogin:", typeof user.lastLogin);
console.log("wantsNotification:", typeof wantsNotification);
console.log("favoriteTech:", typeof favoriteTech);