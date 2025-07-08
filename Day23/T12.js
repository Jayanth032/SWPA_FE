const prompt = require('prompt-sync')();
let day = prompt("Enter day: ").toLowerCase();
switch (day) {
    case "saturday":
    case "sunday":
        console.log("Weekend");
        break;
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
        console.log("Weekday");
        break;
    default:
        console.log("Invalid day input");
}