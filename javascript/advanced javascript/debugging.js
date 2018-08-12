// Debugging is figuring out why the program is not ating the way it should
// change wording of code to make more sense to you
// read out load what is going on line by line
// instead of console.logs to figure out what is going on you can use the debugger
// the debugger keyword tells the javascript console to stop everything and freeze everything after that keyword


// flattened turns multiple arrays into one
const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
		(a, b) => a.concat(b), []);

const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
	(accumulator, array) => {
		debugger;
		// console.log('array', array);
		// console.log('accumulator', accumulator)
		return accumulator.concat(array)
	}, []);