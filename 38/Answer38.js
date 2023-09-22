"use strict";
const describe_city = (city, country = "Unknown") => {
    console.log(`${city} is in ${country}.`);
};
describe_city("Karachi", "Pakistan");
describe_city("London");
describe_city("Paris", "France");
