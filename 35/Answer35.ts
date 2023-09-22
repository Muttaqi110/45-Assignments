const animals: string[] = ["Dog", "Cat", "Rabbit"];


console.log("Animals:");
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

console.log("\nMore about these animals:");
for (let i = 0; i < animals.length; i++) {
    if(animals[i]=='Dog') {
        console.log("Dog is a very loyal pet")
    } else if (animals[i] == "Cat") {
        console.log("Cats are very cute")
    } else if (animals[i]=="Rabbit") {
        console.log("Rabbits are very fluffy")
    }
}

console.log("\nAny of these animals would make a great pet!");
