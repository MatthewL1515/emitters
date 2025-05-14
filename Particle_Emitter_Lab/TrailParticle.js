class TrailParticle extends Particle {
  constructor(x,y) {
    super(x,y)
    this.trail = []
    this.maxTrail = 15
  }
  
  update() {
    super.update()
    this.trail.push(this.position.copy())
  }
  
  draw() {
    noFill()
    stroke(this.color, this.lifespan)
    beginShape()
    
    for (let i = 0; i < this.trail.length; i++) {
      vertex(this.position.x, this.position.y)
    }
    endShape()
    super.draw()
  }
}
