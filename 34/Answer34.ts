const fav_Pizzas: string[] = ["Pepperoni", "Margherita", "Fajita"];

console.log("My favorite pizzas are:");
for (let i = 0; i < fav_Pizzas.length; i++) {
    console.log(fav_Pizzas[i]);
}

console.log("\nMore about my favorite pizzas:");
for (let i = 0; i < fav_Pizzas.length; i++) {
    console.log(`I like ${fav_Pizzas[i]} pizza.`);
}

console.log("\nI really love pizza!");
