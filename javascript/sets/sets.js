function sets() {
	const employeeId = new Set();
	employeeId.add(217);
	employeeId.add(100);
	employeeId.add(101);
	employeeId.add(102);
	employeeId.add(103);
	employeeId.add(104);
	employeeId.add(105);
	employeeId.add(106);
	employeeId.add(107);
	employeeId.add(108);
	let text = "";
	employeeId.forEach(function(value){
		text += value + "<br>";
	})
	document.getElementById("demo").innerHTML = "employeeId =" + text ;
}