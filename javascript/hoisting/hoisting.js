function hoisting() {
	 x = "2";
	 var X = "volve"
	 y = "3";//here we will get reference error variable should declare before use
	 z = "4"//here we will get an syntax error because of initializing the value before it is declared.
	document.getElementById("demo1").innerHTML = x + y ;
	document.getElementById("demo2").innerHTML = X + Y ;
	var x; //in var variable can be declared after it has been used.
	 
	var Y = "volve"//This will result undefined because varaible must be hoist at the top.
	//variables with let and const are hoisted at the top before intializing.
	let y; 
	const z;
}