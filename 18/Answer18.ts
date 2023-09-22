let places:string[] = ["USA","Switzerland","Canada","Australia","Pakistan"]

console.log(" Original array \n");
console.log(places)

console.log("Alphabetical array\n");
console.log([...places].sort())

console.log("Showing that array is in original order\n")
console.log(places)

console.log("Reverse alphabetical array\n")
console.log([...places].sort().reverse())

console.log("Showing that array is in original order\n")
console.log(places)

console.log("Array in reverse order\n")
console.log([...places].reverse())

console.log("array in original order\n")
places.reverse()
console.log(places)

console.log("Alphabetical array\n");
places.sort()
console.log(places)

console.log("Reverse alphabetical array\n")
places.sort().reverse()
console.log(places)
