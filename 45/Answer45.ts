function Car(Company: string, model: string, ...properties: [string, any][]): any {
    const car: any = {
        Company,
        model,
    };
    for (const [key, value] of properties) {
        car[key] = value;
    }

    return car;
}

const myCar: string = Car("Toyota", "Corolla", ["color", "red"], ["optional Feature", "sunroof"], ["speed", "280 KM/hour"]);
console.log(myCar);