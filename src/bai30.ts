//bai30
import { Student } from './bai02';
import { Teacher } from './bai27';

export class School {
  students: Student[] = [];
  teachers: Teacher[] = [];

  addStudent(student: Student) {
    this.students.push(student);
  }

  addTeacher(teacher: Teacher) {
    this.teachers.push(teacher);
  }

  displayInfo() {
    console.log('Students:');
    this.students.forEach(s => s.displayAll());
    console.log('Teachers:');
    this.teachers.forEach(t => t.introduce());
  }
}