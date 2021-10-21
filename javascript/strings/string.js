function strings() {
	let personName = "john";//can use double quotes
	let carName = 'volve';//can use single quotes
	let text = "bellamkondasainethrarao";
	let text1 = "My name is \"Nethra\"";//using backslash to get double quotes within the double quoted string
	let text2 = 'It\'s a string';// The sequence \' used to insert single quote in a string
	let text3 = "insert backslash two times \\ inside a string to get a single backslash";
	document.getElementById("demo1").innerHTML = text +"-"+ text.length;
	document.getElementById("demo2").innerHTML = text2;
	document.getElementById("demo3").innerHTML = "Hello \
	dolly";//break the code within the text string
	document.getElementById("demo4").innerHTML = "Hello" + "Dolly"
	document.getElementById("demo").innerHTML = "The owner of"+" "+carName+" "+"is"+" "+personName;
}

function stringasobject() {
	let x = "john";//typeof is  string
	let y = new String("john");// typeof is object
	//x==y is true because the values are same
	//x===y is false because x and y has different types.
	document.getElementById("demo").innerHTML = y;
}