//bai29
export interface Movable {
  move(): void;
}

export class Car29 implements Movable {
  move() {
    console.log('Car is moving!!!!!!');
  }
}

export class Robot implements Movable {
  move() {
    console.log('Robot is moving!!!!!!');
  }
}