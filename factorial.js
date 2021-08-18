const prompt =require("prompt-sync")({sigint:true})
const number = parseInt(prompt('Enter a positive integer: '));
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}
// if number is 0
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}
// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}