var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var line1,line2,line3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	line1=createSprite(400,height-50,200,20);
	line1.shapeColor=color("red");

	line2=createSprite(500,height-90,20,100);
	line2.shapeColor=color("red");

	line3=createSprite(300,height-90,20,100);
	line3.shapeColor=color("red");
	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);

	
	line1=Bodies.rectangle(400,line1.height,200,20,{isStatic:true});
	World.add(world, line1);

	line2=Bodies.rectangle(line2.x,line2.height,20,200,{isStatic:true});
	World.add(world, line2);

	line3=Bodies.rectangle(line2.x,line2.height,20,200,{isStatic:true});
	World.add(world, line3);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 620, width, 10 , {restitution:0.0,isStatic:true} );
	 World.add(world, ground);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
	
    
  }
}



