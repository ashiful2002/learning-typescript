type userType = { userName: string; id?: number };
let users: userType[];
users = [];

let user1: userType;
user1 = { userName: "ashiful", id: 12 };
users.push(user1);

let user2: userType;
user2 = { userName: "rabbi", id: 341 };
users.push(user2);

let user3: userType;
user3 = { userName: "rafi", id: 33333 };
users.push(user3);

// console.log(users);

// for (const key in users) {
//   console.log(users[key]);
//   //   console.log(users[key]["userName"]);
// }

type requestType = "GET" | "POST";
let getReQuest: requestType;
getReQuest = "POST";
// console.log(getReQuest);

function Reqhandeller(requestType: requestType) {
  console.log(requestType);
}
Reqhandeller("GET");
