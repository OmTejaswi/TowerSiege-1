function mouseDragged() {
    Matter.Body.setPosition(this.hexagon,{x:mouseX , y: mouseY})
}

function mouseReleased() {
     chain1.fly();
}