let bgImg;
let cactus;
let cactusRatio;
let fruit;
let fruitX;
let fruitY;
let result;
let begin;
let lastResetTime;
const resizeRatio = 10;
const resetInterval = 2000;

function preload()
{
  bgImg = loadImage('assets/BackgroundGame2.jpg');
  cactus = loadImage('assets/cactus.png');
  fruit = loadImage('assets/fruit.png');
}

function setup() 
{
  createCanvas(windowWidth, windowHeight);
  cactusRatio = cactus.width/cactus.height;

  bgImg.resize(windowWidth, windowHeight);
  cactus.resize(windowHeight * cactusRatio, windowHeight);
  fruit.resize(fruit.width / resizeRatio, fruit.height / resizeRatio);
  fruitX = 0;
  fruitY = 0;
  lastResetTime = millis(); // Initialize the last reset time
}

function draw() 
{
  // put drawing code here
  background(bgImg);
  //display the cactus
  image(cactus, windowWidth/2 - cactus.width/2, windowHeight - cactus.height);

  //load the fruit
  image(fruit, fruitX, fruitY);

  if (millis() - lastResetTime > resetInterval) 
  {
    // Reset the timer
    lastResetTime = millis();
    
    // Reset the fruit position
    fruitX = windowWidth / 2 + random(-cactus.width / 2, cactus.width / 2);
    fruitY = random(0, windowHeight);
  }
}

function randomposition()
{
  fruitX = windowWidth/2 + (int)(Math.random() * cactus.width) + -cactus.width/2;;
  fruitY = (int)(Math.random() * windowHeight);
}

let lastSpot;