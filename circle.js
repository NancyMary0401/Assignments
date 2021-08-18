const prompt=require("prompt-sync")({sigint:true});
let radius=prompt('Enter the radius: ');
radius=Number(radius);

// area of the circle 
let area=3.14*radius*radius;
console.log(`The area of the circle is ${area}`);

//circumference of the circle
let circum=2*3.14*radius;
console.log(`The circumference of the circle is ${circum}`);