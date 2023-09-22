let guests:string[]=["Ali","Sajid","Nasir","Ayan"]
for (let o=0;o<guests.length;o++) {
    console.log(`Congratulations ${guests[o]} I found a bigger table so more guests can come in dinner`)
    
}

let Not_Available:string="Nasir";

let a =guests.splice(2,1,"Zain")


let ab =guests.unshift("Yasir")

let ac=guests.splice(2,0,"Qaim")

let aa=guests.push("Abubakr")

for (let o=0;o<guests.length;o++) {
    console.log(`Hello ${guests[o]}! You are invited for the tommorow dinner at 8pm `)
    
}