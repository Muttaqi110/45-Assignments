"use strict";
const magicians = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller", "Derren Brown"];
function make_great(magicianNames) {
    const modifiedMagicians = [];
    for (let i = 0; i < magicianNames.length; i++) {
        modifiedMagicians.push(magicianNames[i] + " the Great");
    }
    return modifiedMagicians;
}
function show_magicians(magicianNames) {
    for (let i = 0; i < magicianNames.length; i++) {
        console.log(magicianNames[i]);
    }
}
const originalMagicians = [...magicians];
const greatMagicians = make_great(originalMagicians);
console.log("Original Magicians:");
show_magicians(originalMagicians);
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
