//bai24
export abstract class Appliance {
  abstract turnOn(): void;
}

export class Fan extends Appliance {
  turnOn() {
    console.log('Fan turned on');
  }
}

export class AirConditioner extends Appliance {
  turnOn() {
    console.log('Air Conditioner turned on');
  }
}