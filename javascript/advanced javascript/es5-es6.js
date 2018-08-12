// let + const

const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if(experience > 90) {
	let wizardLevel = true;
	// new scope from outside
}

const obj = {
	player: 'bobby',
	experience: 100,
	wizardLevel: false
}

// destructuring

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

const { player, experience } = obj;
let { wizardLevel } = obj;

// object properties

const name = 'john snow';

const obj {
	[name]: 'hello',
	['ray' + 'smith']: 'hihi'
}

const a = 'Simon';
const b = true;
const c = {};

const obj = {
	a
	b,
	c
}

// Template Strings

// const name = "Sally";
// const age = 34;
// cons










t pet = "horse";

// const greeting = "Hello " + name + " you seem to be doing " + greeting + "!";

const greetingBest = `Hello ${name} you seem to be ${age -10}. What a lovely ${pet} you have.`;


// default arguments

function greet(name='', age =30, pet='cat') {
	return greetingBest = `Hello ${name} you seem to be ${age -10}. What a lovely ${pet} you have.`;
}


// Symbol

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

// arrow functions

function add(a, b) {
	return a + b;
}

const add2 = (a, b) => a + b;
// single returns can be put on one line