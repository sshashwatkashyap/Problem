class Paperball {

   constructor(x, y){

    var options ={

        isStatic: false,
        'restitution': 0.3,
        'friction': 0.5,
        'density': 1.2
    }

    var ball = Bodies.circle(x, y,20, options);
    World.add(world,ball);

   }

   display(){

    var pos = ball.position;

    push();
    translate(pos.x, pos.y);
   // rotate(angle);
    ellipseMode(RADIUS);
    ellipse(ball.pos.x, ball.pos.y, 20, 20);
    fill("green");
    //rect(0, 0, this.width, this.height);
    pop();
  }
}


