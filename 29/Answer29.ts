// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent 
// if statements that check for certain fruits in your array.

// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array.
//  If the fruit is in your array, the if block should print a statement, such as
//   You really like bananas!

let favorite_fruits:string[]=["Mangoes","Grapes","Apples"]

if (favorite_fruits.includes("Mangoes")) {
    console.log("I really like Mangoes")
}

if (favorite_fruits.includes("Orange")) {
    console.log("Oranges are very juicy")
}

if (favorite_fruits.includes("Grapes")) {
    console.log("It is the one of your favirouite fruit")
}

if (favorite_fruits.includes("Peach")) {
    console.log("Peaches are good for health")
}

if (favorite_fruits.includes("Apples")) {
    console.log("Apple a day keeps the doctor away")
}