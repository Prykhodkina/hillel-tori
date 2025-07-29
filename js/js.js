'use strict';

function Student(firstName, lastName, birthYear, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = grades;
    this.attendance = new Array(25);
    this.attendanceIndex = 0;
}
Student.prototype.getAge = function () {
    return new Date().getFullYear() - this.birthYear;
};

Student.prototype.getAverageGrade = function () {
    if (this.grades.length === 0) return 0;
    const total = this.grades.reduce((sum, g) => sum + g, 0);
    return total / this.grades.length;
};

Student.prototype.present = function () {
    if (this.attendanceIndex < 25) {
        this.attendance[this.attendanceIndex++] = true;
    } else {
        console.warn("Attendance is full. No more entries allowed.");
    }
};

Student.prototype.absent = function () {
    if (this.attendanceIndex < 25) {
        this.attendance[this.attendanceIndex++] = false;
    } else {
        console.warn("Attendance is full. No more entries allowed.");
    }
};

Student.prototype.summary = function () {
    const avgGrade = this.getAverageGrade();

    const recorded = this.attendance.filter(val => val !== undefined);
    const total = recorded.length;
    const present = recorded.filter(val => val === true).length;

    const attendanceRatio = total > 0 ? present / total : 0;

    if (avgGrade > 90 && attendanceRatio > 0.9) {
        return "Молодець!";
    } else if (avgGrade > 90 || attendanceRatio > 0.9) {
        return "Добре, але можна краще";
    } else {
        return "Редиска!";
    }
};

const student1 = new Student("Anna", "Shevchenko", 2004, [100, 95, 92]);
const student2 = new Student("Bohdan", "Melnyk", 2003, [88, 84, 79]);
const student3 = new Student("Dariia", "Koval", 2002, [60, 58, 65]);

for (let i = 0; i < 23; i++) student1.present();
for (let i = 0; i < 12; i++) student2.present();
for (let i = 0; i < 10; i++) student2.absent();
for (let i = 0; i < 25; i++) student3.absent();


console.log(`${student1.firstName}:`, student1.summary());
console.log(`${student2.firstName}:`, student2.summary());
console.log(`${student3.firstName}:`, student3.summary());

