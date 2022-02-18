let noiseScale = 0.02;
let noiseVal;

function setup() {
	let canvas = select('canvasContainer');
	//let canvas = createCanvas(displayWidth, displayHeight);
	//canvas.parent("canvasContainer");
	



}

function draw() {
		background(0);

		for (let i = 0; i < width; i++){
			//noiseVal = noise(mouseX+i*noiseScale, mouseY*noiseScale);
			stroke(255*noiseVal);
			strokeWeight(1);
			//line(i, mouseY*noiseVal, i, height*noiseVal);
			stroke(255);
			strokeWeight(random(0.3, 1.3));
			point(random(0, width), random(0, height));

		}

}