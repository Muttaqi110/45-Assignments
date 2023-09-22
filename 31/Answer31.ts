let User :string[]= ["Ali","Kamran","Anas","Sajid","Sajjad","Admin"]

let greet =() => {
for (let i = 0 ; i<User.length ; i++) {
    if (User.length == 0) {
        console.log("We need to find some users!");
        return
    }
    else if (User[i] == "Admin" ) {
        console.log("Hello Admin would you like to see a report")
        
    }
    else {
        console.log(`Hello ${User[i]}`)
        
    }
}}

greet()

User=[]
greet()