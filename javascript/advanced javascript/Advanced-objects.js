// reference type
// objects point to a reference of something unlike primitives which store a value which is why objects are usually different unless point to the same reference

// context vs scope
// context tells us where we are within the object
// 'this' refers to what object environment is it inside of
// think of what is to the left of the '.' window.alert() === this.alert()
// need to create new object in order for 'this' to refer to a different object env. other than the window
const object4 = {
	a: function a() {
		console.log(this);
	}
}


// ES6
// instantiation - when you make a copy of an object and reuse the code
// making instances or multiple copies of an object
// anytime you want to access a property be sure to use this.propertyName
// very similar to the way classes and objects are made in java
class Player {
	constructor(name, type) {
		console.log('player', this);
		this.name = name;
		this.type = type;
	}
	introduce() {
		console.log(`Hi I am ${this.name}, I'm ${this.type}`)
	}

}

// extends you want to add on top to the existing class
class Wizard extends Player {
	constructor(name, type) {
		super(name, type);
		console.log('wizard', this);
	}
	play() {
		console.log(`WEEEE I'm a ${this.type}`);
	}
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shaun', 'Dark Magic');
