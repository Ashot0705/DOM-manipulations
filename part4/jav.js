function password_match () {
	var password = document.getElementById('password').value
	if(password == "12345678") {
		return true
	} else {
		return false
	}
}
function username_match() {
	var username = document.getElementById('username').value;
	var characters = username.split("");

	var presence = characters.map(function(element) {
		return Number.isInteger(parseInt(element))
	});

	if (presence.indexOf(true) !== -1) {
		var header = document.getElementById("header").innerHTML
		return true
	} else {
		alert ("incorect")
	}
}
function validateForm () {
	if(password_match() ==true && username_match()==true) {
		 var header = document.getElementById("header");
		 header.innerHTML = "<h1>The registration is complete!</h1>";
	} else {
		alert ("incorect")
	}
}
var button = document.getElementById("login-btn")
button.addEventListener("click",function(){
	validateForm()
})
