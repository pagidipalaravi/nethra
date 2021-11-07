async function viewEmployees(){
	let employees = [];
	await $.getJSON("viewemployees.json",function(data){
		console.log(data);
		employees = data;
	});
	// insert table into div
	let table = "";
	let header = "";
	let rows = ""; 
	// create header and insert heading into it.
	header = "<tr><th>Employee Id</th> <th> First Name</th> <th>lastName</th> <th> Email</th> <th>Phone Number</th> <th>Hire Date</th> <th>Salary</th> <th>Job Id</th> <th>Commision Pct</th> <th>Manager Id</th> <th>Departement Id</th><th>Action</th></tr>";
	// created loop to retrive the data from the arrayOfEmployeesObject.It also create the row 
	//for(let i = 0; i < arrayOfEmployeesObject.length; i++){
		for(let employee of employees){
			console.log(employee);
			let row = `<tr><td>${employee.employeeId}</td> <td>${employee.firstName}</td> <td>${employee.lastName}</td> <td>${employee.email}</td> <td>${employee.phoneNumber}</td> <td>${employee.hireDate}</td><td>${employee.salary}</td><td>${employee.jobId}</td><td>${employee.commisionPct}</td><td>${employee.managerId}</td><td>${employee.departmentId}</td><td><a href='editemployee.html'><input id =${employee.employeeId} type='button' onclick='readValue()' value='Edit'></a><input type='button' value='Delete'></td></tr>`;
			rows = rows + row;
		}
		// join the header and rows insert into table
    table = "<table> "+ header + rows +"</table>"
	document.getElementById("showData").innerHTML = table;
}
function readValue(){
	localStorage.setItem("value", employeeId);
	window.location.href = "editemployee.js";
}
