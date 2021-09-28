var path;
var pathImg;

var bombImg;
var energyDrinkImg;
var coinImg;
var powerImg;
var runnerAnimation;

var invisWallLeft;
var inviswallRight;


function preload() {
  pathImg = loadImage("path.png");
  powerImg = loadImage("power.png");
  coinImg = loadImage("coin.png");
  energyDrinkImg = loadImage("energyDrink.png");
  bombImg = loadImage("bomb.png");
  runnerAnimation = loadAnimation("Runner-1.png", "Runner-2.png");



  //pre-load images
}

function setup() {
  createCanvas(400, 400);
  path = createSprite(200, 200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  runner =  createSprite(300,350);
  runner.addAnimation("running",runnerAnimation);
  runner.scale = 0.05;

  invisWallLeft = createSprite(10,350,20,100);
  invisWallRight = createSprite(390,350,20,100);
  




  
  //create sprites here
}

function draw() {
  background(0);

  if(path.y > 400){
    path.y = height/2;
  }
  runner.x = World.mouseX;
  runner.collide(invisWallLeft);
  runner.collide(invisWallRight);

  
  drawSprites();

  

  

}

