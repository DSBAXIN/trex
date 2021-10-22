
var trex ,trex_running;
var ground,groundimage
function preload(){
  trex_running=loadAnimation("trex1.png","trex4.png","trex3.png")
groundimage=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(50,155,80,40)
 trex.addAnimation("jump",trex_running)
 trex.scale=0.5
ground=createSprite(300,170,600,20)
ground.addImage(groundimage)

}

function draw(){
  background("white")
  if (keyDown("space")){
    trex.velocityY=-12
  

  }
  trex.velocityY+=0.5
trex.collide(ground)
  drawSprites();

}
