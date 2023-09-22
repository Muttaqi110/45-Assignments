"use strict";
function Car(Company, model, ...properties) {
    const car = {
        Company,
        model,
    };
    for (const [key, value] of properties) {
        car[key] = value;
    }
    return car;
}
const myCar = Car("Toyota", "Corolla", ["color", "red"], ["optional Feature", "sunroof"], ["speed", "280 KM/hour"]);
console.log(myCar);
