function myFunction() {
	let text = '{"employees":['+
	'{"firstName" : "Nethra", "lastName" : "rao"},'+
	'{"firstName" : "Swetha", "lastName" : "rao"},'+
	'{"firstName" : "john", "lastName" : "Doe"}]}';
	
	const obj = JSON.parse(text);
	document.getElementById("demo").innerHTML = obj.employees[0].firstName+"-"+obj.employees[0].lastName;
	document.getElementById("demo1").innerHTML = obj.employees[1].firstName+"-"+obj.employees[1].lastName;
}