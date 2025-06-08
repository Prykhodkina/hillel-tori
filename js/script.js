'use strict'

const user = {
    name: 'Tori April',
    age: 32,
    isOnline: true,
    friends: ['Myra', 'Svitlana', 'Tom'],
    settings: {
        theme: 'dark',
        notifications: true,
    }
}

let firstFriendName = user.friends[0];
let notificationEnabled = user.settings.notifications;

console.log('User name', user.name);
console.log('Friends', user.friends.length);
console.log('Theme', user.settings.theme);
console.log('First friend`s name', firstFriendName);
console.log('Notification enabled', notificationEnabled);