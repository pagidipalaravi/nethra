function myFunction() {
	class person {
	constructor(name, number) {
		this.name = name;
		this.number = number;
	}
	getperson(){
		return this.name+"-"+this.number;
	}
}
	let person1 = new person("Nethra",412);
	let person2 = new person("Swetha",413);
	document.getElementById("demo").innerHTML = person1.name+" "+person1.number;
}