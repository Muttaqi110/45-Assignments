"use strict";
function makeSandwich(...items) {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
        console.log(`- ${item}`);
    }
    console.log("Enjoy your sandwich!\n");
}
makeSandwich("Cheese", "Lettuce", "Tomato", "Mayo");
makeSandwich("Beef", "Swiss Cheese", "Mustard");
makeSandwich("Ketchup", "Chicken Patty");
