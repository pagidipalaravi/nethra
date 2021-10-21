function myFunction() {
	let x=5;
	let x=2;//it will get an error as x has already been declared.
	document.getElementById("demo1").innerHTML=x;
}
	let y=4;
	// y will not be redeclareble
	{
	let y=2;
	let y=3;//redeclarig is not allowed in the same block.
	}
	document.getElementById("demo2").innerHTML=y;
}