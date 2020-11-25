const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() 
{
  createCanvas(800,400);

	engine = Engine.create();
	world = engine.world;

  surface=new Ground(400,400,150,15)

  //level 1
  box1=new Box(330,300,20,20)

  //level 2
  block8=new Box(330,235,30,40);
  block9=new Box(360,235,30,40);
  block10=new Box(390,235,30,40);
  block11=new Box(420,235,30,40);
  block12=new Box(450,235,30,40);
  
  //level 3
  block13=new Box(360,195,30,40);
  block14=new Box(390,195,30,30);
  block15=new Box(420,195,30,40);

  //top
  block16=new Box(390,155,30,40)

  Engine.run(engine);

}

function draw() 
{
  background(255,255,255);  
  drawSprites();

surface.display()
box1.display()
box8.display()
box9.display()
box10.display()
box11.display()
block12.display()
block13.display()
block14.display()
block15.display()
block16.display()
}