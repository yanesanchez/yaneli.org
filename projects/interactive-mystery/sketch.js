// =================================== READ ME ===================================
/*  after having some people test this, I realized the user might not know what to do in order to get to the cool part, and might not get there at all if they don't figure it out, SO...

DESCRIPTION:
~ note: click/press/touch used interchangably; drag/move used interchangably.
  Upon start, the canvas is completely black. Starting at the top, pressing downwards along the y-axis will decrease opacity, while pressing upwards will increase opacity again. When the opacity decreases, shapes will start to appear.
  The rectangle at the bottom is actually a "button." The button registers events even while opacity is changing, as long as it is within the bounds of the button. Clicking the button 13 times will lead to near-full transparency before the canvas (toptopLyr) clears to reveal the shapes, which are on their own canvas (topLyr).
  After the button registers 13 clicks, a silhouette will be revealed on top of the shapes. Dragging along the screen will now change the background to one of seven colors. The button will continue to register events after 13 clicks until there has been a total of 30 clicks.
  When pressed, the three shapes on the screen will slowly decrease in opacity. Dragging the mouse or moving your finger around will still change the background color but clicks will only be added to the count if the button at the bottom has been pressed. Once 30 clicks have been reached, the shapes will now be transparent, leaving only the silhouette and background visible.
*/

// ################################################################################

// ======================= VARIABLES =======================
let canvasHeight, canvasWidth, chakraHeight, chakraWidth;
let chakraLyrs, topLyr, toptopLyr, value, topVal, topClr, wand;
let topMapAlph, topMapClr, midMapAlph, midMapClrWB, midMapClrBW, temp;
let isCleared = false, hasClicked = false, clickCount = 0;
let button, tri, sun;
let chakras = [
  {
    name: "root",
    sanskrit: "muladhara",
    _color: {name: "red", hex: "#d80000"},
    num: 1,
    says: "I exist.",
    petals: 4,
  },
  {
    name: "sacral",
    sanskrit: "svadhisthana",
    _color: {name: "orange", hex: "#fc8a20"},
    num: 2,
    says: "I desire.",
    petals: 6,
  },
  {
    name: "solar plexus",
    sanskrit: "manipura",
    _color: {name: "yellow", hex: "#edf268"},
    num: 3,
    says: "I control.",
    petals: 10,
  },
  {
    name: "heart",
    sanskrit: "anahata",
    _color: {name: "green", hex: "#64c164"},
    num: 4,
    says: "I love.",
    petals: 12,
  },
  {
    name: "throat",
    sanskrit: "vishuddha",
    _color: {name: "blue", hex: "#73efed"},
    num: 5,
    says: "I express.",
    petals: 16,
  },
  {
    name: "third eye",
    sanskrit: "anja",
    _color: {name: "indigo", hex: "#4635ff"},
    num: 6,
    says: "I see.",
    petals: 2,
  },
  {
    name: "crown",
    sanskrit: "sahasrara",
    _color: {name: "red", hex: "#a768ff"},
    num: 7,
    says: "I understand.",
    petals: 1000,
  },
];
  // y-axis of chakras; midway down body
  let cposition = [451, 410, 365, 320, 244, 200, 170];
  let alph, alph2;  // alpha value for each layer

// ===================== MAIN METHODS ======================
function setup() {
  canvasWidth = 360;
  canvasHeight = 640;
  chakraWidth = 21;
  chakraHeight = 21;
  // layers
  let canvas = createCanvas(canvasWidth, canvasHeight);  // base
  canvas.parent("canvasContainer");
  topLyr = createGraphics(canvasWidth, canvasHeight);  // middle
  toptopLyr = createGraphics(canvasWidth, canvasHeight);  // top-most
  // color & opacity variables
  alph = 255;  // top-most layer alpha iterator
  alph2  = 255;  // middle layer alpha iterator
  topClr = topMapAlph; //color(0, 0, 0, alph);  // top-most layer color
  tClr = midMapClrWB;  // middle mt layer background
  tClr2 = midMapAlph;  // middle mt layer foreground
  toptopLyr.background(0);  // top-most layer
  //topLyr.background(160);  // middle layer

    // MIDDLE LAYER
  // <<< mountain range type thing >>>
  topLyr.fill(0);
  // bottom black button
  button = topLyr.rect(45, height - 90, width - 90, 90);
  // middle black triangle
  tri = topLyr.triangle(-50, height - 150, width + 50, height - 150, width/2, height/4 - 15);
  topLyr.strokeWeight(5);
  // top black circle
  sun = topLyr.ellipse(width/2, height/9, 75, 75);


  // TOP-MOST ---------------
  image(toptopLyr, 0, 0);
  fill(255, 160);
  isCleared = false;
}

// DRAW ----------------------*******************
function draw() {
  if(!isCleared){
  background(255);
  }
  topMapClr = map(mouseY, 0, height, 0, 225);
  topMapAlph = map(topMapClr, 0, height, 0, 255);
  midMapAlph = map(clickCount, 0, 30, 0, 255);

  // ----------------- BACKGROUND LAYER --------------------
  // <<< lotus pose silhouette >>>
  stroke(0);
  strokeWeight(1);
  fill(random(100, 130));  // slight variations of fill
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

  // --------------------- IN THE LAYERS -------------------
  // 0: red, 1: orange, 2: yellow, 3: green, 4: blue, 5: indigo, 6: violet
  // BASE LAYER -------------
  // draws ellipses for each chakra & sets shape properties
  for (let i = 0; i < chakras.length; i++) {
    stroke(color(255, random(0, 100)));  // glow-y effect
    strokeWeight(random(0, 7));  // slight veriations in circle size
    fill(chakras[i]._color.hex);
    ellipse(width/2, cposition[i], chakraHeight, chakraWidth);
  }

  // layer rendering
  if(!isCleared){  // wont keep rendering canvas after it's been cleared
    image(toptopLyr, 0, 0);  // top-most layer
    image(topLyr, 0, 0);  // middle layer

  }

  // pointer
  fill(255, random(120, 160));
  stroke(255, random(90, 160));
  strokeWeight(random(3, 20));
  wand = ellipse(mouseX, mouseY, 15, 15);  // circle follows pointer
}

// ======================== EVENTS =========================
temp = 0;
function mousePressed() {

  midMapAlph = map(clickCount, 0, 30, 255, 0);
  // TOP LAYER ---------------
  //topLyr.rect(45, height - 90,  width - 90, 90); - ~ middle layer reference
  if(!isCleared){ // checks if top-most layer has been cleared
    toptopLyr.background(topMapClr, topMapClr);
    // checks if mouse is within the bounds of the black rect "button"
    if((mouseY >= height-90 && mouseY <= height) && (mouseX <= width-45 && mouseX >= 45)){
      console.log("BOX HAS BEEN CLICKED");
      clickCount++;
      if (!isCleared && clickCount >= 13){  // button has to be clicked 13 times for canvas to clear
          toptopLyr.clear();
          isCleared = true;  // lets you move onto the next layer
          console.log("-- ALL CLEAR --");
        }
     }
  // MIDDLE LAYER ------------
  } else if (isCleared && clickCount >= 13) {
    // checks if mouse is within the bounds of the black rect "button"
    if((mouseY >= height-90 && mouseY <= height) && (mouseX <= width-45 && mouseX >= 45)){
        tint(255, map(clickCount, 15, 30, 255, 0));
        image(topLyr, 0, 0);
        clickCount++;
    }
    //image(topLyr, 0, 0);  // middle layer
  } else {

  }

  // testing
  console.log("isCleared: " + isCleared);
  console.log("click count: " + clickCount);
   console.log("topMapClr: " + topMapClr + "");
  console.log("topMapAlph: " + topMapAlph + "");
  console.log("midMapAlph:" + midMapAlph + " ");
  return false;
}

let bonusClr, r;
function mouseDragged(){
  r = floor(random(7));
  bonusClr = chakras[r]._color.hex;
  background(bonusClr);
  fill(random(70, 170));
  if(clickCount < 50 && clickCount >= 13){
    image(topLyr, 0, 0);
  }
}

// ----------------------- OTHER STUFF ---------------------



// Chakra object
var chakra = {
  name: "",
  sanskrit: "",
  _color: {name: "", hex: "#"},
  num: 0,
  says: "",
  petals: "",
};

// ===========================================
// commented out bc it was messing with my canvases too much
/*
function touchStarted () {
  var fs = fullscreen();
  if (!fs) {
    fullscreen(true);
  }
}

/* full screening will change the size of the canvas */
/*function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
*/
/* prevents the mobile browser from processing some default
 * touch events, like swiping left for "back" or scrolling the page.
 */
document.ontouchmove = function(event) {
    event.preventDefault();
};
