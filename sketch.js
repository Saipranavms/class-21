
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var radius=40
function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	groundobj =new Ground(width/2,670,width,20);
  leftside = new Ground(1100,600,20,120);
  rightside = new Ground(1250,600,20,120); 
	Engine.run(engine);
  
	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:0.2
	}
	ball=Matter.Bodies.circle(260,100,radius/2,ball_options)
	World.add(world,ball)
}


function draw() {
  rectMode(CENTER);
  keyPressed()
  background("black");
  
  groundobj.display()
  leftside.display()
  rightside.display()
  
  drawSprites();

 ellipse(ball.position.x,ball.position.y,20)
}

function keyPressed() 
{ 
	if (keyCode === UP_ARROW) {
 Matter.Body.applyForce(ball,ball.position,{x:0.3,y:-0.5}); } 
}

