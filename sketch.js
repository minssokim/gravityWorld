let ball;

function setup() {
  createCanvas(400, 200);

  ball = new Particle();
}


function draw() {
  background(220);

  //let gravity = createVector(0, 0.3);
  //ball.addForce(gravity);

  let hand = createVector(-mouseX/10,-mouseY/10)
  ball.addForce(hand)



 //et wind = createVector(0.1,0);
  //ball.addForce(wind);

  ball.update();
  ball.show();
 // ball.wind();
}
