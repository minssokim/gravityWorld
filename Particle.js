class Particle {
  constructor() {
    this.pos = createVector(width/2, height/3);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);

    this.c = color(0);
    this.w = 50;
  }

  addForce(aForce) {
    this.acc.add(aForce);//가속도에 힘 더하기
  }

  update() {
    this.vel.add(this.acc);//가속하기
    this.pos.add(this.vel);//위치에 속도 더하기

    this.acc.set(0, 0);
    this.vel.mult(o.95)
    this.checkEdge();
  }
  /*hand(){
    if (this.pos.x-25<mouseX <this.pos.x+25){
     ball.addForce(hand)
    }
 }
    */

  checkEdge() {
    if ((this.pos.y+this.w/2) > height) {//공의 위치가 세로축 중간을 넘으면
      this.pos.y = height-this.w/2;
      this.vel.y = this.vel.y * -1;//속도 줄이기
    }
    
    if (this.pos.x > width) {
      this.pos.x = 0;
    }
  }
 /* wind(){
    if (mouseIsPressed)
      this.pos.x=this.pos.x+1
  }
*/
  show() {
    fill(this.c);
    circle(this.pos.x, this.pos.y, this.w);
  }
}
