function maps(){
	const employee = new Map();
	employee.set("employeeId" , 102);
	employee.set("firstName" , "Surya");
	employee.set("lastName" , "Pagidipala");
	employee.set("email" , "Pagidipala");
	employee.set("phoneNumber" , "9182550827");
	employee.set("hireDate" , "2021-01-15");
	employee.set("salary" , 10000.0);
	employee.set("jobId" , "IT_PROG");
	employee.set("commisionPct" , null);
	employee.set("managerId", 103);
	employee.set("departmentId" , 60);
	let text = "";
	employee.forEach(function(value,key){
	text += key +" "+ "-" +" " + value + "<br>"
	})
	document.getElementById("demo").innerHTML = text;
}