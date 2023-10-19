function setup() {
  let img = createImg("http://th07.deviantart.net/fs70/PRE/i/2011/260/3/5/dash_hooray_by_rainbowcrab-d49xk0d.png");
  let canvas = createCanvas(400, 400);

  img.position(190, 50);
  img.size(200, 200);
  canvas.position(300, 50);
}

function draw() {
  // put drawing code here
  noStroke();
  background(220, 180, 200);
  fill(180, 200, 40);
  strokeWeight(6);
  stroke(180, 100, 240);
  for (let i = 0; i < width; i += 15) {
    line(i, 0, i, height);
  }
}
