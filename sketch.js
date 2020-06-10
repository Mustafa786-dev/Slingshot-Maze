const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine,world;
var ground;

function setup() {
  createCanvas(800,600);
  engine=Engine.create();
  world=engine.world;

  ground1 = new Ground(600,250,200,20);
  ground2 = new Ground(400,590,800,20);

  box1 = new Box(570,220,30,50);
  box2 = new Box(600,220,30,50);
  box3 = new Box(630,220,30,50);
  box4 = new Box(615,170,30,50);
  box5 = new Box(585,170,30,50);
  box6 = new Box(600,120,30,50);
}

function draw() {
  background(100); 
  Engine.update(engine);
  ground1.display();
  ground2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
}