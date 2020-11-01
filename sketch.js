
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var rope1,rope2,rope3,rope4,rope5;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	bobDiameter=25	;
	roof= new Roof(width/2,200,400,20);

	bobObject1= new Bob(520,420,20)
	bobObject2= new Bob(560,420,20)
	bobObject3= new Bob(600,420,20)
	bobObject4= new Bob(640,420,20)
	bobObject5= new Bob(680,420,20)

	rope1=new Rope(bobObject1.body,roof.body,-bobDiameter*2, 0)

	rope2=new Rope(bobObject2.body,roof.body,-bobDiameter*1, 0)
	rope3=new Rope(bobObject3.body,roof.body,0, 0)
	rope4=new Rope(bobObject4.body,roof.body,bobDiameter*1, 0)
	rope5=new Rope(bobObject5.body,roof.body,bobDiameter*2, 0)

  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
  


  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  

 roof.display();
 bobObject1.display();
 bobObject2.display();
 bobObject3.display();
 bobObject4.display();
 bobObject5.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-40,y:-30});

	}
}


