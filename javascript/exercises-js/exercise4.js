var response = prompt("How old are you?");
var age = Number(response);

if(age < 18) { 
	"Sorry you are too young to drive. Powering off.";
} else if (age === 18) {
	"Congratulations on your first year of driving. Enjoy the ride!";
} else {
	"Powering On. Enjoy the ride!";
}
