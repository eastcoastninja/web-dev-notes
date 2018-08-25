var users = ["bob", "bob", "alice", "alice", "alice"];

var newUsers = [];

var newArray = users.forEach((user, index) => {
	if(user === user[+1]) {
		newUsers.push(user + index);
	}
	console.log(index);
	newUsers.push()
});

console.log(newUsers);
