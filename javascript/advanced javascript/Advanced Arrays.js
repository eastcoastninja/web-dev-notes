//  Advanced Arrays

const array = [1, 2, 10, 16];

const double = [];
// when looping over an array with forEach you must store your output in a new array.
// forEach just loops over something and does whatever the function says
const newArray = array.forEach(num => {
	double.push(num * 2);
})


console.log('forEach', double);
// three most important JavaScript methods used during your day to day work
// map, filter, reduce used when doing loops 

// const mapArray = array.map((num) => {
// 	return num * 2;
// });


// organize code this way when only one parameter is used.
const mapArray = array.map(num => num * 2);
// map loops over each element and returns each invocation to another collection variable mapArray in other words map creates a new array which is the mapArray variable
console.log('map', mapArray);
// the data is never mutated for the variable array


// filter with a conditional

// can be used with strings to filter words based on conditional true or false
const filterArray = array.filter(num => num > 5);

console.log('filter', filterArray);

// reduce

// can do both filtering and mapping with reduce
// accumulator is something that can store the information that happens in the body of the function
const reduceArray = array.reduce((accumulator, num) => {
	return accumulator + num;
}, 0);


console.log('reduce', reduceArray);