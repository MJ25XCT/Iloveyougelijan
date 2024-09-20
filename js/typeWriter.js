let i = 0;
let text1 = "Hi, love!";
let text2 = "I made you a little something."
let speed = 100;

function typeWriter(text, para){
    if (ok == 2){
        clearInterval(typeInterval);
    }
    if (i < text.length){
        if (text.charAt(i) === '.' && text.charAt(i + 1) === ' ') {
            i += 2;
        }
        document.getElementById(para).innerHTML += text.charAt(i);
        i++;
        speed = Math.random() * 50 + 100;
    }
    else {
        if (ok == 0){
            i = 0;
        }
        ok += 1;
    }
}

var typeInterval;
var ok = 0;

typeInterval = setInterval(function(){
    if (ok == 0){
        typeWriter(text1, "txt1");
    }
    else if (ok == 1){
        typeWriter(text2, "txt2");
    }
}, 100);

// Function to clear the typed text when the heart is clicked
function clearTypedText() {
    document.getElementById("txt1").innerHTML = "";
    document.getElementById("txt2").innerHTML = "";
    clearInterval(typeInterval);
    document.getElementById("clickMe").innerText = '';
    document.getElementById("button").style.display = 'none';
}

// Ensure the play function is defined in the global scope
window.play = function() {
    // ... existing play function code ...
    showTimeline();
    showMusicPlayer();
}

function showTimeline() {
    const elements = ['timeline', 'circle', 'yearLine', 'yearText'];
    elements.forEach(id => {
        const element = document.getElementById(id);
        element.classList.add('show');
    });
}

function play() {
    // ... (keep existing play function code) ...
    showTimeline(); // Add this line to show the timeline when the button is clicked
}
