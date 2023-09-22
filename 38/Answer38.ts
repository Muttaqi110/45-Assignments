const  describe_city =(city: string, country: string = "Unknown"): void=> {
    console.log(`${city} is in ${country}.`);
}

describe_city("Karachi", "Pakistan");
describe_city("London"); 
describe_city("Ohio", "USA");
