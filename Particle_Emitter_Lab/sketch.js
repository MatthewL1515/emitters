let emitters = []
let G

function setup() {
  createCanvas(400, 600);

  emitters.push( new Emitter( width/2, 30 ) )
  
  G = createVector(0,0.1)
  ellipseMode(RADIUS)
  noStroke()
}

function draw() {
  background(220);
  for( let e of emitters ) {
    e.update()  
  }
}

class Emitter {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.particles = []
    this.particleTypes = [Particle, StarParticle, TrailParticle]

    let initialParticles = random(30, 60)
    for (let i = 0; i < initialParticles; i++) {
      this.particles.push(this.createParticle())
    }
  }

  createParticle() {
    let T = random(this.particleTypes)
    return new T(this.x, this.y)
  }

  update() {
    let particlesNum = random(1, 3);
    for (let i = 0; i < particlesNum; i++) {
      this.particles.push(this.createParticle())
    }

    for (let p of this.particles) {
      p.applyForce(G)
      p.update()
      p.draw()
    }
  }
}


function mouseClicked() {
  emitters.push( new Emitter(mouseX,mouseY) )
}
