// let user1: { userName: string; userID: number };
// user1 = { userName: "abir", userID: 123 };
// console.log(user1);
// let users: object[];
// users = [
//   { name: "msi", id: 123 },
//   { name: "value top", id: 223 },
//   { name: "dahua", id: 333 },
// ];
// console.log(users);
var users;
users = [
//   { name: "ashiful islam", id: 12 },
//   { name: "ariful islam", id: 22 },
];
var user1;
user1 = { userName: "ashiful", id: 12 };
users.push(user1);
var user2;
user2 = { userName: "rabbi", id: 341 };
users.push(user2);
// console.log(users);
for (var key in users) {
    console.log(users[key]);
    console.log(users[key]["userName"]);
}
