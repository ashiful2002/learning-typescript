// super class
abstract class User {
    userName: string;
    age: number;
    constructor(userName: string, age: number) {
      this.userName = userName;
      this.age = age;
    }
   abstract display(): void 
  }
  
  // sub
  class studens extends User {
    studentId: number;
    constructor(userName: string, age: number, studentId: number) {
      super(userName, age);
      this.studentId = studentId;
    }
    display(): void {
      console.log(
        `userNamne: ${this.userName}, age: ${this.age} idHobe : ${this.studentId}`
      );
    }
  }
  
