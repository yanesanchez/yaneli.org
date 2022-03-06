// =======================================================
// MAIN METHODS

let hVal, sVal, bVal;
let fSize;

function updateBackground() {
  // hue
  hVal = document.getElementById("hueR").value;
  document.getElementById("hV").innerHTML = hVal;
  // saturation
  sVal = document.getElementById("saturationR").value;
  document.getElementById("sV").innerHTML = sVal + "%";
  // brightness
  bVal = document.getElementById("brightnessR").value;
  document.getElementById("bV").innerHTML = bVal + "%";

  if (bVal < 50) {
    document.body.style.color = "white";
    //document.getElementsByClassName("slider").style.color = "white";
  } else {
    document.body.style.color = "black";
  }
  document.body.style.backgroundColor = "hsl("+hVal+", "+sVal+"%, "+bVal+"%)";
}

function updateFontSize() {
  fSize = document.getElementById("fontSizeR").value;
  document.getElementById("fsV").innerHTML = fSize + "px";
  document.getElementById("outputTxt").style.fontSize = fSize + "px";
}


// =======================================================
// RITA LIBRARY METHODS
// help from: https://www.youtube.com/watch?v=lIPEvh8HbGQ

let inputTxt;
let lexicon;

function setupRita() {
  lexicon = new RiLexicon();
}

function processRita() {
  inputTxt = document.getElementById("textInput").value;
//split up string
  //let s = input.value();
  let rs = new RiString(inputTxt);
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
  //console.log(output);
  output += "<br>";
  document.getElementById("outputTxt").innerHTML += output;
}
