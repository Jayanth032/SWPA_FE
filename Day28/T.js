const prompt = require('prompt-sync')();
const a = (f) => ((f - 32) * 5) / 9;             
const b = (c) => (c * 9) / 5 + 32;                
const c = (c) => c + 273.15;                     
const d = (k) => k - 273.15;                      
const r = (n) => Math.round(n * 100) / 100;       // Round
console.log("\n Temperature Converter");
console.log("1. C → F");
console.log("2. F → C");
console.log("3. C → K");
console.log("4. K → C");
let ch = prompt("Choose (1-4): ");
switch (ch) {
  case "1":
    let c1 = parseFloat(prompt("Enter °C: "));
    console.log(`${c1}°C = ${r(b(c1))}°F`);
    break;
  case "2":
    let f1 = parseFloat(prompt("Enter °F: "));
    console.log(`${f1}°F = ${r(a(f1))}°C`);
    break;
  case "3":
    let c2 = parseFloat(prompt("Enter °C: "));
    console.log(`${c2}°C = ${r(c(c2))}K`);
    break;
  case "4":
    let k1 = parseFloat(prompt("Enter K: "));
    console.log(`${k1}K = ${r(d(k1))}°C`);
    break;
  default:
    console.log("Invalid choice.");
}
