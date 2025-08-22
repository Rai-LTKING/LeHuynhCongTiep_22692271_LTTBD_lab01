//bai 03
export class Car {
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    showInfo() {
        console.log(`Car info - Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    }
}