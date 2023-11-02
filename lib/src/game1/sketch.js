var bg_img;
var cactus_img;
var cactus_width;
var cactus_height;
var left_bound;
var top_bound;
var cactus_velocity  = 1;
var cactus_x;
var cactus_y;
var left_bound;
var right_bound;
var bottom_bound;
var top_bound;
var count = 0;
var lengths;
var cacti = new Array();
var display_cactus = true;
var next = true;
var lives = 3;

class Cactus {
  constructor(x,y,height,width) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.display = true;
    this.isAngry = false;
  }

 

  
  isInBounds() {
    return (right_bound-this.width>=windowWidth/4);
  }

}

function isInHitbox(cactus,x,y) {

  if (x>=cactus.x && x<=cactus.x + cactus.width && y>=cactus.y && y<= cactus.y + cactus.height) {
    return true;
  }
  return false;
}

function setup() {
  pixelDensity(4.0);
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  bg_img.resize(windowWidth/2, windowHeight/1.2);
  cactus_height = windowHeight/5;
  background(0);
  cactus_width = windowWidth/20;
  image(bg_img,windowWidth/4,windowHeight/20);
  left_bound = windowWidth/4;
  right_bound = windowWidth/2+windowWidth/4;
  bottom_bound = windowHeight/1.2+windowHeight/20;
  top_bound = windowHeight/20;
}

function preload() {
  bg_img = loadImage('assets/desert_background.jpg');
  cactus_img = loadImage('assets/cactus.png');
  cactus_mad = loadImage('assets/cactus_mad.png');
}

function add_cactus() {
  var height_m = Math.random() * cactus_height*2 + cactus_height/2;
  //print(height_m);
  //print(cactus_width);

  if (next) {
    cactus = new Cactus(right_bound-cactus_width,
      top_bound,
      height_m,
      cactus_width);
    cacti.push(cactus);
    next = false;
  }
  else {
    cactus = new Cactus(right_bound-cactus_width,
      bottom_bound - height_m,
      height_m,
      cactus_width);
    cacti.push(cactus);
    next = true;
  }
  print("add_cactus" + cacti[0].height);
}

function draw() {

  if (count % 180 == 0) {
    add_cactus();
  }
  image(bg_img,windowWidth/4,windowHeight/20);
  
  for (var i = 0; i < cacti.length; i++) {
    if (cacti[i].display) {
      if (cacti[i].x <= left_bound) {
        cacti[i].display = false;
      }
      //print(cacti[i].x,cacti[i].y,cacti[i].height,cacti[i].width,mouseX,mouseY);
      if (isInHitbox(cacti[i], mouseX, mouseY)) {
        if (cacti[i].isAngry == false) {
          lives--;
        }
        image(cactus_mad,cacti[i].x,cacti[i].y,cacti[i].width,cacti[i].height);
        cacti[i].isAngry = true;
      }
      else {
        image(cactus_img,cacti[i].x,cacti[i].y,cacti[i].width,cacti[i].height);
        cacti[i].isAngry = false;
      }
      
      cacti[i].x -=1;
    }
  }

  // cactus_img.resize(cactus_width,cactus_height);
  // image(bg_img,windowWidth/4,windowHeight/20);
  // if (right_bound-cactus_width-count >= windowWidth/4) {
  //   image(cactus_img,right_bound-cactus_width-count,top_bound);
  // }
  // image(cactus_img,right_bound-cactus_width-(count*2),top_bound);
  print(lives);
  count++;
}
