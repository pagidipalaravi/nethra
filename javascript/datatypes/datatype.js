function datatypes() {
	let x = 16 + "volve"; //adding a number to string will treat the number as a string.
	let X = 10 + 5 + "volve"; //Javascript evaluates expressions from left to right 
	let y= "volve" + 10 + 2; //since the first operand is string, all operands are treated as string.
	let z; // here z is undefined
	z = 5; // here z is number
	z = "john"; // here z is string
	let ans1 = "he is a 'boy'";
	let ans2 = 'she is a "girl"';
	let x1 = 12.5; //number with decimal 
	let x2 = 123; // number without decimal
	let x3 = 123; 
	let car ="";
	document.getElementById("demo").innerHTML= x + "<br>" + X +"<br>"+y+"<br>"+z+
												"<br>"+ans1+"<br>"+ans2+"<br>"+x1+"<br>"+x2+
												(x1==x2)+"<br>"+(x2==x3)+"<br>"+ "The value is:"+
													car+"<br>"+"The type is:"+typeof car;
}
function arrays() {
	const cars = ["volve","benz","ford"];
	const person ={name : "john", age : "50",};
	typeof "john"; //returns string
	document.getElementById("demo1").innerHTML= cars[1] +"<br>"+ person.name +"age is"+ person.age+
															"<br>"+typeof "john";
	
}											
	
