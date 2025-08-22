"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat19 = exports.Dog19 = exports.Animal19 = void 0;
//Bai19
class Animal19 {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log(`${this.name} makes a generic sound.`);
    }
}
exports.Animal19 = Animal19;
class Dog19 extends Animal19 {
    makeSound() {
        console.log(`${this.name} barks: Woof!`);
    }
}
exports.Dog19 = Dog19;
class Cat19 extends Animal19 {
    makeSound() {
        console.log(`${this.name} meows: Meow!`);
    }
}
exports.Cat19 = Cat19;
