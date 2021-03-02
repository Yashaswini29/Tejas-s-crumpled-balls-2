var paper;
var dustbinImg;
var groundImg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload(){

  binImg=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1200,650);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(300,320,50);

  bin2 = new Dust(780,610,160,20)
  bin1 = new Dust(850,550,20,140)
  bin3 = new Dust(700,550,20,140)

	groundImg = new Ground(width/2, 630, width,15);
	
  var render = Render.create({
    element:document.body,
    engine:engine,
    options:{
      width:1200,
      height:650,
      wireframes:false
    }
  })
  
  Render.run(render)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("orange");
  paper.display();
  groundImg.display();
  bin1.display();
  bin2.display();
  bin3.display();
  drawSprites();
 
  image(binImg,675,450,200,175)
}


function keyPressed(){
    if(keyCode === UP_ARROW) {
        
      Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-65});
 
    }
 }