let password: number | string;

password = "123";
password = 123;

// type  :number|string

const displayIserInfo = (userId: number | string) => {
  console.log(userId);
};

displayIserInfo(2133);
displayIserInfo("string password243");
