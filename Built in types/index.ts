let userId: number;
let firstName: string;
let lastName: string;
let isRegistered: boolean;

(userId = 213),
  (firstName = "ashiful "),
  (lastName = " islam"),
  (isRegistered = true);

console.log(
  `fullName: ${
    firstName + lastName
  }, id: ${userId}, Registered value: ${isRegistered}`
);

const display = () => {
  console.log("this ia a display function");
};

display();
