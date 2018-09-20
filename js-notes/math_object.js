const num1 = 20;
const num2 = 5;

let val;

// Math math_object

val = Math.PI; // returns 3.141592653589793

val = Math.round(3.5); // returns 4 (rounds up)

val = Math.ceil(2.3); // returns 3 (rounds up)
val = Math.floor(2.7); // returns 2 (rounds down)

val = Math.sqrt(64); // returns 8

val = Math.min(2, 5, -12, 1, 44); // returns -12 - the minimal value
val = Math.max(2, 5, -12, 1, 44); // returns 44 - the minimal value

val = Math.random(); // generate a random number with decimals
val = Math.random() * 20; // generate a random number between 0 and 20 with decimals

val = Math.floor(Math.random() * 20); // generate a random whole number between 0 and 19

val = Math.floor(Math.random() * 20  + 1); // generate a random whole number between 0 and 20 



console.log(val);
