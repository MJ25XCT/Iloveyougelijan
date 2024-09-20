//import utils from "./utils"

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

window.addEventListener("resize", function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;     
    init()
});

/*
const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}


// Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})
*/

// Objects


function createMountainRange(mountainAmount, height, color){
    for(let i = 0; i < mountainAmount; i++){
        const mountainWidth = canvas.width / mountainAmount
        c.beginPath()
        c.moveTo(i * mountainWidth, canvas.height)
        c.lineTo(i * mountainWidth + mountainWidth + 0.2*canvas.height, canvas.height)
        c.lineTo(i * mountainWidth + mountainWidth / 2, canvas.height - height)
        c.lineTo(i * mountainWidth - 0.2*canvas.height, canvas.height)
        c.fillStyle = color
        c.fill()
        c.closePath()
    }
}

// Implementation
const backgroundGradient = c.createLinearGradient(0, 0, canvas.width, canvas.height)
backgroundGradient.addColorStop(0, '#171e26')
backgroundGradient.addColorStop(1, '#3f586b')

let stars
let miniStars
let backgroundStars
let ticker = 0
let randomSpawnRate = 75
const groundHeight = 0.09 * canvas.height
let inf = 1e9
function init() {
    stars = []
    miniStars = []
    backgroundStars = []
   
    for(let i = 0; i < 200; i++){
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const radius = Math.random() * 3
        backgroundStars.push(new Star(x, y, radius, '#00A36C'))
    }
}

// Animation Loop
function animate() {
    c.clearRect(0, 0, 0, canvas.height)
    c.fillStyle = backgroundGradient
    c.fillRect(0, 0, canvas.width, canvas.height)

    backgroundStars.forEach(backgroundStar => {
        backgroundStar.draw()
    })

    if(flag) createMountainRange(1, canvas.height * 0.7, '#384551')
    if(flag) createMountainRange(2, canvas.height * 0.6, '#2B3843')
    if(flag) createMountainRange(3, canvas.height * 0.4, '#26333E')
    c.fillStyle = '#182028'
    c.fillRect(0, canvas.height - groundHeight, canvas.width, groundHeight)
    stars.forEach((star, index) => {
        star.update();
        if(star.radius == 0){
            stars.splice(index, 1)
        }
    });

    miniStars.forEach((miniStar, index) => {
        miniStar.update();
        if(miniStar.ttl == 0){
            miniStars.splice(index, 1)
        }
    });

    ticker++
    if(ticker >= inf){
        ticker = 0
    }
    if(ticker % randomSpawnRate == 0){
        const radius = 9
        const x = Math.max(radius, Math.random() * canvas.width - radius)
        stars.push(new Star(x, -100, 9, '#E3EAEF'))
        randomSpawnRate = Math.floor(Math.random() * (200 - 125 + 1) + 125)
    }

    requestAnimationFrame(animate)
}

init()
animate()

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas(); // Call this initially