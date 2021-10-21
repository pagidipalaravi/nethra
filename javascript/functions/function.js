function myFunction(p1,p2) {
	return p1 * p2;
}
	document.getElementById("demo").innerHTML= myFunction(5,2);
let x = mul(4,3);
document.getElementById("demo1").innerHTML = x;
function mul(a,b) {
	return a*b;
}
function tocelsius(f) {
	return (5/9)*(f-32);
}
document.getElementById("demo2").innerHTML= tocelsius(87);
function local() {
	let carname ="volve";
	document.getElementById("demo3").innerHTML= typeof carname + ""+ carname;
}
document.getElementById("demo4").innerHTML=typeof carname;