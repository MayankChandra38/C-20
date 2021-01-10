const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  var option = {
    isStatic:true
  }
  ground = Bodies.rectangle(400,370,800,30,option);
  World.add(world,ground);

  var options = {
    restituion:1.0
  }
  ball = Bodies.circle(200,100,20,options);
  World.add(world,ball);
  console.log(ball);
}

function draw() {
  background("RED");
  rectMode(CENTER);

  Engine.update(engine);
  
  rect(ground.position.x,ground.position.x,800,30);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20);

  drawSprites();
}