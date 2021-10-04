function externalFunction() 
	 {
		const pi = 3.14;//this is the way to assign value for const variable.
		pi = 3.14;//here we will get an error
		const pi; // this is not the correct way to assign value.
		pi = 3.14;
		const cars = ["volve", "saab", "BMW"];
		cars[1] = "toyota";//we can change the element of an const array
		cars.push("benz");//we can also add an element
		document.getElementById("demo").innerHTML = cars;
		const car = {type : "benz", model : "500", color : "red"};
		car.color = "white";// changing the poperty is possible
		car.owner = "Nethra";//we can add the property of an object. 
		document,getElementById("demo1").innerHTML = "The car owner is" + car.owner;
}