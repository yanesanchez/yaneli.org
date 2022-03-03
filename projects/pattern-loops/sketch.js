// ============================================
// adjust frame rate below if need
let fr = 24;
// essentials for my array of squares
let squArre, squSide, squCount, squStroke, squColor, squPos;
let isShaking;

function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent("canvasContainer");
  rectMode(CENTER);
  squSide = 500;
  squCount = random(20, 80);
  squStroke = random(2);
  squArre = new Array(23);
  isShaking = false;
  frameRate(fr);
  strokeJoin(ROUND);
}

// drawing depends on boolean variable
function draw() {
  background(0);
  noFill();
  if (isShaking == true){
    shakeArray();
  } else if (isShaking == false) {
    populateArray();
  }
}

// default layer with uniform squares
function populateArray(){
  squStroke = random(1, 1.75);
  for (let i = 0; i < squArre.length; i++){
    squColor = random(240, 245);
    strokeWeight(squStroke);
    stroke(squColor);
    squArre[i] = rect(250, 250, i*i, i*i);
  }
}

// like the previous function but with more randomness
function shakeArray(){
  squStroke = random(1, 7);
  for (let i = 0; i < squArre.length; i++){
    squColor = random(50, 225);
    //squColor = map(i, 255, 0, 23, 250);
    strokeWeight(squStroke);
    stroke(squColor);
    squArre[i] = rect(250, 250, random(i*i), random(i*i));
  }
}

// takes care of isShaking boolean to determine which scene to draw
function mousePressed(){
   isShaking = true;
}

// immediately returns to previous screen
function mouseReleased(){
  isShaking = false;
}
