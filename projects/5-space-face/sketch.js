let colArr = [], headArr = [];
let head, img, name;
let faceColor, hairColor;
let headX, headY, fr, randomScale, scaleFactor;
let count = 0, max = 10;
let headPNG;

function preload(){
  headPNG = loadImage('faceTr.png');
  fr = 10;
}

function setup() {
  createCanvas(360, 640);
  colorMode(HSB, 360, 100, 100, 100);
  imageMode(CENTER);
 // headPNG.loadPixels();
  frameRate(fr);
  //hairColor = color(88, 129, 100);
  //faceColor = color(255, 249, 240);
  head = new HeadPNG(headPNG, width/2, height/2);
  headX = width;
  headY = height;
  for(let i = 0; i < max; i++){
    headArr[i] = new HeadPNG(headPNG, headX*1.25, headY*2);
      
  }
  
}

function draw() {
  background(0);
  constellation();
  // head.drawFace(faceColor);
  // head.drawHair(hairColor);
  // head.display(30, 30);
  //mage(headPNG, width/2, height/2);
  
  for(let i = 0; i < max; i++){
    scale(head.randomScaleFactor());
    colArr[i] = color(131, noise(0,99), noise(0,99));
    //headX = random(width);
    //headY = random(height);
    headArr[i].setX(random(20, width-20));
    headArr[i].setY(random(20, height-20));
    tint(131, random(5, 50), random(25, 100), random(25, 100));
    image(headArr[i].img, headArr[i].getX(), headArr[i].getY());
  }
}

// TEMPLATE CLASS (image version) ==============
class HeadPNG {
  constructor(img, headX, headY){
    //this.name = image(headPNG, headX, headY);;
    this.headX = headX;
    this.headY = headY;
    this.img = img;
    //img = headPNG;
    //this.img = image(newImage, headX, headY); 
  }
  
  randomScaleFactor(){
    scaleFactor = random(0.4, 1.2);
    return scaleFactor;
  }
  
  setX(newX){
    headX = newX;
  }
  
  getX(){
    return headX;
  }
  
  setY(newY){
    headY = newY;
  }
  
  getY(){
    return headY;
  }
  
  createHeads(){
  
  } 
}

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// =================== IGNORE =======================

// other methods -------------------------------

  function constellation() {
    for (let i = 0; i < width * PI; i++) {
      strokeWeight(random(0.25, 1.5));
      stroke(random(150, 200));
      point(random(width), random(height));
    }
  }

// TEMPLATE CLASS ==============================
/*
class Head {
    constructor(hx, hy) {
    this.x = hx;
    this.y = hy;
    this.drawFace(faceColor);
    this.drawHair(hairColor);
  }
  
  display(trX, trY){
    this.trX = trX;
    this.trY = trY;
    push();
    translate(trX, trY);
    pop();
    
  }

  drawFace(fCol) {
    this.faceColor = fCol;
    fill(faceColor);
    stroke(faceColor);
    beginShape();
    vertex(303, 484);
    bezierVertex(283, 511, 244, 547, 200, 555);
    bezierVertex(161, 561, 121, 536, 93, 509);
    bezierVertex(65, 483, 50, 429, 48, 384);
    bezierVertex(47, 361, 59, 303, 59, 284);
    bezierVertex(57, 253, 54, 204, 89, 180);
    bezierVertex(142, 141, 226, 143, 274, 177);
    bezierVertex(310, 204, 312, 243, 314, 274);
    bezierVertex(317, 309, 330, 366, 326, 384);
    bezierVertex(316, 436, 323, 456, 303, 484);
    endShape();
  }

  drawHair(hairCol){
    fill(hairColor);
    noStroke();
    beginShape();
    vertex(108, 175);
    bezierVertex(108, 175, 47, 163, 35, 185);
    bezierVertex(11, 230, 28, 256, 29, 286);
    bezierVertex(29, 320, 51, 399, 47, 380);
    bezierVertex(50, 399, 50, 348, 56, 328);
    bezierVertex(61, 305, 56, 298, 58, 252);
    bezierVertex(60, 205, 99, 181, 108, 175);
    endShape();
    // Right
    beginShape();
    vertex(283, 183);
    bezierVertex(283, 183, 304, 153, 329, 187);
    bezierVertex(352, 216, 359, 310, 329, 375);
    bezierVertex(328, 375, 313, 255, 308, 232);
    bezierVertex(305, 218, 288, 185, 283, 183);
    endShape();
    // Top
    beginShape();
    vertex(292, 196);
    bezierVertex(290, 191, 319, 160, 292, 118);
    bezierVertex(253, 60, 120, 109, 82, 88);
    bezierVertex(48, 71, 108, 118, 108, 118);
    bezierVertex(76, 116, 65, 113, 51, 101);
    bezierVertex(36, 89, 38, 120, 53, 133);
    bezierVertex(76, 146, 43, 143, 32, 127);
    bezierVertex(19, 108, 30, 160, 44, 168);
    bezierVertex(60, 176, 20, 167, 16, 159);
    bezierVertex(9, 145, 17, 222, 102, 178);
    bezierVertex(171, 146, 260, 176, 292, 196);
    endShape();
    triangle(161, 161, 220, 163, 190, 170);
    
  }
  
} */
