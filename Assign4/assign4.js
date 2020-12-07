window.onload = function showTime(){
    var date = new Date(); //current date
	var c = date.getMonth() + 1; //0 - 11
	var d = date.getDate(); //1 - 30/31/28/29
    var h = date.getHours() + 1; // 0 - 23
    var m = date.getMinutes() + 1; // 0 - 59
    var s = date.getSeconds() + 1; // 0 - 59
	
	var Cc = 12; //time and date variables for christmas day
	var Cd = 25;
	var Ch = 24;
	var Cm = 60;
	var Cs = 60;
    
	if (c == Cc && d == Cd) { //case for christmas day
	var time = "Merry Christmas!!!";
	} else if (c == Cc && d > Cd) { //case for before new year
	Cc = 24;
	Cd = 31 - d;
	} else { //general case
    var time = (Cc - c) + ":" + (Cd - d) + ":" + (Ch - h) + ":" + (Cm - m) + ":" + (Cs - s);
	}
	
    document.getElementById("MyClockDisplay").innerHTML = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();