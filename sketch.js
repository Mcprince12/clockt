var hr, mn, sc;
function setup() {
  createCanvas(800,500);
  hr = hour();
  mn = minute();
  sc = second();

 

}

function draw() {
  background(255,255,255);
  
 
  
  angleMode(DEGREES);
  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 12, 0, 360);
    

  fill("black");
  ellipse(370, 365, 250, 250);

  
  push();
  translate(360, 360);
  rotate(scAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();

  push();
  translate(360, 360);
  rotate(mnAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();

  push();
  translate(360, 360);
  rotate(hrAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();

 
}