// function variables are only available within the function think of them as local variables

const first = () => {
	const greet = 'Hi';
	const second = () => {
		const name = "bobby";
		alert(greet);
	}
	return second;
}

const newFunc = first();
newFunc();

// Closures - a function ran. the function executed. It's never going to run again.

// BUT it's going to remember that there are references to those variables.
// so the child scope always has access to the parent scope but parent scope do not have access to their children 

// Currying converting function that takes multiple arguments to one that takes one at a time
const multiply = (a, b) => a * b;

const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3)(4);

// can be used to make more extensible functions
const multiplyBy5 = curriedMultiply(5);


// Compose is when put two functions together to make a third fuction where the ouput of one function is the input of the other

// parameters f, g takes a function that returns paramter a that takes a function with f g a

const compose = (f, g) => (a) => f(g(a)); // f & g are functions 

const sum = (num) => num + 1;

compose(sum, sum)(5);

// The most important thing to do as a web dev when writing code
// Avoiding side effects(reading/writing to an external variable or console.logs()) & functional purity
// Think of functions as thier own universe
// Fucntional purity avoid side effects and always return something (Determinstic)
//What are the two elements of a pure function?
1. Deterministic --> always produces the same results given the same inputs
2. No Side Effects -->  It does not depend on any state, or data, change during a program’s execution. It must only depend on its input elements.