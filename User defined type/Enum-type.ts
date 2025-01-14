// enum - store constants; duplicate value is not allowed here

// enum types

// neumeric enum
// string  enum
//  hetergenous enum

// neumeric enum
enum RequestType {
  readData = 4,
  deleteData = 6,
  saveData,
}

// console.log(RequestType);
// console.log(RequestType.deleteData);
// console.log(RequestType["deleteData"]);

// string enum

enum RequestType2 {
  readData = "reading enum data",
  deleteData = "delete enum data",
  saveData = "save enum data",
}

// console.log(RequestType2);
// console.log(RequestType2["deleteData"]);
// console.log(RequestType2.saveData);

// hetergenous enum
enum RequestType3 {
  readData = "reading req data3",
  delete_string_Data = "delete the string data from file",
  id = 121,
}
console.log(RequestType3.readData);
console.log(RequestType3.delete_string_Data);
// console.log(RequestType3["id"]);
console.log(RequestType3.id);
