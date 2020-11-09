var background,backgroundImage;
var redballoon,redballoonImage;
var greenballoon,greenballoonImage;
var blueballoon,blueballoonImage;
var pinkballoon,pinkballoonImage;
var bow,bowImage;
var arrow,arrowImage;
var score=0;
var redGroup,blueGroup,greenGroup,pinkGroup,arrowGroup;


function preload(){
backgroundImage=loadImage("background0.png")
redballoonImage=loadImage("red_balloon0.png")
greenballoonImage=loadImage("green_balloon0.png")
blueballoonImage=loadImage("blue_balloon0.png")
pinkballoonImage=loadImage("pink_balloon0.png")
bowImage=loadImage("bow0.png")
arrowImage=loadImage("arrow0.png")
} 

function setup() {
  createCanvas(600, 600);
  background=createSprite(0,0,600,600)
  background.addImage("background",backgroundImage)
  background.scale=3.0
   
bow=createSprite(510,200,0,0)
   bow.addImage("bow",bowImage)
    bow.scale=1.5
  
  redGroup=new Group();
  blueGroup=new Group();
  greenGroup=new Group();
  pinkGroup=new Group();
  arrowGroup=new Group();
  
  
 
  
  
}

function draw() {
   background.velocityX=-2
  if(background.x<0){
   background.x=200;
  }
 bow.y= World.mouseY;
if (keyWentDown("space")){
  createarrow();
    
}
 if(arrowGroup.isTouching(redGroup)){
   redGroup.destroyEach();
   arrowGroup.destroyEach();
   score=score+1
 }
  
  if(arrowGroup.isTouching(blueGroup)){
   blueGroup.destroyEach();
   arrowGroup.destroyEach();
   score=score+2
 }
  
  if(arrowGroup.isTouching(greenGroup)){
   greenGroup.destroyEach();
   arrowGroup.destroyEach();
   score=score+3
 }
  
  if(arrowGroup.isTouching(pinkGroup)){
   pinkGroup.destroyEach();
   arrowGroup.destroyEach();
   score=score+4
 }
  var  select_balloon=Math.round(random(1,4));
  if(frameCount%80===0)
    {
  if(select_balloon===1){
    redballoon();
  }
  else if(select_balloon===2){
    greenballoon();
  }
  else if(select_balloon===3){
    blueballoon();
  }
  else if(select_balloon===4){
    pinkballoon();
  }
    } 

  
  drawSprites();
  fill("yellow")
  stroke("black")
  strokeWeight(3)
  textSize(15)
  text("SCORE:"+score,500,100)
  
  }  
  

function createarrow()
{
  arrow=createSprite(400,400,10,10)
  arrow.addImage(arrowImage);
  arrow.y=bow.y
  arrow.velocityX=-6
  arrow.scale=0.3
  arrow.lifetime=100
  arrowGroup.add(arrow)
  
  
  
  
  
}

function redballoon(){
  var red=createSprite(0,Math.round(random(20,370)),10,10);
  red.addImage(redballoonImage);
  red.velocityX=3
  red.lifetime=150
  red.scale=0.1
  redGroup.add(red)
}

function greenballoon(){
  var green=createSprite(0,Math.round(random(20,370)),10,10);
  green.addImage(greenballoonImage);
  green.velocityX=3
  green.lifetime=150
  green.scale=0.1
  greenGroup.add(green)
}
  function blueballoon(){
  var blue=createSprite(0,Math.round(random(20,370)),10,10);
  blue.addImage(blueballoonImage);
  blue.velocityX=3
  blue.lifetime=150
  blue.scale=0.1
    blueGroup.add(blue)
  }
    function pinkballoon(){
  var pink=createSprite(0,Math.round(random(20,370)),10,10);
  pink.addImage(pinkballoonImage);
  pink.velocityX=3
  pink.lifetime=150
  pink.scale=1.0
      pinkGroup.add(pink)
    }
 




