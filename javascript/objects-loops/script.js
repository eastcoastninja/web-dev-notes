// function sayHello() {
// 	console.log("Hello");
// }

// sayHello();

// //  anonymous function // function expression
// var sayBye = function() {
// 	console.log("Bye");
// } 

// sayBye();



// function sing(song) {
// 	console.log(song);
// }

// sing("laaa dee daaa");
// sing("hello");

// function multiply(a, b) {
// 	if(a > 10 || b > 10) {
// 		return "that's to hard";
// 	} else {
// 		return a * b;
// 	}
// }

// alert(multiply(5, 10));


//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.

// function checkDriverAge() {
// 	var age = prompt("What is your age?");

// 	if (Number(age) < 18) {
// 		return("Sorry, you are too young to drive this car. Powering off");
// 	} else if (Number(age) > 18) {
// 		return("Powering On. Enjoy the ride!");
// 	} else if (Number(age) === 18) {
// 		return("Congratulations on your first year of driving. Enjoy the ride!");
// 	}
// }

//2. Create another function that does the same thing, assign it to checkDriverAge2 variable using Function Expression.

// var checkDriverAge2 = function () {
// 	var age = prompt("What is your age?");

// 	if (Number(age) < 18) {
// 		alert("Sorry, you are too young to drive this car. Powering off");
// 	} else if (Number(age) > 18) {
// 		alert("Powering On. Enjoy the ride!");
// 	} else if (Number(age) === 18) {
// 		alert("Congratulations on your first year of driving. Enjoy the ride!");
// 	}
// }


// //BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
// // checkDriverAge(92);
// // it returns "Powering On. Enjoy the ride!" 
// function checkDriverAge(age) {
// 	if (Number(age) < 18) {
// 		return "Sorry, you are too yound to drive this car. Powering off";
// 	} else if (Number(age) > 18) {
// 		return "Powering On. Enjoy the ride!";
// 	} else if (Number(age) === 18) {
// 		return "Congratulations on your first year of driving. Enjoy the ride!";
// 	}
// }

// var list = ["tiger", "cat", "bear", "bird"];
// // console.log(list[1]);


// var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// // object 
// var user = {
// 	name: "John",
// 	age: 34,
// 	hobby: "Soccer",
// 	isMarried: false,
// 	spells: ["abrakadra", "shazam", "boo"],
// 	shout: function () {
// 		console.log("AHHHHH!");
// 	}
// };

// var listOfObjects = [
// 	{
// 		username: "andy",
// 		password: "secret"
// 	},
// 	{
// 		username: "jess",
// 		password: "123"
// 	}
// ];

// LOOPS

var todos = [
	"clean room", "brush teeth", "exercise", "study javascript", "eat healthy"
];

var todosImportant = [
	"clean room!", "brush teeth!", "exercise!", "study javascript!", "eat healthy!"
];

var todosLength = todos.length

// for(var i = 0; i < todosLength; i++) {
// 	console.log(todos[i], i);
// }

function logTodos(todos, i) {
	console.log(todos, i);
};


todos.forEach(logTodos);

todosImportant.forEach(logTodos);

// todos.forEach(function(todos, i) {
// 	console.log(todos, i);
// })

// var counterOne = 0;
// while(counterOne < 10) {
// 	console.log(counterOne);
// 	counterOne++
// }

// var counterTwo = 10;
// do {
// 	console.log(counterTwo);
// 	counterTwo--;
// } while(counterTwo > 0)