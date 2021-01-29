
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer1,ground1,stone1,rubber1

function preload()
{
	
}

function setup() {
	createCanvas(600,600);
    

	engine = Engine.create();
	world = engine.world;

   hammer1 = new Hammer(100,2,80,40)
   stone1 = new Stone(250,2,40,40)
   rubber1 = new Rubber(350,2,30,30)
	ground1 = new Ground(200,500,1000,20)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(150);
  
  hammer1.display();
  ground1.display();
  stone1.display();
  rubber1.display();

  drawSprites();
 
}



