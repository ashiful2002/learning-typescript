let user1: { name: string; id: number };

user1 = {
  name: "askdosflk ASDFKN",
  id: 12,
};
// console.log(user1);

let user2: object;

user2 = {
  name: "ashiful islam",
  id: 12,
  isregistered: false,
};
// console.log(user2);

let user3: object[];

user3 = [
  {
    name: "rashedul islam",
    age: 21,
    isregistered: false,
  },
  {
    name: "nasim mahmud",
    age: 43,
    isregistered: true,
  },
  {
    name: "amit hasan",
    age: 12,
    isregistered: true,
  },
];

// console.log(user3[2]);

////////////////         object array //////////////

let users: object[];
users = [];
let user4: { username: string; id: number };
user4 = {
  username: "asad",
  id: 12,
};
users.push(user4);
////////////////         object array (optional value) //////////////

let user5: { username: string; id?: number };
user5 = {
  username: "ohid vai",
};
for (const key in users) {
    console.log(users[key]["username"]);
    
}
// console.log(user5);
users.push(user5);
console.log(users);
