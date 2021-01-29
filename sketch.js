const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground1, ground2, ground3;

var block1, block2, block3, block4 , block5, block6;
var block7, block8, block9, block10;
var block11, block12, block13;

var block14, block15, block16 , block17 , block18, block19, block20, block21, block22;
var hexagon, hexagonImg;
var chain1;

function preload() {
 hexagonImg = loadImage("polygon.png");
}

function setup() {
    createCanvas(1280, 600);

   

    engine = Engine.create();
    world = engine.world;

    //create bodies here
    var physics = {
        density: 2
    }

    hexagon = Bodies.circle(70,250,20,physics);
    World.add(world,hexagon);

    ground1 = new Ground(300,400,250,10);
    ground2 = new Ground(800,300,250,10);
    ground3 = new Ground(width/2,580,width,20);

    block1 = new block(230,380);
    block2 = new block(260,380);
    block3 = new block(290,380);
    block4 = new block(320,380);
    block5 = new block(350,380);
    block6 = new block(380,380);

    block7 = new block(260,350);
    block8 = new block(290,350);
    block9 = new block(320,350);
    block10 = new block(350,350);

    block11 = new block(290,320);
    block12 = new block(320,320);

    block13= new block(305,290);

    block14 = new block(730,295);
    block15 = new block(760,295);
    block16 = new block(790,295);
    block17 = new block(820,295);
    block18 = new block(850,295);

    block19 = new block(760,265);
    block20 = new block(790,265);
    block21 = new block(820,265);

    block22 = new block(790,235);
    chain1 = new chain(hexagon,{x: hexagon.position.x, y: hexagon.position.y-30});

}

function draw() {

    Engine.update(engine);

    background("#3C2E2E");
    push();
    ground1.display();
    ground2.display();
    ground3.display();
    pop();

    push();
    fill("#67D1EA");

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    pop();

    push()
    fill("#FFBEC4");
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    pop();

    push()
    fill("#00E4D0");
    block11.display();
    block12.display();
    pop();

    push();
    fill("#807D78");
    block13.display();
    pop();

    push();
    fill("#67D1EA");
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    pop();

    push();
    fill("#00E4D0");
    block19.display();
    block20.display();
    block21.display();
    pop();

    push();
    fill("#FFBEC4");
    block22.display();
    pop();

    imageMode(CENTER);
    image(hexagonImg,hexagon.position.x,hexagon.position.y,50,50);

    chain1.display();

    drawSprites();
}