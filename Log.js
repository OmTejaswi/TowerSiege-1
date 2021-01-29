class block  {
    constructor(x, y) {
   
     var physics = {
        density:0.3
      }

      this.body = Bodies.rectangle(x,y,30,40,physics);
      World.add(world,this.body);

      this.x = x;
      this.y = y;

    }
    display() {
      var pos = this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,30,40);
    }
  };
  