//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s 
// name, print a message to them. The text of each message should be the same, but each message 
// should be personalized with the person’s name.

let names1:string[]=["Ali","Ahmed","Faizan","Qaim"]

for (let i=0 ; i<names1.length; i++) {
    console.log(`Hello, ${names1[i]} ,I hope that you are fine`);
}
