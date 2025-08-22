//bai28
export class Animal {
  protected makeSound() {
    console.log('Generic animal sound!!!');
  }
}

export class Dog extends Animal {
  makeSound() {
    console.log('Woof!!!');
  }
}

export class Cat extends Animal {
  makeSound() {
    console.log('Meow!!!!');
  }
}