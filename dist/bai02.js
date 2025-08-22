"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
//bai 02
const bai01_1 = require("./bai01");
class Student extends bai01_1.Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    displayAll() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}
exports.Student = Student;
