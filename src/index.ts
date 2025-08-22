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
import { Cat, Dog } from "./bai11";
import { Bird, Fish } from "./bai12";
import { Square, Circle } from "./bai13";
import { Manager, Developer } from "./bai14";
import { Library } from "./bai15";
import { Box } from "./bai16";
import { Logger } from "./bai17";
import { MathUtil } from "./bai18";
import { Animal19,Dog19, Cat19 } from "./bai19";
import { Vehicle, Car20, Bike } from "./bai20";
import { Repository } from "./bai21";
import { Stack } from "./bai22";
import { Payment, CardPayment, CashPayment } from "./bai23";
import { AirConditioner, Fan } from "./bai24";
import { Shape } from "./bai25";
import { Order } from "./bai26";
import { Teacher } from "./bai27";
import { Car29, Robot } from "./bai29";
import { School } from "./bai30";

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
class Dog1 implements Animal {
  name: string = "Dog";

  constructor(name: string) {
    this.name = name;
  }

  sound(): void {
    console.log(`${this.name} says: Woof woof `);
  }
}
const dog = new Dog1("Rex");
dog.sound;

//bai10
console.log('Bài 10:');
const accountMain = new Account('Ahihi', 1200);
console.log('ID:', accountMain.id);
console.log('Created At:', accountMain.createdAt);

//bai11
console.log('Bài 11:');
const doga = new Dog('ALAA');
doga.bark();
const cata = new Cat('ORANGE');
cata.meow();

//bai12
console.log('Bài 12:');
const bird = new Bird();
bird.fly();
const fish = new Fish();
fish.swim();

//bai13
console.log('Bài 13:');
const square = new Square(5);
console.log(`Area of Square: ${square.area()}`);
const circle = new Circle(3);
console.log(`Area of Circle: ${circle.area()}`);

//bai14
console.log('Bài 14:');
const manager = new Manager('TEPPP');
manager.manageTeam();
const developer = new Developer('TIEP');
developer.code();

//bai15
console.log('Bài 15:');
const library = new Library();
const bookADD = new Book('ABC', 'TIEP', 2020);
library.addBook(bookADD);
console.log('Books in Library:', library.books);

//bai16
console.log('Bài 16:');
const box = new Box<string>('Hello World BOx');
console.log('Box contains:', box.value);

//bai17
console.log('Bài 17:');
const logger = Logger.getInstance();
logger.log('This is a log message!!!.');

//bai18
console.log('Bài 18:');
console.log('Addition:', MathUtil.add(10, 3));
console.log('Subtraction:', MathUtil.subtract(10, 3));
console.log('Multiplication:', MathUtil.multiply(10, 3));
console.log('Division:', MathUtil.divide(10, 3));

//bai19
console.log('Bài 19:');
const animals: Animal19[] = [new Dog19('AAAAAAAAAAAA'), new Cat19('CCCCC')];
animals.forEach(animal => {
    animal.makeSound();
});

//bai20
console.log('Bài 20:');
const car20 = new Car20();
car20.start();
const bike = new Bike();
bike.start();

//bai21
console.log('Bài 21:');
const repoo = new Repository<string>();
repoo.add('ITEM A');
console.log('All Items:', repoo.getAll());

//bai22
console.log('Bài 22:');
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
console.log('Peek:', stack.peek());
console.log('Pop:', stack.pop());
console.log('Is Empty:', stack.isEmpty());

//bai23
console.log('Bài 23:');
const cashPayment = new CashPayment();
cashPayment.pay(300);
const cardPayment = new CardPayment();
cardPayment.pay(500);

//bai24
console.log('Bài 24:');
const fan = new Fan();
fan.turnOn();
const airConditioner = new AirConditioner();
airConditioner.turnOn();

//bai25
console.log('Bài 25:');
Shape.describe();

//bai26
console.log('Bài 26:');
const order = new Order();
order.addProduct(new Product('Product A', 500));
order.addProduct(new Product('Prodduct B', 1000));
console.log('Total:', order.calculateTotal());

//bai27
console.log('Bài 27:');
const teacher = new Teacher('Tep', 30, 'Mathematics');
teacher.introduce();

//bai28
console.log('Bài 28:');
const dog28 = new Dog19("Dog");
dog28.makeSound();
const cat28 = new Cat19("Cat");
cat28.makeSound();

//bai29
console.log('Bài 29:');
const car29 = new Car29();
car29.move();
const robot = new Robot();
robot.move();

//bai30
console.log('Bài 30:');
const sh = new School();
const studentA = new Student('TEPPY', 21, 'A');
const teacherB = new Teacher('Teacher TIEP', 35, 'math');
sh.addStudent(studentA);
sh.addTeacher(teacherB);
sh.displayInfo();