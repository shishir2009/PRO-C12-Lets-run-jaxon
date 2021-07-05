var runner, runner_running;
var path, invisiblePath1, invisiblePath2, pathImage;

function preload(){
  //pre-load images
  runner_running = loadAnimation("Runner-1.png","Runner-2.png");
  pathImage = loadImage("path.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  
  path = createSprite(200,200,400,400);
  path.addImage("path", pathImage);
  path.velocityY = 4;

  runner = createSprite(200,350,20,50);
  runner.addAnimation("running", runner_running);
  runner.scale = 0.07;


  invisiblePath1=createSprite(60,200,10,400);
  invisiblePath1.visible=false;

  invisiblePath2=createSprite(340,200,10,400);
  invisiblePath2.visible=false;

}

function draw() {
  background(0);

  console.log(path.y);

  if(path.y > 400){
  path.y = height/2;
}

runner.x=mouseX;
runner.collide(invisiblePath1);
runner.collide(invisiblePath2);

  drawSprites();
}
