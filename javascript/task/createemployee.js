function createemployee() {
	var employeeId = document.getElementById("employeeId").value;
	var firstName = document.getElementById("employeefirstName").value;
	var lastName = document.getElementById("employeelastName").value;
	var email = document.getElementById("email").value;
	var phoneNumber = document.getElementById("phoneNumber").value;
	var hireDate = document.getElementById("hireDate").value;
	var salary = document.getElementById("salary").value;
	var jobId = document.getElementById("jobId").value;
	var commissionPct = document.getElementById("commissionPct").value;
	var managerId = document.getElementById("managerId").value;
	var departmentId = document.getElementById("departmentId").value;
	var employeeForm = "Employee Id:" + employeeId + " " + "First Name:" + firstName +" "+ "Last Name:" + lastName +" "+ "Email:" + email +" "+
	"Phone Number:" + phoneNumber +" "+ "Hire Date:" + hireDate +" "+ "Salary:" + salary +" "+ "Job Id: " + jobId +" "+ "Commission Pct:" + commissionPct +" "+
	"Manager Id:" + managerId +" "+ "Department Id:" + departmentId;
	console.log(employeeForm);
	
}