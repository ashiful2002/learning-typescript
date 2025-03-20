class User {
  // properties, method, constructor
  // constructor(parameters) {
  // }
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
console.log(user1, user2);
