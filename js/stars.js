function Star(x, y, radius, _color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = '#ffffff'
    this.velocity = {
        x: (Math.random() - 0.5) * 8,
        y: 3
    }
    this.friction = 0.8
    this.gravity = 1
}

Star.prototype.draw = function() {
    c.save()
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.shadowColor = this.color
    c.shadowBlur = 20
    c.fill()
    c.closePath()
    c.restore()
}

Star.prototype.update = function() {
    this.draw()

    //When ball hits bottom of screen
    if(this.y + this.radius + this.velocity.y > canvas.height - groundHeight){
        this.velocity.y = -this.velocity.y * this.friction
        this.shatter()
    }
    else{
        this.velocity.y += this.gravity
    }

    //Hits side of screen
    if(this.x + this.radius + this.velocity.x > canvas.width || this.x - this.radius <= 0){
        this.velocity.x = -this.velocity.x * this.friction
        this.shatter()
    }

    this.x += this.velocity.x
    this.y += this.velocity.y

}

Star.prototype.shatter = function(){
    this.radius -= 3
    for(let i = 0; i < 8; i++){
        miniStars.push(new MiniStar(this.x, this.y, 2))
    }

}

function MiniStar(x, y, radius, color){
    Star.call(this, x, y, radius, color)
    this.color = '#2ae846'
    this.velocity = {
        x: (Math.random() - 0.5) * 10,
        y: (Math.random() - 0.5) * 30 
    }
    this.friction = 0.8
    this.gravity = 0.1
    this.ttl = 100
    this.opacity = 1
    
}

MiniStar.prototype.draw = function() {
    c.save()
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = `rgba(42,232,70, ${this.opacity})`
    c.shadowColor = '#2ae846'
    c.shadowBlur = 20
    c.fill()
    c.closePath()
    c.restore()
}

MiniStar.prototype.update = function() {
    this.draw()

    if(this.y + this.radius + this.velocity.y > canvas.height - groundHeight){
        this.velocity.y = -this.velocity.y * this.friction
    }
    else{
        this.velocity.y += this.gravity
    }

    this.x += this.velocity.x
    this.y += this.velocity.y
    this.ttl -= 1
    this.opacity -= 0.0001 * this.ttl
}

function init() {
    // ... existing code ...
    const starCount = window.innerWidth < 768 ? 100 : 200;
    for(let i = 0; i < starCount; i++){
        // ... create stars ...
    }
}