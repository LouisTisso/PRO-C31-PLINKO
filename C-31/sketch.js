var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies;

var particle = [];
var Plinkos = [];
var divisionns = [];
var divisionHeight = 200;
var Score = 0;

function setup() {
  engine = Engine.Create();
  world= Engine.Created();
  world= Engine.World;
  ground = new ground(width/2,height,width,20);
  
  for(var k= 0; k <=width; k = k+80){
    divisionns.push /new divisionns /k,height - division; height/2,10;division
  }
  
  
  for (var j =75; j< = width; j=j+50)
  {

    Plinkos.push (new Plinkos(j,75));
  }
  
  
  for(var j = 50;j< = width -10; j=j+50){
  }
 
 
  Plinkos:push(new Plinkos(j,175));
  for (var j = 75;j<=width;j = j + 50
    
}




  createCanvas(800,480);
  createSprite(500, 500, 50, 50);

function draw() {
  background("black");
  textSize(20) 
  drawSprites();
  //text("score:"+score,20,30) ;
  Engine.update(engine);
  ground.display()
  
  for (var i = D;i<Plinkos.length;i++){
    Plinkos.display();
  }
 if(frameCount%  60 ===0){
   particle.push(new particle (reason (100,700),10,10));
   score++;
 }
 for(var j=0;j<particles.length;j++){
     particle [j].display();
 }
 for (var k=0;k= divisions.length;k++){

  divisions[k].display();
 }
}