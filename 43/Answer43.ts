const magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller", "Derren Brown"];

function make_great(magicianNames: string[]): string[] {
    const modifiedMagicians: string[] = [];

    for (let i = 0; i < magicianNames.length; i++) {
        modifiedMagicians.push(magicianNames[i] + " the Great");
    }

    return modifiedMagicians;
}

function show_magicians(magicianNames: string[]): void {
    for (let i = 0; i < magicianNames.length; i++) {
        console.log(magicianNames[i]);
    }
}

const originalMagicians: string[] = [...magicians];

const greatMagicians: string[] = make_great(originalMagicians);

console.log("Original Magicians:");
show_magicians(originalMagicians);

console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
