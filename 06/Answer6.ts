
const nameWithWhitespaces:string = "\t \t \n \n Ali \n \n   ";

console.log("name with white spaces",nameWithWhitespaces);

const strippedName:string = nameWithWhitespaces.trim();
console.log("\nName after stripping whitespaces:");
console.log(strippedName);