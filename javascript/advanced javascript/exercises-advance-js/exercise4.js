//Solve these problems:

//#1 Create a one line function that adds adds two parameters

const add = (a, b) => a + b;

//Closure: What does the last line return?
const addTo = x => y => x + y
const addToTen = addTo(10)
addToTen(3)

// 13

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)

// 31

const addToThousand = curriedSum(1000);

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)

// 17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1; // f
const add5 = (num) => num + 5; // g
compose(add1, add5)(10) // (f, g)(a) // 16

// f(16=(1+15(=5+10)))



//What are the two elements of a pure function?
Determinstic always produces the same value dependent on the input
Avoid side affects does not depend on outside interfere from other variables only depends on what is inside the function