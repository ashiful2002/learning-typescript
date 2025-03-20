var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("userNamne: ".concat(this.userName, ", age: ").concat(this.age));
    };
    return User;
}());
var user1 = new User("ashiful islam", 23);
var user2 = new User("Nasim mahmud khan", 21);
console.log(user1, user2);
