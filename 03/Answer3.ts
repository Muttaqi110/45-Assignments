// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let lowercase: string = "sYed Muhammad muttaqi Zaidi";

console.log(lowercase.toLowerCase());

let uppercase: string = "sYed Muhammad muttaqi Zaidi";

console.log(uppercase.toUpperCase());

let titleCase:string ="sYed Muhammad muttaqi Zaidi"
  .split(" ")
  .map((word:string) => word[0].toUpperCase() + word.slice(1).toLowerCase())
  .join(" ");
   
console.log(`${titleCase}`);
export{};