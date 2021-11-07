function myFunction() {
	const cars = ["volve" , "ford" , "audi"]; 
	let text = "";
	for(let x of cars){
		text += x + "<br>"
	}
	document.getElementById("demo").innerHTML = text;
}