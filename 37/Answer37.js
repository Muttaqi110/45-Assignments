"use strict";
const make_shirt = (size = "Large", message = "I love TypeScript") => {
    console.log(`Size: ${size}, Message: ${message}`);
};
make_shirt();
make_shirt("Medium");
make_shirt("Small", "TypeScript is awesome!");
