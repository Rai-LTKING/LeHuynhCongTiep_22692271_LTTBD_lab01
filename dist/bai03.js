"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
//bai 03
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    showInfo() {
        console.log(`Car info - Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    }
}
exports.Car = Car;
