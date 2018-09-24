let val;

// Number to string
val = String(5);
val = String(4+4);

val = (5).toString();

// Boolean to String
val = String(true);
val = (true).toString();

// Array to String
val = String([1, 2, 3, 4]);

// String, boolean and others to Number
val = Number('5'); //5
val = Number(true); //1
val = Number(false); //0
val = Number(null); //0
val = Number('hello'); //NaN
val = Number([1,2,3]); //NaN

val = parseInt('100'); //100
val = parseFloat('100.30'); //100.3 (use it if need integers)

// Results

console.log(val);
console.log(typeof val);
