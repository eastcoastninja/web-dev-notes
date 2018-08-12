let array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

let compareNums = (a, b)  => a - b;
// let remove = (array, element) => {
// 	return array.filter(e => e === element);
// }
// remove(array, array[0]+1);
const answer = array.sort(compareNums)//.map(nums => nums);
answer
[[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]


let result = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20].sort((a, b) =>  {
  let result = Number(a) - Number(b)
  if (!result && typeof(a) == "string") return 1
	return result
})
console.log(result)