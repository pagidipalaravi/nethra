//code wriiten outside the function become global
let x = "2";
function scopes() {
	//code written inside the {} is an block scope
	// variables declared inside the function becomes function scope.
	let cars = "volve" ; "Audi"; //using let and const cannot accesible from outside the function
	const car = "benz";
	var carName = "Audi";// using var can be accesible from outside the function
	carName = "toyta"// this will become global because the variable is not declared.
	document.getElementById("demo").innerHTML = cars;
}