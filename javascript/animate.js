function stars(){
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var randomRadius;

  context.strokeStyle = white;


    randomRadius = random(0.3, 2);
    //context.fillRect(random(0, canvas.width), random(0, canvas.height), randomRadius, randomRadius);
    context.beginPath();
    context.arc(random(0, canvas.width), random(0, canvas.height), 1, 0, 2 * Math.PI);
    context.fill();
  
}

function gradient() {
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");

  // Create gradient
  var grd = ctx.createRadialGradient(c.width/2, c.height/2, 0, 200, 100, 200);
  grd.addColorStop(0, "red");
  grd.addColorStop(1, "black");

  // Fill with gradient
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, c.width, c.height);
}
