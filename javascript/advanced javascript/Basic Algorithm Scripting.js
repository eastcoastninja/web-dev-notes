// const largestOfFour = (arr) => {
	
// 	let largestNumbers = [0,0,0,0];

// 	for(let arrayIndex = 0; arrayIndex < arr.length; arrayIndex++) {
		
// 		for(let subArrayIndex = 0; subArrayIndex < arr[arrayIndex].length; subArrayIndex++) {
// 				if(arr[arrayIndex][subArrayIndex] > largestNumbers[arrayIndex])
// 					largestNumbers[arrayIndex] = arr[arrayIndex][subArrayIndex];
// 			}
// 		}
// 		return largestNumbers;
// }

// Reverse String with loop 

let str = "hello world";

const reverseStrLoop = (str) => {
	let reverse = "";

	for(let i = str.length - 1; i >= 0; i--) {
		reverse += str[i];
	}
	return reverse;
}
reverseStrLoop(str);

// Reverse String with methods

const reverseStr = (str) => {
  return str.split('').reverse().join('');
  /* split() splits the string into an array and returns that array 
  	 reverse() reverses an array in place
  	 join() joins all the elements into a string and returns this string */
}

reverseStr(str);