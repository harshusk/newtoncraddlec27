const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var c1,c2,c3,c4,c5,b1,b2,b3,b4,b5;
var rod;
var engine,world;

function setup() {
  createCanvas(400,400);

  engine=Engine.create();
  world=engine.world;

  rod=new Rod();
  b1=new Bob(80);
  b2=new Bob(140);
  b3=new Bob(200);
  b4=new Bob(260);
  b5=new Bob(320);

  c1=new Chain(b1.body,rod.body,-120,0);
  c2=new Chain(b2.body,rod.body,-60,0);
  c3=new Chain(b3.body,rod.body,0,0);
  c4=new Chain(b4.body,rod.body,+60,0);
  c5=new Chain(b5.body,rod.body,120,0);

  
  
  
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  rod.disp();
  b1.disp();
  b2.disp();
  b3.disp();
  b4.disp();
  b5.disp();

  c1.disp();
  c2.disp();
  c3.disp();
  c4.disp();
  c5.disp();

  
}

function keyPressed(){
  if(keyCode==UP_ARROW){
    Matter.Body.applyForce(b1.body,b1.body.position,{x: -0.005, y: -10});
  }
}