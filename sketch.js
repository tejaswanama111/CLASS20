var movingRect, fixedRect;



function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(200,200,40,60);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityX = 5;

  movingRect = createSprite(600,200, 60, 40);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityX = -5;
}

function draw() {
  background(0);  

 //movingRect.x = mouseX;
// movingRect.y = mouseY;
 /*

 if(movingRect.x - fixedRect.x  < fixedRect.width/2 + movingRect.width/2
  && fixedRect.x -movingRect.x < fixedRect.width/2 + movingRect.width/2
  && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2
  && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2) {

    fixedRect.shapeColor = "red";
    movingRect.shapeColor  = "red";
 }
 else {

  fixedRect.shapeColor  = "green";
  movingRect.shapeColor = "green";
 }
*/

if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
  && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2)
  {

    fixedRect.velocityX = fixedRect.velocityX *(-1);
    movingRect.velocityX = movingRect.velocityX * (-1);
  }

  if(fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2)
    {

      fixedRect.velocityY = fixedRect.velocityY *(-1);
      movingRect.velocityY = movingRect.velocityY *(-1);
    }

  drawSprites();
}