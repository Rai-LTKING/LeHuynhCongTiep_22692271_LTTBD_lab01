import { Person } from "./bai01";
import { Student } from "./bai02";
import { Car } from "./bai03";
import { Rectangle } from "./bai04";
import { BankAccount } from "./bai05";
import { Book } from "./bai06";
import { User } from "./bai07";
import { Product } from "./bai08";
import { Animal } from "./bai09";
import { Account } from "./bai10";

//bai 01
console.log('Bài 01:');
const person = new Person('Tiep', 21);
person.display();

//bai 02
console.log('Bài 02:');
const student = new Student('Tiep', 21, 'B');
student.displayAll();

//bai 03
console.log('Bài 03:');
const car = new Car('Mercedes', 'Benz', 2024);
car.showInfo();

//bai 04
console.log('Bài 04:');
const rectangle = new Rectangle(20, 10);
console.log(`Area: ${rectangle.calculateArea()}`);
console.log(`Perimeter: ${rectangle.calculatePerimeter()}`);

//bai 05
console.log('Bài 05:');
const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(200);
console.log(`Current Balance: ${account.balance}`);

//bai 06
console.log('Bài 06:');
const book = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
console.log(`Title: ${book.title}`);
console.log(`Author: ${book.author}`);
console.log(`Year: ${book.year}`);

//bai 07
console.log('Bài 07:');
const user = new User('Tiep');
console.log(`Name: ${user.name}`);
user.name = 'Tiep peiT';
console.log(`Updated Name: ${user.name}`);

//bai 08
console.log('Bài 08:');
const products: Product[] = [
  new Product("Pen", 20),
  new Product("Notebook", 120),
  new Product("Bag", 250),
  new Product("Pencil", 15),
  new Product("Shoes", 300),
];
const expensiveProducts = products.filter(p => p.getPrice() > 100);
console.log("Products with price > 100:");
expensiveProducts.forEach(p => p.displayInfo());


//bai 09
console.log('Bài 09:');
class Dog implements Animal {
  name: string = "Dog";

  constructor(name: string) {
    this.name = name;
  }

  sound(): void {
    console.log(`${this.name} says: Woof woof `);
  }
}
const dog = new Dog("Rex");
dog.sound();

//bai10
console.log('Bài 10:');
const accountMain = new Account('Ahihi', 1200);
console.log('ID:', accountMain.id);
console.log('Created At:', accountMain.createdAt);