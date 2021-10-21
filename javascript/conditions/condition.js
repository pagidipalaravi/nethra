function Function1() {
	var age = "13";
	if (age>=18) {
		document.getElementById("demo").innerHTML="you are eligible to apply for Driving Licence";
		}
	else {
		document.getElementById("demo").innerHTML="you are not eligible to apply for Driving Licence, please apply after"+" "+(18-age)+" "+"years"
	}
}
function Function2() {
	const time = new Date().getHours();
	let greeting;
	if (time<10) {
		greeting = "Good Morning";
	}
	else if (time < 20) {
		greeting = "Good Day";
	}
	else {
		greeting = "Good Evening";
	}
	document.getElementById("demo1").innerHTML= greeting;
}