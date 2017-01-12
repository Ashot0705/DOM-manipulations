document.getElementById('window').addEventListener("keypress", function(event) {
	var letter = String.fromCharCode (event.charCode);
	var header = document.getElementById('header');
	header.innerHTML = "<h1>" + event.key + "</h1>";
}
)