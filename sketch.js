const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, dustbin1, dustbin2, dustbin3, ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	paper = new Paper(400, 100, 15);
	console.log(paper);
	options = {
		isStatic: true,
		density: 3
	}
	ground = Bodies.rectangle(400, 695, 800, 10, options);
	//Create the Bodies Here.

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  rect(ground.position.x, ground.position.y, 800, 10);
 
}



