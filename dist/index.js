"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai01_1 = require("./bai01");
const bai02_1 = require("./bai02");
const bai03_1 = require("./bai03");
const bai04_1 = require("./bai04");
const bai05_1 = require("./bai05");
const bai06_1 = require("./bai06");
const bai07_1 = require("./bai07");
const bai08_1 = require("./bai08");
const bai10_1 = require("./bai10");
//bai 01
console.log('Bài 01:');
const person = new bai01_1.Person('Tiep', 21);
person.display();
//bai 02
console.log('Bài 02:');
const student = new bai02_1.Student('Tiep', 21, 'B');
student.displayAll();
//bai 03
console.log('Bài 03:');
const car = new bai03_1.Car('Mercedes', 'Benz', 2024);
car.showInfo();
//bai 04
console.log('Bài 04:');
const rectangle = new bai04_1.Rectangle(20, 10);
console.log(`Area: ${rectangle.calculateArea()}`);
console.log(`Perimeter: ${rectangle.calculatePerimeter()}`);
//bai 05
console.log('Bài 05:');
const account = new bai05_1.BankAccount(1000);
account.deposit(500);
account.withdraw(200);
console.log(`Current Balance: ${account.balance}`);
//bai 06
console.log('Bài 06:');
const book = new bai06_1.Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
console.log(`Title: ${book.title}`);
console.log(`Author: ${book.author}`);
console.log(`Year: ${book.year}`);
//bai 07
console.log('Bài 07:');
const user = new bai07_1.User('Tiep');
console.log(`Name: ${user.name}`);
user.name = 'Tiep peiT';
console.log(`Updated Name: ${user.name}`);
//bai 08
console.log('Bài 08:');
const products = [
    new bai08_1.Product("Pen", 20),
    new bai08_1.Product("Notebook", 120),
    new bai08_1.Product("Bag", 250),
    new bai08_1.Product("Pencil", 15),
    new bai08_1.Product("Shoes", 300),
];
const expensiveProducts = products.filter(p => p.getPrice() > 100);
console.log("Products with price > 100:");
expensiveProducts.forEach(p => p.displayInfo());
//bai 09
console.log('Bài 09:');
class Dog {
    constructor(name) {
        this.name = "Dog";
        this.name = name;
    }
    sound() {
        console.log(`${this.name} says: Woof woof `);
    }
}
const dog = new Dog("Rex");
dog.sound();
//bai10
console.log('Bài 10:');
const accountMain = new bai10_1.Account('Ahihi', 1200);
console.log('ID:', accountMain.id);
console.log('Created At:', accountMain.createdAt);
