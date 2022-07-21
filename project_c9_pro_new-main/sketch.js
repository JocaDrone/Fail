var backyground;
var  greenwall;
var  redwall;
var  waterwall;
var  yellowwall;
var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
  box.shapeColor = "purple";
  redwall = createSprite(200,300,70,30)
  redwall.shapeColor = "red"
}
 
function draw() 
{
  // escreva o código para alterar a cor de fundo 
  // para vermelho quando a seta para direita (RIGHT_ARROW) for pressionada
  
 

  background("violet");
  
  if(box.collide(redwall)){

    background("orange")

  }
  /*if(keyIsDown(RIGHT_ARROW)){
    background("red");
    backyground = "right";
  }

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    backyground = "left";
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
    backyground = "up";
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
    backyground = "down";
  }*/

  if(keyIsDown(DOWN_ARROW)){
    box.position.y = box.position.y + 3;
  }

  if(keyDown("w")){
    box.position.y = box.position.y - 3;
  }

  if(keyDown("a")){
    box.position.x = box.position.x - 3;
  }

  if(keyDown("d")){
    box.position.x = box.position.x + 3;
  }
  
  drawSprites(); 
}

