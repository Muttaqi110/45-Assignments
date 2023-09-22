"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
let lowercase = "sYed Muhammad muttaqi Zaidi";
console.log(lowercase.toLowerCase());
let uppercase = "sYed Muhammad muttaqi Zaidi";
console.log(uppercase.toUpperCase());
let titleCase = "sYed Muhammad muttaqi Zaidi"
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
console.log(`Hello ${titleCase}, would you like to learn some Python today?`);
