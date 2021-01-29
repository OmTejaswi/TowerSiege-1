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

    block1.show();
    block2.show();
    block3.show();
    block4.show();
    block5.show();
    block6.show();
    pop();

    push()
    fill("#FFBEC4");
    block7.show();
    block8.show();
    block9.show();
    block10.show();
    pop();

    push()
    fill("#00E4D0");
    block11.show();
    block12.show();
    pop();

    push();
    fill("#807D78");
    block13.show();
    pop();

    push();
    fill("#67D1EA");
    block14.show();
    block15.show();
    block16.show();
    block17.show();
    block18.show();
    pop();

    push();
    fill("#00E4D0");
    block19.show();
    block20.show();
    block21.show();
    pop();

    push();
    fill("#FFBEC4");
    block22.show();
    pop();

    imageMode(CENTER);
    image(hexagonImg,hexagon.position.x,hexagon.position.y,50,50);

    chain1.display();

    drawSprites();

    push();
    fill("white");
    stroke("black");
    textSize(25);
    text("Drag the Hexagon and it toward the blocks",50,50);
    textSize(15);
    text("Press SPACE key to get another chance to break the pyramid",700,500);
    pop();
}