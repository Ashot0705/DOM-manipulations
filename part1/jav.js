
var button1 = document.getElementById("button1")
button1.addEventListener("click", function() {
	var header = document.getElementById("header")
	header.innerHTML = "<h1>I'm right</h1>"
})
var button2 = document.getElementById("button2")
button2.addEventListener("click", function() {
	var header = document.getElementById("header")
	header.innerHTML = "<h1>No..., I'm right!!!</h1>"
})
//the other way to do it

// function myButton(num) {
// 	if (num==1) {
// 		document.getElementById('buttonText1').innerHTML="I'm right"
// 		document.getElementById('buttonText2').innerHTML=""
// 	} else {
// 		document.getElementById('buttonText2').innerHTML="No, I'm right!"
// 		document.getElementById('buttonText1').innerHTML=""
// }}
