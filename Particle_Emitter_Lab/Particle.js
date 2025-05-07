class Particle {
  constructor(x,y) {
    this.position = createVector(x,y)
    this.velocity = p5.Vector.random2D().mult(random(0.5,3))
    this.acceleration = p5.Vector.random2D()
    this.r = random(1,20)
    this.lifespan = 255
    
    // Random Color
    this.color = color(random(255), random(255), random(255))
  }
  
  update() {
    this.velocity.add(this.acceleration)
    this.position.add(this.velocity)   
    this.acceleration.mult(0)
    this.lifespan -= 2
  }
  
  isDead() {
    return this.lifespan < 0
    // if( this.lifespan < 0 ) {
    //   return true 
    // }
    // return false
  }
  
  draw() {
    fill(this.color, this.lifespan)
    circle(this.position.x,this.position.y,this.r)
  }
  
  // f is a p5.Vector
  applyForce(f) {
    this.acceleration.add(f)
  }
  
  
  static createStandardParticleAt(x,y) {
    return new Particle(
      x,y
    )
  }
}
