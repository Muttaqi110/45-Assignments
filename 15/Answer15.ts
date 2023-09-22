

let guests: string[] = ["Ali", "Sajid", "Nasir", "Ayan"];

let notAvailable :string= "Nasir";
console.log(`${notAvailable} is not able to attend the dinner.`);

let newGuest:string = "Zain";
let removedGuest = guests.splice(2, 1, newGuest);
console.log(`${notAvailable} is unable to attend the dinner. Instead, ${newGuest} is invited.`);

for (let i = 0; i < guests.length; i++) {
    let guest = guests[i];
    console.log(`Aslam o Alaikum, ${guest}, you are invited at the dinner tomorrow at 8pm.`);
}

export{guests}