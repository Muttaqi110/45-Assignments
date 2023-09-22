const magicians: string[] = ["Criss Angel", "Harry Houdini", "David Blaine"];

function make_great(magicianNames: string[]): void {
    for (let i = 0; i < magicianNames.length; i++) {
        magicianNames[i] = magicianNames[i] + " the Great";
    }
}

function show_magicians(magicianNames: string[]): void {
    for (let i = 0; i < magicianNames.length; i++) {
        console.log(magicianNames[i]);
    }
}

make_great(magicians);

show_magicians(magicians);
