function editEmployee() {
		//read employeeId from the Event
		//let employeeId = document.getElementById("217");
		//call a javascript function getElementById(){}
	setValues();
	getElementById(employeeId);
}
function setValues(){
	var x = localStorage.getItem("value");
	var resetValue = newFunction(x)
	localStorage.setItem("myValue", resetValue);
}
function newFunction(x) {
	console.log(`employeeId=${x}`);
	var resetValue = 0;
	return resetValue;
	
}
function getElementById(employeeId){
	console.log(event);
	let employeeArray = {"employeeId":217,"firstName":"surya","lastName":"pagidipala","email":"surya123@gmail.com","phoneNumber":"9182550827","hireDate":"2021-01-15","salary":10000.0,"jobId":"IT_PROG","commisionPct":null,"managerId":103,"departmentId":60};
	document.getElementById("employeeId").value = employeeArray.employeeId;
	document.getElementById("firstName").value = employeeArray.firstName;
	document.getElementById("lastName").value = employeeArray.lastName;
	document.getElementById("email").value = employeeArray.email;
	document.getElementById("phoneNumber").value = employeeArray.phoneNumber;
	document.getElementById("hireDate").value = employeeArray.hireDate;
	document.getElementById("salary").value = employeeArray.salary;
	document.getElementById("job").value = employeeArray.jobId;
	document.getElementById("commisionPct").value = employeeArray.commisionPct;
	document.getElementById("manager").value = employeeArray.managerId;
	document.getElementById("department").value = employeeArray.departmentId;
}
function employeeIdkeypress() {	
	document.getElementById("message").innerHTML = "";
	if(isSpace(event.keyCode)) {
		return false;
	}else if(isSpecialCharacter(event.key)) {
		return false;
	}else if(isAlphabet(event.key)) {
		return false;
	}else{
		return true;
	}
}
function isSpace(keyCode){
	let isSpace = false;
	if(keyCode == 32){
		errorMessage("Space not allowed here");
		isSpace = true;
	}
	return isSpace;
}
function isSpecialCharacter(key){
	let isSpecialCharacter = false;
	let regexp = new RegExp(".!@#$%^&*()_+-=<>~`");
	let patt = new RegExp(key);
		if(patt.test(regexp)) {
		errorMessage(key + " Special character not allowed here");
		isSpecialCharacter = true;
	}
	return isSpecialCharacter;
}
function isAlphabet(key){
	let isAlphabet = false;
	let regexp = new RegExp("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
	let patt = new RegExp(key);
	 if (patt.test(regexp)) {
		errorMessage(key + "character not allowed here");
		isAlphabet= true;
	}
	return isAlphabet;
}
function firstNamekeypress(){
	document.getElementById("message").innerHTML = "";
	if(isSpace(event.keyCode)){
		return false;
	}else if(isSpecialCharacter(event.key)){
		return false;
	}else if(isNumber(event.key)){
		return false;
	}else{
		return true;
	}
}
function isNumber(key){
	document.getElementById("message").innerHTML = "";
	let isNumber = false;
	let regexp = new RegExp("0123456789");
	let patt = new RegExp(key);
	if(patt.test(regexp)){
		errorMessage(key + "Numbers are not allowed here");
		isNumber = true;
	}
	return isNumber;
}
function lastNamekeypress(){
	document.getElementById("message").innerHTML = "";
	if(isSpace(event.keyCode)){
		return false;
	}else if(isSpecialCharacter(event.key)){
		return false;
	}else if(isNumber(event.key)){
		return false;
	}else{
		return true;
	}
}
function emailkeypress(){
	document.getElementById("message").innerHTML="";
	if(isSpace(event.keyCode)) {
		return false;
	}else if (checkEmail(event.key)){
		return false;
	} else{
		return true;
	}
}
function checkEmail(){
	 var email = document.getElementById('email');
     var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     if (!filter.test(email.value)) {
        errorMessage('Please provide a valid email address');
        email.focus;
        return false;
        }
}
function phoneNumberkeypress(){
	document.getElementById("message").innerHTML = "";
	if(isSpace(event.keyCode)){
		return false;
	}else if(isAlphabet(event.key)){
		return false;
	}else if(isSpecialCharacter(event.key)){
		return false;
	}else{
		return true;
	}
}
function hireDatekeypress(){
		var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/;
        var testDate =document.getElementById("hireDate").value;
        if (date_regex.test(testDate)) {
            document.getElementById("message").innerHTML = "Date follows dd/mm/yy format";
        }
        else{
          document.getElementById("message").innerHTML = "Invalid date format";
        }
}
function salarykeypress(){
	document.getElementById("message").innerHTML="";
	if(isSpace(event.keyCode)) {
		return false;
	}else if(isSpecialCharacter(event.key)){
		return false;
	}else if(isAlphabet(event.key)){
		return false;
	}else{
		return true;
	}
}
function jobkeypress(){
	document.getElementById("message").innerHTML="";
	if(isSpace(event.keyCode)) {
		return false;
	}else if(isSpecialCharacter(event.key)){
		return false;
	}else if (isNumber(event.key)){
		return false;
	}else {
		return true;
	}
}
function commisionPctkeypress(){
	document.getElementById("message").innerHTML="";
	if(isSpace(event.keyCode)) {
		return false;
	}
}
function managerkeypress() {
	document.getElementById("message").innerHTML = "";
	if(isSpace(event.keyCode)) {
		return false;
	}else if(isSpecialCharacter(event.key)) {
		return false;
	}else {
		return true;
	}
}
function departmentkeypress() {
	document.getElementById("message").innerHTML = "";
	if(isSpace(event.keyCode)) {
		return false;
	}else if (isSpecialCharacter(event.key)) {
		return false;
	}else {
		return true;
	}
}
function createemployee() {
	let employeeId = document.getElementById("employeeId").value;
	validateEmployeeId(employeeId);
	let firstName = document.getElementById("firstName").value;
	validateFirstName(firstName);
	let lastName = document.getElementById("lastName").value;
	validateLastName(lastName);
	let email = document.getElementById("email").value;
	validateEmail(email);
	let phoneNumber = document.getElementById("phoneNumber").value;
	validatePhoneNumber(phoneNumber);
	let hireDate = document.getElementById("hireDate").value;
	validateHireDate(hireDate);
	let salary = document.getElementById("salary").value;
	validateSalary(salary);
	let job = document.getElementById("job").value;
	validateJob(job);
	let commissionPct = document.getElementById("commissionPct").value;
	validateCommissionPct(commissionPct);
	let manager = document.getElementById("manager").value;
	validateManager(manager);
	let department = document.getElementById("department").value;
	validateDepartment(department);
	let employeeForm = "Employee Id:" + employeeId + " " + "First Name:" + firstName +" "+ "Last Name:" + lastName +" "+ "Email:" + email +" "+
	"Phone Number:" + phoneNumber +" "+ "Hire Date:" + hireDate +" "+ "Salary:" + salary +" "+ "Job: " + job +" "+ "Commission Pct:" + commissionPct +" "+
	"Manager:" + manager +" "+ "Department:" + department;
	console.log(employeeForm);
	}
function validateEmployeeId(employeeId) {
	if(employeeId == "" || employeeId == null) {
		document.getElementById("employeeId").style.borderColor = "red";
		return "";
	}
}
function validateFirstName(firstName) {
	if(firstName == "" || firstName == null) {
		document.getElementById("firstName").style.borderColor = "red";
	}
}
function validateLastName(lastName) {
	if(lastName == "" || lastName == null) {
		document.getElementById("lastName").style.borderColor = "red";
	}
}
function validateEmail(email) {
	if(email == "" || email == null) {
		document.getElementById("email").style.borderColor = "red";
	}
}
function validatePhoneNumber(phoneNumber) {
	if(phoneNumber == "" || phoneNumber == null) {
		document.getElementById("phoneNumber").style.borderColor = "red";
	}
}
function validateHireDate(hireDate) {
	if(hireDate == "" || hireDate == null) {
		document.getElementById("hireDate").style.borderColor = "red";
	}
}
function validateSalary(salary) {
	if(salary == "" || salary == null) {
		document.getElementById("salary").style.borderColor = "red";
	}
}
function validateJob(job) {
	if(job == "" || job == null) {
		document.getElementById("job").style.borderColor = "red";
	}
}
function validateCommissionPct(commissionPct) {
	if(commissionPct == "" || commissionPct == null){
	document.getElementById("commissionPct").style.borderColor = "red";
	}
}
function validateManager(manager) {
	if(manager == "" || manager == null){
	document.getElementById("manager").style.borderColor = "red";
	}
}
function validateDepartment(department) {
	if(department == "" || department == null) {
		document.getElementById("department").style.borderColor = "red";
	}
}
function successMessage(successMsg) {
	document.getElementById("message").setAttribute("class" , "success-msg");
	document.getElementById("message").innerHTML = successMsg;
}
function errorMessage(errorMessage) {
	document.getElementById("message").setAttribute("class" , "error-msg");
	document.getElementById("message").innerHTML = errorMessage;
}