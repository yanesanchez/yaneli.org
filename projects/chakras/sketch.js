// Use left and right arrow keys to change states

let currentState = 0;
let image0, image1, image2, image3, image4, image5, image6, image7;

function setup() {
  createCanvas(360, 640);
  image0 = createGraphics(360, 640);
  textFont('Courier New');
  textSize(16);
  textAlign(CENTER);
  rectMode(CENTER);
  image1 = createGraphics(width, height);
  image2 = createGraphics(width, height);
  image3 = createGraphics(width, height);
  image4 = createGraphics(width, height);
  image5 = createGraphics(width, height);
  image6 = createGraphics(width, height);
  image7 = createGraphics(width, height);
}

function draw() {
  background(80);
  strokeWeight(1.5);
  fill(200, 50);
  text(currentState, width/2, 20);
  ellipse(width/2, height/2, width, width);
  if (currentState != 0){
    fill(color(chakras[currentState-1]._color.hex));
    polygon(width/2, height/2, 150, chakras[currentState-1].petals);
  }
  drawTransformedShape();
  drawChakras();
  
  if (currentState == 0){
    image0.stroke(0);
    image0.strokeWeight(3);
    image0.fill(random(225, 255));
    image0.textAlign(CENTER);
    image0.textSize(50);
    image0.textFont('Courier New');
    image0.text("चक्र", width/2, 95);
    image0.text("chakra", width/2, height - 60);
    image0.textSize(20);
    image0.noStroke();
    image0.fill(140, 50);
    image0.text("wheel of life energy", width/2, height - 20);
    image(image0, 0, 0);
  } else if (currentState == 1) {  // 1 root
    image1.stroke(0);
    image1.strokeWeight(3);
    image1.fill(chakras[0]._color.hex);
    image1.textAlign(CENTER);
    image1.textSize(50);
    image1.textFont('Courier New');
    image1.text(chakras[0].sanskrit, width/2, 95);
    image1.text(chakras[0].name, width/2, height - 60);
    image1.textSize(20);
    image1.noStroke();
    image1.fill(140, 50);
    image1.text(chakras[0].says, width/2, height - 20);
    image(image1, 0, 0);
  } else if (currentState == 2) {  // 2 sacral
    image2.stroke(0);
    image2.strokeWeight(3);
    image2.fill(chakras[1]._color.hex);
    image2.textAlign(CENTER);
    image2.textSize(50);
    image2.textFont('Courier New');
    image2.text(chakras[1].sanskrit, width/2, 95);
    image2.text(chakras[1].name, width/2, height - 60);
    image2.textSize(20);
    image2.noStroke();
    image2.fill(140, 50);
    image2.text(chakras[1].says, width/2, height - 20);
    image(image2, 0, 0);
  } else if (currentState == 3) {  // 3 solar plexus
    image3.stroke(0);
    image3.strokeWeight(3);
    image3.fill(chakras[2]._color.hex);         
    image3.textAlign(CENTER);
    image3.textSize(50);
    image3.textFont('Courier New');
    image3.text(chakras[2].sanskrit, width/2, 95);
    image3.text(chakras[2].name, width/2, height - 60);
    image3.textSize(20);
    image3.noStroke();
    image3.fill(140, 50);
    image3.text(chakras[2].says, width/2, height - 20);
    image(image3, 0, 0);
  } else if (currentState == 4) {  // 4 heart
    image4.stroke(0);
    image3.strokeWeight(3);
    image4.fill(chakras[3]._color.hex);         
    image4.textAlign(CENTER);
    image4.textSize(50);
    image4.textFont('Courier New');
    image4.text(chakras[3].sanskrit, width/2, 95);
    image4.text(chakras[3].name, width/2, height - 60);
    image4.textSize(20);
    image4.noStroke();
    image4.fill(140, 50);
    image4.text(chakras[3].says, width/2, height - 20);
    image(image4, 0, 0);
  } else if (currentState == 5) {  // 5 throat
    image5.stroke(0);
    image5.strokeWeight(3);
    image5.fill(chakras[4]._color.hex);         
    image5.textAlign(CENTER);
    image5.textSize(50);
    image5.textFont('Courier New');
    image5.text(chakras[4].sanskrit, width/2, 95);
    image5.text(chakras[4].name, width/2, height - 60);
    image5.textSize(20);
    image5.noStroke();
    image5.fill(140, 50);
    image5.text(chakras[4].says, width/2, height - 20);
    image(image5, 0, 0);
  } else if (currentState == 6) {  // 6 third eye
    image6.stroke(0);
    image6.strokeWeight(3);
    image6.fill(chakras[5]._color.hex);         
    image6.textAlign(CENTER);
    image6.textSize(50);
    image6.textFont('Courier New');
    image6.text(chakras[5].sanskrit, width/2, 95);
    image6.text(chakras[5].name, width/2, height - 60);
    image6.textSize(20);
    image6.noStroke();
    image6.fill(140, 50);
    image6.text(chakras[5].says, width/2, height - 20);
    image(image6, 0, 0);
  } else if (currentState == 7) {  // 7 crown
    image7.stroke(0);
    image7.strokeWeight(3);
    image7.fill(chakras[6]._color.hex);         
    image7.textAlign(CENTER);
    image7.textSize(50);
    image7.textFont('Courier New');
    image7.text(chakras[6].sanskrit, width/2, 95);
    image7.text(chakras[6].name, width/2, height - 60);
    image7.textSize(20);
    image7.noStroke();
    image7.fill(140, 50);
    image7.text(chakras[6].says, width/2, height - 20);
    image(image7, 0, 0);
  }
  
}

// ==================================================
let cposition = [485, 432, 380, 325, 240, 185, 145];
let chakraWidth = 33;
let chakraHeight = 33;
let chakras = [
  {
    name: "root",
    sanskrit: "मूलाधार", //"muladhara",
    _color: {name: "red", hex: "#d80000"},
    num: 1,
    says: "I am.",
    petals: 4,
  },
  {
    name: "sacral",
    sanskrit: "स्वाधिष्ठान", //"svadhisthana",
    _color: {name: "orange", hex: "#fc8a20"},
    num: 2,
    says: "I feel.",
    petals: 6,
  },
  {
    name: "solar plexus",
    sanskrit: "मणिपूर", //"manipura",
    _color: {name: "yellow", hex: "#edf268"},
    num: 3,
    says: "I do.",
    petals: 10,
  },
  {
    name: "heart",
    sanskrit: "अनाहत", //"anahata",
    _color: {name: "green", hex: "#64c164"},
    num: 4,
    says: "I love.",
    petals: 12,
  },
  {
    name: "throat",
    sanskrit: "विशुद्ध", //"vishuddha",
    _color: {name: "blue", hex: "#73efed"},
    num: 5,
    says: "I talk.",
    petals: 16,
  },
  {
    name: "third eye",
    sanskrit: "आज्ञा", //"anja",
    _color: {name: "indigo", hex: "#4635ff"},
    num: 6,
    says: "I see.",
    petals: 2,
  },
  {
    name: "crown",
    sanskrit: "सहस्रार", //"sahasrara",
    _color: {name: "red", hex: "#a768ff"},
    num: 7,
    says: "I understand.",
    petals: 1000,
  },
];

function keyPressed(){
  if (keyCode == RIGHT_ARROW){  // change state with arrow keys
    currentState++;
  } else if (keyCode == LEFT_ARROW){
    currentState--;
  }
  if(currentState > 7) {  // repeat states
    currentState = 0;
  } if (currentState < 0) {
    currentState = 7;
  }
  console.log("Current state: " + currentState);
}

// from p5js Examples page
function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function drawTransformedShape(){
  push();
  scale(1.20);
  translate(-31, -45);
  drawLotusFigure();
  pop();
}

function drawChakras(){
  // draws ellipses for each chakra & sets shape properties
  for (let i = 0; i < chakras.length; i++) {
    stroke(color(255, random(50, 75)));  // glow-y effect
    strokeWeight(random(1, 7));  // slight veriations in circle size
    fill(chakras[i]._color.hex);
    ellipse(width/2, cposition[i], chakraHeight, chakraWidth);
  }
}

function drawLotusFigure(){
  // <<< lotus pose silhouette >>>
  stroke(255, 150);
  strokeWeight(random(1, 3));
  fill(random(160, 180));  // slight variations of fill
  beginShape();
  vertex(156, 204);
  // RIGHT SIDE ~~~~~~~~~~~~~~~~~~~~~~~
  // neck up -----
  bezierVertex(154, 204, 149, 168, 179, 168);  // L head 
  bezierVertex(208, 168, 204, 199, 202, 202);  // R head
  bezierVertex(201, 206, 208, 195, 206, 207);  // R top ear
  bezierVertex(204, 223, 203, 218, 202, 220);  // R bottom ear
  bezierVertex(198, 224, 195, 234, 196, 242);  // R top neck
  bezierVertex(196, 249, 203, 265, 227, 266);  // R bottom neck
  // arm ---------
  bezierVertex(255, 268, 252, 303, 253, 318);  // R deltoid
  bezierVertex(255, 334, 262, 362, 262, 362);  // R bicep
  bezierVertex(262, 362, 294, 408, 309, 413);  // R outer forearm
  bezierVertex(321, 417, 326, 410, 332, 410);  // R thumb
  bezierVertex(337, 411, 333, 418, 337, 418);  // R inner thumb
  bezierVertex(343, 418, 340, 408, 335, 411);  // R inner fingers
  bezierVertex(328, 416, 333, 403, 340, 403);  // R pointer finger
  bezierVertex(342, 403, 351, 410, 351, 415);  // R top knuckles
  bezierVertex(351, 422, 349, 429, 348, 430);  // R bottom knuckles
  bezierVertex(346, 433, 338, 430, 332, 434);  // R back of hand
  bezierVertex(329, 436, 318, 432, 309, 430);  // R wrist/hand
  bezierVertex(303, 427, 248, 392, 241, 372);  // R inner forearm
  bezierVertex(234, 353, 229, 317, 229, 318);  // R inner arm
  // torso ------
  bezierVertex(229, 317, 215, 351, 216, 370);  // R armpit to waist
  bezierVertex(217, 383, 233, 411, 245, 413);  // R abdomen
  // legs -------
  bezierVertex(260, 419, 292, 421, 302, 426);  // R top of leg
  bezierVertex(312, 432, 333, 435, 331, 455);  // R top knee
  bezierVertex(329, 475, 302, 480, 278, 479);  // R bottom knee
  bezierVertex(254, 479, 191, 474, 179, 474);  // R bottom of leg
  // LEFT SIDE ~~~~~~~~~~~~~~~~~~~~
  // legs --------
  bezierVertex(167, 474, 103, 480, 83, 479);  // L bottom of leg
  bezierVertex(60, 479, 32, 476, 29, 455);  // L bottom knee
  bezierVertex(26, 429, 50, 427, 55, 424);  // L top knee
  bezierVertex(66, 419, 105, 418, 116, 413);  // L top of leg  
  // torso -------
  bezierVertex(128, 409, 145, 386, 145, 370);  // L abdomen
  bezierVertex(146, 354, 137, 334, 136, 320);  // L waist to armpit
  // arm ---------
  bezierVertex(136, 304, 128, 374, 121, 382);  // L inner arm
  bezierVertex(112, 393, 71, 415, 65, 419);  // L inner forearm
  bezierVertex(57, 423, 44, 430, 31, 429);  // L wrist/hand
  bezierVertex(19, 429, 17, 428, 14, 426);  // L back of hand
  bezierVertex(10, 424, 7, 408, 10, 406);  // L bottom knuckles
  bezierVertex(13, 403, 16, 400, 19, 401);  // L top knuckles
  bezierVertex(20, 401, 24, 406, 20, 408);  // L fingertips
  bezierVertex(18, 410, 20, 416, 25, 415);  // L inner fingers
  bezierVertex(30, 414, 33, 409, 27, 408);  // L inner thumb
  bezierVertex(23, 407, 18, 399, 24, 400);  // L thumb
  bezierVertex(32, 401, 29, 405, 40, 408);  // L outer thumb
  bezierVertex(52, 410, 59, 407, 68, 400);  // L wrist
  bezierVertex(77, 393, 90, 373, 102, 366);  // L inner forearm
  bezierVertex(103, 366, 103, 359, 110, 324);  // L bicep
  bezierVertex(113, 312, 104, 273, 126, 269);  // L deltoid
  // neck up -----
  bezierVertex(145, 265, 166, 260, 166, 242);  // L bottom neck
  bezierVertex(166, 232, 162, 226, 160, 221);  // L top neck
  bezierVertex(159, 218, 157, 224, 152, 207);  // L bottom ear
  bezierVertex(150, 201, 152, 199, 156, 204);  // L top ear
  endShape();
}