function days() {
	let day;
	switch (5) {
		case 0:
			day = "Sunday";
			break;
		case 1:
			day = "Monday";
			break;
		case 2:
			day = "Tuesday";
			break;
		case 3:
			day = "Wednesday";
			break;
		case 4:
			day = "Thursday";
			break;
		case 5:
			day = "Friday";
			break;
		case 6:
			day = "saturday";
			break;
		default:
			text = "Not a day";
	}
document.getElementById("demo").innerHTML= day;
}
function Days() {
	let day = 2;
	if (day==0) {
		day = "sunday";
	} 
	else if (day==1) {
		day = "Monday";
	}
	else if (day==2) {
		day = "Tuesday";
	}
	else if (day==3) {
		day ="Wednesday";
	}
	else if (day==4) {
		day = "Thursday";
	}
	else if (day==5) {
		day = "Friday";
	}
	else {
		day = "Saturday"
	}
	document.getElementById("demo").innerHTML= day;
}
function commoncode() {
	let text;
	switch (4) {
		case 0 :
		case 1 :
			text = "This is not a weekend";
		case 2 :
		case 3 :
			text = "soon It is weekend";
		case 5 :
		case 6 :
			text = "It is weekend";
		default :
			text = "Looking forward to the weekend"
	}
	document.getElementById("demo").innerHTML=text;
}