"use strict";
const nameWithWhitespaces = "\t \t \n \n Ali \n \n   ";
console.log("name with white spaces", nameWithWhitespaces);
const strippedName = nameWithWhitespaces.trim();
console.log("\nName after stripping whitespaces:");
console.log(strippedName);
