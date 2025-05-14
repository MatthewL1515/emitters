class StarParticle extends Particle {
  constructor(x,y) {
    super(x,y)
    this.angle = random(TWO_PI)
    this.innerRadius = random(5,15)
    this.outerRadius = random(15,30)
    this.sides = int(random(5,8))
    this.step = random(1,2)
  }
}
