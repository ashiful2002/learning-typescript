var users;
users = [];
var user1;
user1 = { userName: "ashiful", id: 12 };
users.push(user1);
var user2;
user2 = { userName: "rabbi", id: 341 };
users.push(user2);
var user3;
user3 = { userName: "rafi", id: 33333 };
users.push(user3);
var getReQuest;
getReQuest = "POST";
// console.log(getReQuest);
function Reqhandeller(requestType) {
    console.log(requestType);
}
Reqhandeller("GET");
