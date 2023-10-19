let bgImg;
let cactus;
let cactusRatio;


function setup() 
{
  bgImg = loadImage('assets/BackgroundGame2.jpg');
  cactus = loadImage('assets/cactus.png');
  createCanvas(windowWidth, windowHeight);

  cactusRatio = cactus.width/cactus.height;
}

function draw() 
{
  // put drawing code here
  background(bgImg);

  //display the cactus
  image(cactus, 0, 0, width, height, 0, 0, cactus.width, cactus.height, CONTAIN, DOWN);
}
