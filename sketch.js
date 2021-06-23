
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var ball;
var ground;
var wall1;
var wall2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 670, 800, 20);

	wall1 = new Ground(550, 620, 20, 100);
	wall2 = new Ground(670, 620, 20, 100);

	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2,
	}
    ball = Bodies.circle(100, 600, 30, ball_options);
	World.add(world, ball);

	

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);

  ground.display();
  wall1.display();
  wall2.display();
  ellipse(ball.position.x, ball.position.y, 30, 30);
  Engine.update(engine);

  
  
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, {x: 0, y: 0}, {x: 140, y: -140})
	  }
}