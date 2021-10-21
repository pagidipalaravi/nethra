function Break() {
	let text = "";
	for (i = 1; i < 15 ; i++) {
		if (i==10) {
			break;
		}
		text += "<br>The number is" +" "+i + "<br>";
	}
	document.getElementById("demo").innerHTML = text;
}

function Continue() {
	const cars = ["volve","saab","Ford","BMW"];
	let text = "";
	for (i = 0; i < cars.length; i++) {
		if (i==="Ford") {
			continue;
		}
		text += cars[i];
	}
	document.getElementById("demo").innerHTML = cars;
}