// ES8 
// string padding the spaces include the string
// useful for aligning characters for strings if you want specific padding for them
'Turtle'.padStart(10); // "    Turtle"

'Turtle'.padEnd(10); // "Turtle    "

// trailing commas in function's parameter lists and calls 
// useful for when you have long parameter list the syntax is easier to read
const fun = (
			 a,
			 b,
			 c,
			 d,
			 e,
			) => {
	console.log(a);
}

fun(1,2,3,4,)



Object.values
Object.entries
// Object.keys deprecated

let obj = {
	username0: 'Santa',
	username1: 'Rudolph',
	username2: 'Mr.Grinch'
}

// key = username index = value
// Object.keys(obj).forEach((key, index) => {
// 	console.log(key, obj[key]);
// })


// pass in the object and run a forEach loop through the obj returning each value
Object.values(obj).forEach(value => {
	console.log(value);
})
// returns an array forEach key and value // property and value
//can use the forEach, map, reduce, or filter array functions on the array

Object.entries(obj).forEach(value => {
	console.log(value);
})

// real-life scenario received the object information and instead of the username generated you want to have the value plus an id#
Object.entries(obj).map(value => {
	return value[1] + value[0].replace('username', '') ; // value[1] second item in each array && replace username with an empty string concats what is left over
})


// Async Await
