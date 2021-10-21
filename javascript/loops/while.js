function whileloop() {
let text = "";
let i = 0;
while (i < 10) {
	text += "<br>The number is"+ i;
	i++;
}
document.getElementById("demo").innerHTML = text;
}

function dowhile() {
	let text = "";
	let i = 0;
	do {
		text += "<br>The number is" + " "+ i;
		i++;
	}
	while (i < 15);
	document.getElementById("demo").innerHTML = text;
}