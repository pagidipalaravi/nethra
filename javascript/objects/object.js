function object() {
	const car = {type : "Ford", model : "500", color : "red"};//creating data from the object.
	document.getElementById("demo").innerHTML = "The car type is" +" "+ car.type +" "+ "and color is" +" "+ car.color;
}

function object1() {
	const person = { // spaces and libe breaks are not important.
		firstName : "Nethra",// It can be span number of lines.
		lastName : "Rao",
		age : "22",
	}
	document.getElementById("demo").innerHTML = "The age of" +" "+person.firstName+ person.lastName+" "+"is"+" "+person.age;
}

function object2() {
	const person = {
		firstName : "Swetha",
		lastName : "Bellamkonda",
		id : "412",
		fullName : function() {
			return this.firstName+" "+this.lastName;
		}
	}
	document.getElementById("demo").innerHTML = person.fullName();
}
