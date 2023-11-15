let bgImg;
let cactus;
let cactusRatio;
let fruit;
let fruits = new Array();
let result;
let lastResetTime = new Array();
let offSet;
let scream;
const resizeRatio = 8;
const resetInterval = 900;

class Fruit{
  constructor(x, y, width, height)
  {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
  }
}

function preload()
{
  //load all the neccessary image
  bgImg = loadImage('assets/BackgroundGame2.jpg');
  cactus = loadImage('assets/cactus.png');
  fruit = loadImage('assets/fruit.png');
  purpleFruit = loadImage('assets/purpleFruit.png');

  //load sounds
  //soundFormats('mp3', 'ogg');
  scream = loadSound('assets/scream.mp3');
}

function setup() 
{
  createCanvas(windowWidth, windowHeight);
  cactusRatio = cactus.width/cactus.height;
  bgImg.resize(windowWidth, windowHeight);
  cactus.resize(windowHeight * cactusRatio, windowHeight);
  fruit.resize(fruit.width / resizeRatio, fruit.height / resizeRatio);
  purpleFruit.resize(fruit.width, fruit.height);
  offSet = fruit.height * 1.5;

  for(var i = 0; i < 3; i++)
  {
    let obj = new Fruit(randompositionX(), randompositionY(), fruit.width, fruit.height);
    fruits.push(obj);
    lastResetTime.push(millis() + i*(resetInterval / 3));
  }
}

function draw() 
{
  // put drawing code here
  background(bgImg);
  //display the cactus
  image(cactus, windowWidth/2 - cactus.width/2, windowHeight - cactus.height);
  //load the fruit
  for(var i = 0; i < 3; i++)
  {
    if(mouseOnFruit(fruits[i]))
    {
      image(purpleFruit, fruits[i].x, fruits[i].y);
    }
    else
    {
      image(fruit, fruits[i].x, fruits[i].y);
    }

    if (millis() - lastResetTime[i] > resetInterval) 
    {
      // Reset the timer
      lastResetTime[i] = millis();   
      // Reset the fruit position
      fruits[i].x = randompositionX();
      fruits[i].y = randompositionY();
    }
    else if(mouseOnFruit(fruits[i]) && mouseIsPressed)
    {
      // Reset the timer
      lastResetTime[i] = millis();   
      // Reset the fruit position
      fruits[i].x = randompositionX();
      fruits[i].y = randompositionY();
    }
  }

  /*
  
  if(!mouseOnFruit() && mouseIsPressed)
  {
    scream.play();
  }
  */
}

function randompositionX()
{
  return windowWidth / 2 + random(-cactus.width/2 + offSet, cactus.width / 2 - offSet);
}

function randompositionY()
{
  return random(offSet, windowHeight - offSet);
}

function mouseOnFruit(obj)
{
  if(mouseX >= obj.x && mouseX <= obj.x + obj.width && mouseY >= obj.y && mouseY <= obj.y + obj.height)
  {
    return true;
  }

  return false;
}

