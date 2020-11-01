class Roof {
    constructor(x,y,width,height) {
      var g_option = {
          isStatic: true
      }
      
      this.width = width;
      this.height = height;
      this.x=x;
      this.y=y;

      this.body = Bodies.rectangle(x,y,width,height,g_option);

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("purple");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };