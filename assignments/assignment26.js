var readlineSync = require("readline-sync");

let str = readlineSync.question("Enter a string : ");

try {
  strRev = str.split("").reverse().join("");
  let type = typeof str;
  console.log(`Reversed string is : ${strRev}
Type of ${str} is : ${type}`);
} catch (error) {
  console.log(error.message);
  console.log("Type of", str, "is :", typeof str);
}
