//bai14
export class Employee {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

export class Manager extends Employee {
  manageTeam() {
    console.log(`${this.name} is managing the team!!!!`);
  }
}

export class Developer extends Employee {
  code() {
    console.log(`${this.name} is coding!!!!`);
  }
}