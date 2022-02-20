/*
  fun with noun replacements
*/

let input, inputElement;
let enterBtn, eBtnW, eBtnH; 
let randomBtn, rBtnW, rBtnH;
let wordNumBtn = [], wnBtnW, wnBtnH;
let colorSlider, colorVal;
let btnSpacing;
let font, lexicon;
let ritaText, txtP;

function setup() {
  // sketch setup -----------------------
  createCanvas(600, 400);
  colorMode(HSB);
  background(0);
  fill(255);
  eBtnW = 70;
  eBtnH = 25;
  rBtnW = 125;
  rBtnH = 25;
  wnBtnW = 60;
  wnBtnH = 20;
  btnSpacing = 15;
  offset = 38;
  lexicon = new RiLexicon();

  setupInput();
  setupClickables(); 
  setupClickableFunctions();
  setupColorSlider();
  ritaText = input.changed(processRita);
} // end of setup()

function draw() {
  // use slider to set background color
  setBackground();
  
  // draw the buttons -------------------
  enterBtn.draw();
  randomBtn.draw();
  for (let i = 0; i < wordNumBtn.length; i++) {
    wordNumBtn[i].draw();
  }
 
} // end of draw()


// ===========================================
// SETUP FUNCTIONS
// Input Field ------------------------
function setupInput() {
  input = createInput("box of type");
  // input.changed(processRita);
  input.size(210);
  input.position(10, (height-60));
  
}

function setBackground(){
  colorVal = colorSlider.value();
  background(colorVal, 100, 100, 1);
}


// Clickable Library setup ------------
function setupClickables() {
  // Enter Button ~ to submit input
  enterBtn = new Clickable();
  enterBtn.cornerRadius = 0;
  enterBtn.resize(eBtnW, eBtnH);
  enterBtn.locate(10, height - 30);
  enterBtn.text = "enter";
  
  
  // Random Button ~ to generate random word
  randomBtn = new Clickable();
  randomBtn.cornerRadius = 0;
  randomBtn.resize(rBtnW, rBtnH);
  randomBtn.locate(100, height - 30);
  randomBtn.text = "u can type in that box";
  
  // Word Number Buttons ~ sets how many words to return
  for (let i = 0; i < 4; i++) {
    wordNumBtn[i] = new Clickable();
    wordNumBtn[i].cornerRadius = 0;
    wordNumBtn[i].resize(wnBtnW, wnBtnH);
    wordNumBtn[i].locate(((width/2)+(wnBtnW+btnSpacing)*i), (height-(25)));
    wordNumBtn[i].text = [i+1];
  }
    
}

// Setup functions

function setupClickableFunctions() {
  enterBtn.onOutside = function() {
    this.color = '#FFFFFF'
    this.textColor = '#000000';
  }
  enterBtn.onHover = function() {
    this.color = '#AAAAAA';
    this.textColor = '#000000';
  }
  enterBtn.onPress = function() {
    this.color = '#000000';
    this.textColor = '#FFFFFF';
    processRita();
  }
  enterBtn.onRelease = function() {
    this.color = '#AAAAAA';
    this.textColor = '#000000';
  }
  
  // random
  randomBtn.onOutside = function() {
    this.color = '#FFFFFF'
    this.textColor = '#000000';
  }
  randomBtn.onHover = function() {
    this.color = '#AAAAAA';
    this.textColor = '#000000';
  }
  randomBtn.onPress = function() {
    this.color = '#000000';
    this.textColor = '#FFFFFF';
  }
  randomBtn.onRelease = function() {
    this.color = '#AAAAAA';
    this.textColor = '#000000';
  }
  
   //for (let i = 0; i < 4; i++) {
    // wordNumBtn[i].onOutside = function() {
    //this.color = '#FFFFFF'
    //this.textColor = '#000000';
    // wordNumBtn[i].onHover = function() {}
    // wordNumBtn[i].onPress = function() {}
    // wordNumBtn[i].onRelease = function() {}
  //}
  
}

function setupColorSlider() {
  colorSlider = createSlider(0, 360, 180, 10);
  colorSlider.position(width/2, height - 60);
  colorSlider.style('width', '280px');
  colorSlider.style('height', '25px');
}


// ===========================================
// RITA LIBRARY METHODS
// help from: https://www.youtube.com/watch?v=lIPEvh8HbGQ
let y = -60;  // starting y value for output position
function processRita() {
//split up string
  let s = input.value();
  let rs = new RiString(s);
  let words = rs.words();
//get parts of speech
  let pos = rs.pos();
  console.log(pos);
  let output = " ";
  for (let i = 0; i < words.length; i++){
    // if it's a noun, replace with another noun (plural&singular)
    if (/nn.*/.test(pos[i])){
        output += lexicon.randomWord(pos[i]);
      output += " ";
    } else {
      output += words[i];
      output += " ";
    }
  }
  
  //ritaText = createP(output);
 //ritaText.style('font-size', '45px');
  //ritaText.position(0, 100);
  txtP = createP(output);
  console.log(txtP);
  txtP.style('font-size', '36px');
  txtP.position(10, y+=28);
  text(txtP, 0, 0);
}



//===========================================
