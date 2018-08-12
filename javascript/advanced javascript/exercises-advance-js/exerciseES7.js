// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons.includes('John'); // false

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

let filtered = dragons.filter(str => str.includes('John'));
 
console.log(filtered);

// #3) Create a function that calulates the power of 100 of a number entered as a parameter

const powerOf100 = (x => x**100);
console.log(powerOf100(1));

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result

console.log(powerOf100(10000));

//Infinity is displayed when a number exceeds the upper limit of the floating point numbers, which is 1.797693134862315E+308.