const prompt = require('prompt-sync')();
let n= prompt("Enter Number");
n= Number(n);
if(isNaN(n)){
    console.log("Enter a Valid Number ");
}
else if(n>=0){
    console.log("Positive ");
}
else{
    console.log("Negative");
}
