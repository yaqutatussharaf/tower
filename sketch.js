const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block10, block11, block12, block13, block14;
var block15, block16, block17, block18, block19, block20, block21, block22;

var ground1, ground2, ground3;

var chain;
var poly;
var hexImg;
var Turns;

function preload() {

  hexImg = loadImage("polygon.png");

}

function setup() {

  createCanvas(1200,500);
  engine = Engine.create();
  world = engine.world;

 fill("brown")
  ground1 = new Ground(600,550,1200,20);
  stand1 = new Stand(390,300,260,10);
  stand2 = new Stand(700,200,200,10);

  strokeWeight(2);

  //level one
  block1 = new Block(285,275,30,40);
  block2 = new Block(315,275,30,40);
  block3 = new Block(345,275,30,40);
  block4 = new Block(375,275,30,40);
  block5 = new Block(405,275,30,40);
  block6 = new Block(435,275,30,40);
  block7 = new Block(465,275,30,40);
  block8 = new Block(495,275,30,40);

  //level two
  block9 = new Block(315,235,30,40);
  block10 = new Block(345,235,30,40);
  block11 = new Block(375,235,30,40);
  block12 = new Block(405,235,30,40);
  block13 = new Block(435,235,30,40);
  block14 = new Block(465,235,30,40);
  //level three
  block15 = new Block(345,195,30,40);
  block16 = new Block(375,195,30,40);
  block17 = new Block(405,195,30,40);
  block18 = new Block(435,195,30,40);
  //top
  block19 = new Block(375,155,30,40);
  block20 = new Block(405,155,30,40);

  //stand2
  block21 = new Block(625,175,30,40);
  block22 = new Block(655,175,30,40);
  block23 = new Block(685,175,30,40);
  block24 = new Block(715,175,30,40);
  block25 = new Block(745,175,30,40);
  block26 = new Block(775,175,30,40);

//level2
 block27 = new Block(655,135,30,40);
 block28 = new Block(685,135,30,40);
 block29 = new Block(715,135,30,40);
 block30 = new Block(745,135,30,40);
 //level3
 block31 = new Block(685,95,30,40);
 block32 = new Block(715,95,30,40);

  polygon = Bodies.circle(150, 200, 20);
  World.add(world, polygon);

  chain = new Chain(this.polygon,{x:150, y:160});

  Turns = 0;

}

function draw() {

  background("black");

  Engine.update(engine);

  fill("brown");
  ground1.display();
  stand1.display();
  stand2.display();

  fill("rgb(135, 205, 236)");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();

  fill("rgb(0,219,204)");
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();

  fill("rgb(0,214,139)");
  block15.display();
  block16.display();
  block17.display();
  block18.display();

  fill("rgb(59,211,0)");
  block19.display();
  block20.display();

  fill("rgb(255,2,200)");
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();

  fill("rgb(255,127,223)");
  block27.display();
  block28.display();
  block29.display();
  block30.display();

  fill("rgb(226,173,255)");
  block31.display();
  block32.display();

  chain.display();

  imageMode(CENTER);
  image(hexImg, polygon.position.x, polygon.position.y, 40, 40);

  strokeWeight(1.5);
  stroke("white");
  textSize(22);
  textFont("Comic Sans MS");
  text("Drag the hexagon behind, then release.",50,50);
  text("Turns: " +Turns,700,300);
  text("Press 'Space' To get a new hexagon.",700,50);
  stroke("red")
  text("Destroy the towers to win",700,450);

}


function mouseDragged() {
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}

function mouseReleased() {
  chain.fly();
}

function keyPressed() {

	if(keyCode === 32) {
		Matter.Body.setPosition(polygon, {x:150, y:200});
		chain.attach(this.polygon);
    Turns = Turns+1;
  }
  
}