// function addnumber(num1: number, num2: number) {
//   console.log(num1 + num2);
// }
var addnumber = function (num1, num2) {
    setTimeout(function () {
        console.log(num1 + num2);
    }, 2000);
};
console.log("calculateing .... ");
addnumber(20, 10);
addnumber(34, 675);
addnumber(34, 43);
