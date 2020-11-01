class Bob {
    constructor(x, y) {
      var ball_options = {
        isStatic: false,
        restitution:1.1,
        friction:0.1,
        density:0.9,
      }
      this.body = Bodies.circle(x, y,20, ball_options);
      World.add(world, this.body);
    }
    display(){
      
      var pos =this.body.position;
 
      push();
     
      translate(pos.x, pos.y);
     
      
       stroke("black")
    strokeWeight(4);
      fill("cyan");
      circle(0, 0,40);
      pop();
    }
  }

 