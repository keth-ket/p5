let c1X = 100;
let c1Y = 100;
let r1X = 200;
let r1Y = 200;
let s1X = 300;
let s1Y = 300;
let c1V = -2;
let r1V = -3;
let s1V = -5;

function setup() {
  createCanvas(720, 720);
}

function draw() {
  back = background(220);
  fill(256,0,0);
  c1 = circle(c1X,c1Y,30);
  fill(256,0,0);
  r1 = rect(r1X,r1Y,100,50);
  fill(0,0,256);
  s1 = square(s1X,s1Y,55);
  print(c1X);
  if (c1X <= 5 || r1X <= 5 || s1X <= 5 || c1X >= 700 || r1X >= 700 || s1X >= 700) {
    if (c1X <= 5 || c1X >= 700) {
      if (abs(c1V) < 20) {
        c1V = -2*c1V;
      }
      else {
        c1V = -c1V % 5;
      }
      
    }
    r1V = -r1V;
    s1V = -s1V;
  }
  
  
  
  c1X += c1V;
  r1X += r1V;
  s1X += s1V;
  
  
}