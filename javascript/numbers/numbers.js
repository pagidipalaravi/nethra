function numbers() {
	/*12 = number without decimal
		12.3 = number with decimal*/
	let X = 123e5;
	let Y = 123e-5;
	let x = 10;
	let y = 5;//adding x and y will get 15
	let z = "5";//adding y and z will get string concatenation 55
	//adding x, y and z will get 155
	let A = x - y; // it returns 5
	let A = x * y;// it returns 50
	let A = x / y; // it returns 2
	let A = x + y;// but this will not work, it returns 105
	let B = 2 + "Apple";// it returns NaN
	document.getElementById("demo").innerHTML = isNaN(B);// it returns true
}
function objects() {
	let x = 32;//typeof x returns Number
	let y = new Number(32);//typeof y returns object
	let z = new Number(32)//(x==y) returns false because objects can not be compared
	//(x==y) returns true, because x and y have same values
	//(x===y) returns false, because x and y have different types
	document.getElementById("demo").innerHTML = typeof x + "<br>" + typeof y;
}