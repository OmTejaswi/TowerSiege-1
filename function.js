function mouseDragged() {
    Matter.Body.setPosition(this.hexagon,{x:mouseX , y: mouseY})
}

function mouseReleased() {
     chain1.fly();
}

function keyPressed() {
    if(keyCode == 32) {
       // window.location.reload();
       chain1.attach(hexagon);
    }
}