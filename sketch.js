var mr,fr;
var o1,o1,o3,o4;

function setup() {
  createCanvas(800,400);
  mr = createSprite(400, 200, 50, 50);
  fr = createSprite(200, 200, 50, 50);
  o1 = createSprite(500,400,50,50);
  o2 = createSprite(500,0,50,50);
  o3 = createSprite(100,50,50,50);
  o4 = createSprite(200,50,50,50);

  o1.velocityY=-5
  o2.velocityY=5
  o1.debug=true
  o2.debug=true
}

function draw() {
  background(255,255,255);  

mr.x = World.mouseX
mr.y = World.mouseY

if(isTouching(mr,o4)){


  mr.shapeColor="red";
  o4.shapeColor="red"
}else {
  mr.shapeColor="green";
  o4.shapeColor="green"
}
  bounceoff(o1,o2);
  
  


  drawSprites();
}
