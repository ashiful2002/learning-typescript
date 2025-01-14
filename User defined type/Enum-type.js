// enum - store constants; duplicate value is not allowed here
// enum types
// neumeric enum
// string  enum
//  hetergenous enum
// neumeric enum
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 4] = "readData";
    RequestType[RequestType["deleteData"] = 6] = "deleteData";
    RequestType[RequestType["saveData"] = 7] = "saveData";
})(RequestType || (RequestType = {}));
// console.log(RequestType);
// console.log(RequestType.deleteData);
// console.log(RequestType["deleteData"]);
// string enum
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = "reading enum data";
    RequestType2["deleteData"] = "delete enum data";
    RequestType2["saveData"] = "save enum data";
})(RequestType2 || (RequestType2 = {}));
// console.log(RequestType2);
// console.log(RequestType2["deleteData"]);
// console.log(RequestType2.saveData);
// hetergenous enum
var RequestType3;
(function (RequestType3) {
    RequestType3["readData"] = "reading req data3";
    RequestType3["delete_string_Data"] = "delete the string data from file";
    RequestType3[RequestType3["id"] = 121] = "id";
})(RequestType3 || (RequestType3 = {}));
console.log(RequestType3.readData);
console.log(RequestType3.delete_string_Data);
// console.log(RequestType3["id"]);
console.log(RequestType3.id);
