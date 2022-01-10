var database = [
	{
		username: "dhruvi",
		password: "secret"
	},
	{
		username: "Hello",
		password: "howryou"
	},
	{
		username: "sheetal",
		password: "anna123"
	}
];

var newsfeed = [
	{
		username: "Sana",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Abhay",
		timeline: "Javascript is cool!"
	},
	{
		username: "Mitch",
		timeline: "Nice Vacation!!!"
	}
];

var userNamePrompt = prompt("Whats your username?");
var passwordPrompt = prompt("Whats your password?");

function validUser(user, pass){
	for( var i=0; i< database.length; i++)
	{	if(user == database[i].username && pass == database[i].password) {
			return true;
		}
	}
	return false;
}

function signIn(user, pass) { 
	if(validUser(user, pass)){
		console.log(newsfeed);
	}
	else{
		alert("Invalid credentials!");
	}
}

signIn(userNamePrompt, passwordPrompt);