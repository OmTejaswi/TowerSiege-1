class block  {
    constructor(x, y) {
   
     var physics = {
        density:1
      }

      this.body = Bodies.rectangle(x,y,30,40,physics);
      World.add(world,this.body);

      this.x = x;
      this.y = y;

      this.fade = 225;

    }
    display() {
      var pos = this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,30,40);
      

    }
    show() {
      
      if(this.body.speed<3) {
         this.display();

      } else {
        push();
        World.remove(world,this.body);
        this.fade-= 1;
        tint(255,this.fade);
        pop();
      }
      
    }
    
  };
  