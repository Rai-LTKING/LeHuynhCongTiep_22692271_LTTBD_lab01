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
const bai11_1 = require("./bai11");
const bai12_1 = require("./bai12");
const bai13_1 = require("./bai13");
const bai14_1 = require("./bai14");
const bai15_1 = require("./bai15");
const bai16_1 = require("./bai16");
const bai17_1 = require("./bai17");
const bai18_1 = require("./bai18");
const bai19_1 = require("./bai19");
const bai20_1 = require("./bai20");
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
class Dog1 {
    constructor(name) {
        this.name = "Dog";
        this.name = name;
    }
    sound() {
        console.log(`${this.name} says: Woof woof `);
    }
}
const dog = new Dog1("Rex");
dog.sound;
//bai10
console.log('Bài 10:');
const accountMain = new bai10_1.Account('Ahihi', 1200);
console.log('ID:', accountMain.id);
console.log('Created At:', accountMain.createdAt);
//bai11
console.log('Bài 11:');
const doga = new bai11_1.Dog('ALAA');
doga.bark();
const cata = new bai11_1.Cat('ORANGE');
cata.meow();
//bai12
console.log('Bài 12:');
const bird = new bai12_1.Bird();
bird.fly();
const fish = new bai12_1.Fish();
fish.swim();
//bai13
console.log('Bài 13:');
const square = new bai13_1.Square(5);
console.log(`Area of Square: ${square.area()}`);
const circle = new bai13_1.Circle(3);
console.log(`Area of Circle: ${circle.area()}`);
//bai14
console.log('Bài 14:');
const manager = new bai14_1.Manager('TEPPP');
manager.manageTeam();
const developer = new bai14_1.Developer('TIEP');
developer.code();
//bai15
console.log('Bài 15:');
const library = new bai15_1.Library();
const bookADD = new bai06_1.Book('ABC', 'TIEP', 2020);
library.addBook(bookADD);
console.log('Books in Library:', library.books);
//bai16
console.log('Bài 16:');
const box = new bai16_1.Box('Hello World BOx');
console.log('Box contains:', box.value);
//bai17
console.log('Bài 17:');
const logger = bai17_1.Logger.getInstance();
logger.log('This is a log message!!!.');
//bai18
console.log('Bài 18:');
console.log('Addition:', bai18_1.MathUtil.add(10, 3));
console.log('Subtraction:', bai18_1.MathUtil.subtract(10, 3));
console.log('Multiplication:', bai18_1.MathUtil.multiply(10, 3));
console.log('Division:', bai18_1.MathUtil.divide(10, 3));
//bai19
console.log('Bài 19:');
const animals = [new bai19_1.Dog19('AAAAAAAAAAAA'), new bai19_1.Cat19('CCCCC')];
animals.forEach(animal => {
    animal.makeSound();
});
//bai20
console.log('Bài 20:');
const car20 = new bai20_1.Car20();
car20.start();
const bike = new bai20_1.Bike();
bike.start();
