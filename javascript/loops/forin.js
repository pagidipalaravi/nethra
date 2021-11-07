function forIn() {
	const persons = {fName : "John", lName : "Doe"};
	let text = "";
	for(let x in persons){
		text += persons[x] + " "; 
	}
	//forEach() method
	/*const numbers = [2, 4, 5, 6];
	let text = "";
	numbers.forEach(myFunction);
	function myFunction("value", "index"){
		text += value + "<br>" + index;
	}*/
	document.getElementById("demo").innerHTML = text;
}