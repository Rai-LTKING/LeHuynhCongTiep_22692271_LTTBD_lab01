//bai20
export interface Vehicle {
  start(): void;
  stop(): void;
}

export class Car20 implements Vehicle {
  start() {
    console.log('Car starting!!!');
  }

  stop() {
    console.log('Car stopping!!!');
  }
}

export class Bike implements Vehicle {
  start() {
    console.log('Bike starting!!!');
  }

  stop() {
    console.log('Bike stopping!!!');
  }
}