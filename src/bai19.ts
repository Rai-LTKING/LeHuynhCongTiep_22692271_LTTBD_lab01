//Bai19
export class Animal19 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log(`${this.name} makes a generic sound.`);
  }
}

export class Dog19 extends Animal19 {
  makeSound(): void {
    console.log(`${this.name} barks: Woof!`);
  }
}

export class Cat19 extends Animal19 {
  makeSound(): void {
    console.log(`${this.name} meows: Meow!`);
  }
}