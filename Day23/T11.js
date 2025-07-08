const prompt = require('prompt-sync')();
let weather = prompt("Enter weather (sunny/rainy/cold): ").toLowerCase();
if (weather === "sunny") {
    console.log("Wear a t-shirt.");
} else if (weather === "rainy") {
    console.log("Wear a raincoat.");
} else if (weather === "cold") {
    console.log("Wear a jacket.");
} else {
    console.log("Unknown weather type.");
}
