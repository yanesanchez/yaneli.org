// =======================================================
// MAIN METHODS

let hVal, sVal, bVal;

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



// =======================================================
// RITA LIBRARY METHODS
// help from: https://www.youtube.com/watch?v=lIPEvh8HbGQ

let y = 30;  // starting y value for output position
let inputTxt;
let font, lexicon;
let ritaText, txtP;

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

  //ritaText = createP(output);
 //ritaText.style('font-size', '45px');
  //ritaText.position(0, 100);

  //txtP = createP(output);
  document.getElementById("outputTxt").innerHTML = output;
  //txtP.parent("outputTxt");
  //txtP = document.getElementById("outputTxt").value;
  console.log(output);
  //txtP.style('text-align', 'center');
  //txtP.style('font-size', '36px');
  //txtP.position(30, y+=28);
  //text(txtP, 100, 100);
}

/*
hVal = document.getElementById('hueR').value;
sVal = document.getElementById('saturationR').value;
bVal = document.getElementById('brightnessR').value;
document.body.style.backgroundColor = "hsl("+hVal+", "+sVal+", "+bVal+")";
*/
