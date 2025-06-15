'use strict'

let birthYear = prompt(`What year were you born?`);
let city = prompt(`What city do you live in?`);
let sport = prompt(`What is your favorite sport?`);

let currentYear = new Date().getFullYear();
let age = currentYear - Number(birthYear);
let ageMessage = `Your age: ${age}`;
if (birthYear === null) {
    ageMessage =`It's a pity that you did not want to enter your date of birth.`;
}

let cityMessage;
if (city === `Kyiv`) {
    cityMessage = `You live in the capital of Ukraine.`;
} else if (city === `Washington`) {
    cityMessage = `You live in the capital of the USA.`;
} else if (city === `London`) {
    cityMessage = `You live in the capital of the UK.`;
} else if (city === null) {
    cityMessage = `It's a pity that you did not want to enter your city.`;
} else {
    cityMessage = `You live in the city of ${city}.`;
}

let sportMessage;
if (sport === `football`) {
    sportMessage = `Cool! Do you want to become Lionel Messi?`;
} else if (sport === `tennis`) {
    sportMessage = `Cool! Do you want to become Serena Williams?`;
} else if (sport === `boxing`) {
    sportMessage = `Cool! Do you want to become Oleksandr Usyk?`;
} else if (sport === null) {
    sportMessage =`It's a pity that you did not want to enter your sport.`;
} else {
    sportMessage = `Your favorite sport is ${sport}.`;
}

alert(`${ageMessage} \n ${cityMessage} \n ${sportMessage}`);


