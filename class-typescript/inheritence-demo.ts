// super class
class User {
  userName: string;
  age: number;
  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }
  display(): void {
    console.log(`userNamne: ${this.userName}, age: ${this.age}`);
  }
}

let user1 = new User("ashiful islam", 23);
let user2 = new User("Nasim mahmud khan", 21);
// console.log(user1, user2);

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

let student1 = new studens("amit hasan antor", 21, 223344);
let student2 = new studens("nasim mahmud", 32, 111111);

console.log(student2);
