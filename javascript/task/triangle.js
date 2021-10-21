function Triangle() {
let n = 5;
let string = "";
//External loop
	for (i = 1; i <= n; i++){
	//internal loop
	for (j = 1; j <= i; j++){
		string += j;
	}
		string += "\n";
}
	console.log(string);
}

function Triangle1() {
	let n = 5;
	let string = "";
	//External loop
	for(i = 1; i <=n; i++){
		//internal loop
		for(j = 1; j <= i; j++){
			string += i;
		}
		string += "\n";
	}
	console.log(string);
		
}

