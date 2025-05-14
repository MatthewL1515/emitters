class StarParticle extends Particle {
  constructor(x,y) {
    super(x,y)
    this.angle = random(TWO_PI)
    this.innerRadius = random(5,15)
    this.outerRadius = random(15,30)
    this.sides = int(random(5,8))
    this.step = random(1,2)
  }
  
  draw() {
    push()
    translate(this.position.x, this.position.y)
    rotate(this.angle)
    fill(this.color, this.lifespan)
    noStroke()
    beginShape()
    let numPoints = this.sides * 2
    let theta = 0
    let dt = TWO_PI / numPoints
    
    for (let i = 0; i < numPoints; i++) {
      let radius
      if (i % 2 === 0) {
        radius = this.innerRadius
      } else {
        radius = this.outerRadius
      }
      
      let x = radius * cos(theta + dt * i)
      let y = radius * sin(theta + dt * i)
      vertex(x,y)
    }
    endShape()
    pop()
  }
}
