// palindrome string

const str = "race car";

const regularExpression = /[\W_]/g;
const lowerStr = str.toLowerCase().replace(regularExpression, "");
const reverseString = lowerStr.split("").reverse().join("");

let result;
lowerStr === reverseString ? (result = "yes") : (result = "no");

console.log(result);
