const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var holder, ball, ground;
var stand1, stand2;
var ball;
var slingShot;
var polygon_img;

function preload(){
    polygon_img = loadImage("polygon.png");
}

function setup(){
    createCanvas(900, 400);

    engine = Engine.create();
    world = engine.world;

    Engine.run(engine);
    
    ground = new Ground(width/2, height/2, width, height)
    stand1 = new Ground(390, 300, 250, 10);
    stand2 = new Ground(700, 200, 200, 10);

    //level1
    block1 = new Block(300, 275, 30, 40);
    block2 = new Block(330, 275, 30, 40);
    block3 = new Block(360, 275, 30, 40);
    block4 = new Block(390, 275, 30, 40);
    block5 = new Block(420, 275, 30, 40);
    block6 = new Block(450, 275, 30, 40);
    block7 = new Block(480, 275, 30, 40);

    //level2
    block8 = new Block(330, 235, 30, 40);
    block9 = new Block(360, 235, 30, 40);
    block10 = new Block(390, 235, 30, 40);
    block11 = new Block(420, 235, 30, 40);
    block12 = new Block(450, 235, 30, 40);

    //level3
    block13 = new Block(360, 195, 30, 40);
    block14 = new Block(390, 195, 30, 40);
    block15 = new Block(420, 195, 30, 40);

    //level4
    block16 = new Block(390, 155, 30, 40);

    //STAND 2

    ball = Bodies.circle(50, 200, 20)
    World.add(world, ball);

    slingShot = new Sling(this.ball, {x:100, y:200})

}

function draw() {
    background(0);

    fill(255)
    ground.display();
    stand1.display();
    stand2.display();

    fill(rgb(252, 194, 235));
    //pink
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    fill(rgb(221, 194, 252));
    //purple
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    fill(rgb(194, 252, 249));
    //blue
    block13.display();
    block14.display();
    block15.display();

    fill(rgb(195, 252, 194));
    //green
    block16.display();

    imageMode(CENTER);
    image(polygon_img, ball.position.x, ball.position.y, 40, 40)

    slingShot.display();

}

function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x:mouseX, y:mouseY});   
}

function mouseReleased(){
    slingShot.fly();
}


