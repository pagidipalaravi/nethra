function method() {
	var str = "Apple, Banana, Orange";
	let text = "please visit Microsoft";
	document.getElementById("demo").innerHTML = str.slice(14,21);
	document.getElementById("demo").innerHTML = str.slice(-0,-14);//if you omit the second parameter,the method will slice out the rest of the string
	document.getElementById("demo").innerHTML = str.substr(0,6);//6 defines the length of the extracted part
	document.getElementById("demo").innerHTML = text.replace("Microsoft", "W3Schools");//writing MICROSOFT will not work, it is a case sensitive
} 
function upperlowercase() {
	let text1 = "Hello Nethra,";
	let text2 = "how are you";
	let text3 = text1.concat(" ",text2);
	//we can also concate the text as document.getElementById("demo").innerHTML = text1+ " " + text2
	document.getElementById("demo").innerHTML = text1.toUpperCase();
	document.getElementById("demo").innerHTML = text1.toLowerCase();
	document.getElementById("demo").innerHTML = text3;
}
function padding() {
	let text = "5";
	document.getElementById("demo").innerHTMl = text.padStart(5,1);
}