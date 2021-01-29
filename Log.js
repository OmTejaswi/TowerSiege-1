class block  {
    constructor(x, y) {
   
     

      this.body = Bodies.rectangle(x,y,30,40);
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
  