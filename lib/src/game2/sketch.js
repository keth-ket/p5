let bgImg;
let cactus;
let cactusRatio;
let fruit;
let fruitX;
let fruitY;
let result;
let begin;
let lastResetTime;
let offSet
const resizeRatio = 8;
const resetInterval = 2000;

function preload()
{
  bgImg = loadImage('assets/BackgroundGame2.jpg');
  cactus = loadImage('assets/cactus.png');
  fruit = loadImage('assets/fruit.png');
  purpleFruit = loadImage('assets/purpleFruit.png');
}

function setup() 
{
  createCanvas(windowWidth, windowHeight);
  cactusRatio = cactus.width/cactus.height;

  bgImg.resize(windowWidth, windowHeight);
  cactus.resize(windowHeight * cactusRatio, windowHeight);
  fruit.resize(fruit.width / resizeRatio, fruit.height / resizeRatio);
  purpleFruit.resize(fruit.width, fruit.height);
  randomposition();
  offSet = fruit.height * 1.5;
  lastResetTime = millis(); // Initialize the last reset time
}

function draw() 
{
  // put drawing code here
  background(bgImg);
  //display the cactus
  image(cactus, windowWidth/2 - cactus.width/2, windowHeight - cactus.height);
  if(mouseOnFruit())
  {
    image(purpleFruit, fruitX, fruitY);
  }
  else
  {
    image(fruit, fruitX, fruitY);
  }


  if (millis() - lastResetTime > resetInterval) 
  {
    // Reset the timer
    lastResetTime = millis();   
    // Reset the fruit position
    randomposition();
  }
  else if(mouseOnFruit() && mouseIsPressed)
  {
    // Reset the timer
    lastResetTime = millis();   
    // Reset the fruit position
    randomposition();
  }
  
  //load the fruit
  
}

function randomposition()
{
  fruitX = windowWidth / 2 + random(-cactus.width/2 + offSet, cactus.width / 2 - offSet);
  fruitY = random(offSet, windowHeight - offSet);
}

function mouseOnFruit()
{
  if(mouseX >= fruitX && mouseX <= fruitX + fruit.width && mouseY >=fruitY && mouseY <= fruitY + fruit.height)
  {
    return true;
  }

  return false;
}

