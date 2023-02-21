var path,boy,leftBoundary,rightBoundary;
var pathImg,boyImg;

function preload(){
boyImg = loadAnimantion("jake3.png","jake4.png","jake5.png");
pathImg = loadImagem("path.png");
}

function setup(){
  
createCanvas(400,400);

path = createSprite (200,200)
boy = createSprite (200,20,600,700)


path.addImage(pathImg);
path.velocityX=-6
path.scale=0.7;



boy.scale=0.08;
boy.addAnimation(boyImg);

leftBoundary=createSprite(250,200,100,800);
leftBoundary.visible = false;


rightBoundary=createSprite(410,200,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  boy.x=World.mouseX
  
 
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(rightBoundary);
  boy.collide(leftBoundary);

  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
