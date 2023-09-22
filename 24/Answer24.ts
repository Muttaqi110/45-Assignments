// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators 

// • Test whether an item is in a array

// • Test whether an item is not in a array

// todo • Tests for equality and inequality with strings
let string1:String="Hello world!";
let string2:string="Hi";

console.log(string1 === string2);//false
console.log(string1 !== string2);//true

//todo • Tests using the lower case function
let name1:string = "ALI";
let name2:string = "ali";

console.log(name1.toLowerCase() == name2);//true

//todo • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let number1:number=10;
let number2:number=7;

console.log(number1 === number2);//false
console.log(number1 !== number2);//true
console.log(number1 > number2);//true
console.log(number1 < number2);//false
console.log(number1 >= number2);//false
console.log(number1 <= number2);//true


//todo • Tests using "and" and "or" operators 

let num1:number=6;
let num2:number=7;
let num3:number=8;

console.log(num1 == num2 && num1 != num2);//False because one statement is true and other one is false
console.log(num1 != num2 && num1 < num3);//True because both statements are true
console.log(num1 == num3 || num1 > num2);//False because both statements are false
console.log(num2 == num3 || num1 <= num2);//True


//todo • Test whether an item is in a array

let names:string[] = ["Ali","Usama","Sajid","Aleeha"]
console.log(names.includes("Qaim"));
console.log(names.includes("Sajid"));

// todo Test whether an item is not in an array
let colors: string[] = ['red', 'green', 'blue', 'yellow'];

console.log(!colors.includes('purple')); // true
console.log(!colors.includes('green')); // false