let guests:string[]=["Ali","Sajid","Nasir","Ayan"]


let Not_Available:string="Nasir";

let a =guests.splice(2,1,"Zain")


let ab =guests.unshift("Yasir")

let ac=guests.splice(2,0,"Qaim")

let aa=guests.push("Abubakr")

console.log(`Unfortunately only two persons can attend the dinner because the dinner table wont arrive`)

let ad=guests.pop();

console.log(`I am sorry ${ad} that i cant invite invite you at dinner `)

let ae=guests.shift();

console.log(`I am sorry ${ae} that i cant invite invite you at dinner `)

let af =guests.splice(2,1)

console.log(`I am sorry ${af} that i cant invite invite you at dinner `)

let ag=guests.pop();

console.log(`I am sorry ${ag} that i cant invite invite you at dinner `)

let ah=guests.pop()

console.log(`I am sorry ${ah} that i cant invite invite you at dinner `)

console.log(`${guests} are still in the list and can come in the dinner`)

let ai=guests.splice(0,2)

console.log(guests)