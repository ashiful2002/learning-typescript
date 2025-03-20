////////////////         object array //////////////
type User = { username: string; id?: number };

let users: User[];
users = [];

let user1: User;
user1 = {
  username: "asad",
  id: 12,
};
users.push(user1);
////////////////         object array (optional value) //////////////

let user2: User;
user2 = {
  username: "ohid vai",
};
users.push(user2);
let user3: User;
user3 = {
  username: "masud vai",
};

users.push(user3);

for (const key in users) {
  console.log(users[key]["username"]);
}
// console.log(user5);

// console.log(users);

/////////////////////////        CREATING OWN CUSTOM TYPE    /////////////////

// type RequestType = "GET" | "POST";

// let getRequest: RequestType;

// getRequest = "GET";

// function reqHandeller(params: RequestType) {
//   console.log(params);
// }

// reqHandeller("GET");

type newType = {
  name: string;
  age: number;
  isLoggedIn: boolean;
};
let myAppUser: newType[];
myAppUser = [];
let user23: newType;

user23 = {
  name: "nmumber",
  age: 12,
  isLoggedIn: false,
};

myAppUser.push(user23);

console.log(myAppUser);
