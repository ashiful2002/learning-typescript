var users;
users = [];
var user1;
user1 = {
    username: "asad",
    id: 12,
};
users.push(user1);
////////////////         object array (optional value) //////////////
var user2;
user2 = {
    username: "ohid vai",
};
users.push(user2);
var user3;
user3 = {
    username: "masud vai",
};
users.push(user3);
for (var key in users) {
    console.log(users[key]["username"]);
}
var myAppUser;
myAppUser = [];
var user23;
user23 = {
    name: "nmumber",
    age: 12,
    isLoggedIn: false,
};
myAppUser.push(user23);
console.log(myAppUser);
