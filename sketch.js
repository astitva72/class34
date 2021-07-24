const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var chain1;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
  stoneimage = loadImage("images/rock1.png")
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);
  box1 = new Box(200,100,70,50) 
  box2 = new Box(300,150,70,50)
  box3 = new Box(400,100,70,50)
  box4 = new Box(500,100,70,50)
  c1 = new Slingshot(box1.body,box2.body)
  c2 = new Slingshot(box2.body,box3.body)
  c3 = new Slingshot(box3.body,box4.body)
  stone =  Bodies.rectangle(700,150,100,100);
  World.add(myWorld,stone);



}

function draw() {
  background(bg);  
  Engine.update(myEngine);
 imageMode(CENTER)
  image(stoneimage,stone.position.x,stone.position.y,100,100)

  box1.show()
  box2.show()
  box3.show()
  box4.show()
  c1.show()
  c2.show()
  c3.show()

 
  }
  function keyPressed(){
    if( keyCode===RIGHT_ARROW){
      Matter.Body.applyForce(box4.body,box4.body.position,{x:0.5,y:0})
    }
  }

  
