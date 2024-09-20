var btn = document.getElementById("heartTxt");
btn.style.opacity = 0;
var btnVal = 0;
var shouldShowImages = false;
const imagesLeft = document.querySelectorAll('.falling-image-left');
const imagesRight = document.querySelectorAll('.falling-image-right');
const container = document.querySelector('.falling-image-container');

function play() {
	const fallingImages = document.querySelectorAll(".falling-image");
	fallingImages.forEach((image) => {
		image.style.display = "block";
	});

	flag = 1 - flag;
	document.getElementById("typeDiv").style.opacity = flag;
	
	if (t == 0) {
		// Add any additional logic here if needed
	}
	t++;

	showTimeline(); // Add this line to show the timeline
}

function resetAnimation() {
	imagesLeft.forEach(image => image.style.animation = 'none');
	imagesRight.forEach(image => image.style.animation = 'none');

	setTimeout(() => {
		imagesLeft.forEach(image => image.style.animation = '');
		imagesRight.forEach(image => image.style.animation = '');
	}, 0);
}

function buttonFadeIn() {
	if (btnVal < 1) {
		btnVal += 0.025;
		btn.style.opacity = btnVal;
	} else {
		clearInterval(buttonInterval);
		if (ok == 3) {
			ok += 1;
		}
	}
}

function event() {
	showImageInterval = setInterval(resetAnimation, 100);

	imgInterval = setInterval(function () {
		if (ok == 3) {
			setTimeout(function () {
				buttonInterval = setInterval(buttonFadeIn, 50);
			}, 1500);
			clearInterval(imgInterval);
		}
	}, 50);
}

var showImageInterval;
var imgInterval;
var buttonInterval;

event();
