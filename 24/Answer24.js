"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators 
// • Test whether an item is in a array
// • Test whether an item is not in a array
let string1 = "Hello world!";
let string2 = "Hi";
console.log(string1 === string2); //false
console.log(string1 !== string2); //true
let name1 = "ALI";
let name2 = "ali";
console.log(name1.toLowerCase() == name2); //true
let number1 = 10;
let number2 = 7;
console.log(number1 === number2); //false
console.log(number1 !== number2); //true
console.log(number1 > number2); //true
console.log(number1 < number2); //false
console.log(number1 >= number2); //false
console.log(number1 <= number2); //true
let num1 = 6;
let num2 = 7;
let num3 = 8;
console.log(num1 == num2 && num1 != num2); //False because one statement is true and other one is false
console.log(num1 != num2 && num1 < num3); //True because both statements are true
console.log(num1 == num3 || num1 > num2); //False because both statements are false
console.log(num2 == num3 || num1 <= num2); //True
let names = ["Ali", "Usama", "Sajid", "Aleeha"];
console.log(names.includes("Qaim"));
console.log(names.includes("Sajid"));
