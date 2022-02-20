function setup() {
  createCanvas(360, 640);
}

function draw() {
  background(100);
  //ellipse(width/2, height/2, width-100, height/2);
  
  // FACE ----------------------
  fill('#fff9f0');
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
  
  
  // HAIR ----------------------
    // Left
  fill('#588164');
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
  
  
  // EYES ----------------------
    // LEFT
      // base
  fill('#dbb9d4');
  stroke('#747474');
  strokeWeight(2);
  beginShape();
  vertex(84, 316);
  bezierVertex(84, 316, 90, 297, 106, 297);
  bezierVertex(123, 299, 126, 305, 146, 325);
  bezierVertex(128, 325, 123, 329, 108, 329);
  bezierVertex(93, 328, 84, 316, 84, 316);
  endShape();
      // ball
  fill('#FFFFFF');
  noStroke();
  beginShape();
  vertex(85, 317);
  bezierVertex(85, 317, 89, 298, 107, 298);
  bezierVertex(118, 298, 124, 305, 135, 314);
  bezierVertex(138, 317, 140, 325, 130, 325);
  bezierVertex(123, 326, 100, 333, 85, 317);
  endShape();
      // iris
  fill('#321B1B');
  ellipseMode(CORNER);
  ellipse(90, 299, 25, 26);
      // highlight
  fill('#FFFFFF');
  ellipse(96, 310, 9, 6);
  ellipse(88, 314, 6, 4);
  
    // RIGHT
      // base
  fill('#dbb9d4');
  stroke('#747474');
  strokeWeight(2);
  beginShape();
  vertex(290, 313);
  bezierVertex(290, 313, 278, 290, 255, 293);
  bezierVertex(230, 297, 230, 316, 221, 324);
  bezierVertex(215, 330, 239, 322, 251, 325);
  bezierVertex(263, 326, 285, 321, 290, 313);
  endShape();
      // ball
  beginShape();
  fill('#FFFFFF');
  noStroke();
  vertex(289, 313);
  bezierVertex(289, 313, 276, 291, 256, 293);
  bezierVertex(235, 296, 228, 315, 227, 316);
  bezierVertex(225, 320, 228, 325, 235, 324);
  bezierVertex(246, 324, 255, 324, 263, 323);
  bezierVertex(275, 322, 286, 318, 288, 313);
  endShape();
      // iris
  fill('#321B1B');
  ellipseMode(CORNER);
  ellipse(233, 296, 28, 27);
      // highlight
  fill('#FFFFFF');
  ellipse(240, 309, 10, 6);
  ellipse(233, 315, 8, 5);
  
  
  // EYE DETAILS ---------------
  noFill();
  stroke('#444444');
  strokeWeight(0.25);
  // left
  bezier(80, 305, 85, 296, 102, 293, 101, 293);
  bezier(101, 293, 116, 292, 129, 298, 144, 313);
  // right
  bezier(292, 307, 287, 299, 279, 292, 268, 290);
  bezier(268, 290, 252, 285, 234, 294, 223, 311);
  
  
  // EYEBROWS ------------------
    // LEFT
  fill('#588164');
  noStroke();
  beginShape();
  vertex(66, 272);
  bezierVertex(66, 272, 76, 256, 92, 254);
  bezierVertex(105, 252, 146, 260, 160, 262);
  bezierVertex(170, 264, 160, 278, 160, 278);
  bezierVertex(121, 273, 87, 252, 66, 272);
  endShape();
    // RIGHT
  beginShape();
  vertex(302, 275);
  bezierVertex(302, 275, 295, 255, 274, 252);
  bezierVertex(261, 250, 225, 261, 210, 263);
  bezierVertex(200, 265, 210, 279, 210, 279);
  bezierVertex(252, 267, 285, 256, 302, 275);
  endShape();
  
  
  // NOSE ----------------------
  noFill();
  stroke('#747474');
  strokeWeight(1);
  bezier(223, 389, 229, 398, 233, 418, 209, 416);
  bezier(149, 379, 149, 379, 130, 413, 156, 416);
  bezier(174, 418, 174, 418, 181, 424, 190, 418);
  bezier(192, 413, 192, 414, 202, 400, 211, 404);
  bezier(211, 404, 216, 405, 206, 411, 201, 408);
  bezier(157, 405, 159, 406, 160, 408, 163, 409);
  bezier(163, 409, 164, 410, 170, 411, 167, 408);
  bezier(167, 408, 160, 401, 155, 401, 153, 404);
  
  // MOUTH ---------------------
  stroke('#366842');
  strokeWeight(1.2);
  bezier(123, 458, 127, 453, 133, 454, 136, 460);
  bezier(136, 460, 138, 463, 153, 484, 185, 482);
  bezier(185, 482, 217, 483, 230, 469, 234, 463);
  bezier(234, 463, 238, 459, 241, 456, 247, 458);
  bezier(132, 456, 141, 461, 151, 462, 155, 462);
  bezier(155, 462, 159, 462, 168, 460, 173, 460);
  bezier(173, 460, 179, 460, 178, 462, 185, 463);
  bezier(185, 463, 190, 463, 192, 460, 196, 460);
  bezier(196, 460, 201, 460, 230, 464, 238, 459);
  bezier(132, 455, 136, 458, 143, 458, 157, 453);
  bezier(157, 453, 171, 448, 179, 450, 182, 452);
  bezier(182, 452, 185, 453, 189, 454, 193, 452);
  bezier(193, 452, 197, 450, 209, 452, 214, 454);
  bezier(214, 454, 221, 456, 226, 459, 239, 458);
  
  // FACE DETAILS
  stroke('#dbdcd2');
  bezier(182, 438, 180, 440, 182, 445, 183, 444);
  bezier(108, 439, 110, 435, 117, 422, 120, 420);
  line(90, 450, 107, 428);
  bezier(240, 414, 242, 417, 250, 424, 254, 425);
  bezier(265, 444, 264, 445, 266, 448, 267, 448);
  line(163, 306, 167, 323);
  line(203, 305, 197, 324);
  fill('#000000');
  noStroke();
  triangle(83, 315, 87, 309, 79, 308);
  triangle(289, 313, 285, 306, 296, 306);
  
  // GLASSES -------------------
    // FRAMES
  
    // ARMS
  
    // LENSES
  
}

// ===========================================
/*
function touchStarted () {
  var fs = fullscreen();
  if (!fs) {
    fullscreen(true);
  }
}
*/
/* full screening will change the size of the canvas */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

/* prevents the mobile browser from processing some default
 * touch events, like swiping left for "back" or scrolling the page.
 */
document.ontouchmove = function(event) {
    event.preventDefault();
};