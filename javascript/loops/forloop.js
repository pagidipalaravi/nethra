function forloop() {
	const cars = ["volve","BMW","saab","Audi","Ford","Benz"];
	let text="";
	console.log(cars.length);
	for (i=0; i < cars.length; i++ ){
	text += cars[i] + "<br>";
	console.log(cars[i]);
	document.getElementById("demo").innerHTML = text;
}
}

function loop1() {
	const cars=["volve","BMW","Audi","Benz","Ford"];
	let text="";
	console.log(cars.length);
	for (i=0; i<cars.length) {
		text += cars[i] +"<br>";
		console.log(cars[i])
		if (i==cars.length) {
			break;
		}
		i++;
		document.getElementById("demo").innerHTML = text;
	}
}