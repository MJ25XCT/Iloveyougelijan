var dv = document.getElementById("content");
dv.style.opacity = 0;
var val = 0;

function timer(){
	var start = new Date(2023, 6, 14, 20, 53);
	var currentDate = new Date(); // Get the current date and time

	// Calculate the time difference in milliseconds
	var timeDifference = currentDate - start;

	// Calculate the number of days
	var d = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

	document.getElementById("d").innerHTML = d;
}

function fadein(){
	if(val < 1){
		val += 0.025;
		dv.style.opacity = val;
	}
	else{
		clearInterval(fadeinInterval);
		if(ok == 2){
			ok += 1;
		}
	}
}

var fadeInterval;
var fadeinInterval;

timer();
setInterval(timer, 1000);
fadeInterval = setInterval(function(){
	if(ok == 2){
		clearInterval(fadeInterval);
		fadeinInterval = setInterval(fadein, 50);
	}
}, 50)