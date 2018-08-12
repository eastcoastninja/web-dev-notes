// Create an object and an array which we will use in our facebook exercise. 


// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

// var user = {
// 	name: "eastcoastninja",
// 	password: "no-peeking"
// };

// 2. Create an array which contains the object you have made above and name the arry "database"

var database = [
	{
		username: "eastcoastninja",
		password: "no-peeking"
	},
	{
		username: "sally",
		password: "123"
	},
	{
		username: "ingrid",
		password: "777"
	},
];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

var newsfeed = [
	{
		username: "The Rock",
		timeline: "Success at anything will always come down to this: Focus & Effort, and we control both."
	},
	{
		username: "Casey Neistat",
		timeline: "Overthinking the process will kill any career in the creative space. You just have to do, not think."
	},
	{
		username: "Elon Musk",
		timeline: "When something is important enough, you do it even if the odds are not in your favor."
	}
];

var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

function isUserValid(username, password) {
	for(var i = 0; i < database.length; i++) {
		if(database[i].username === username && 
			database[i].password === password) {
			return true;
		} 
	}
	return false;
}


function signIn(username, password) {
	if(isUserValid(username, password)) {
		console.log(newsfeed);
	} else {
		alert("Sorry wrong username and password");
	}
}

signIn(userNamePrompt, passwordPrompt);