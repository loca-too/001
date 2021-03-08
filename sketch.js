let x=0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  //background(220);
  x=x+0.05
  
  //fill(RGB, 255, 255, 255, 1);

  //circle(mouseX, mouseY, 20+5*sin(x));
  //square(mouseX, mouseY, 20, 5);
  //noStroke();
  if(mouseIsPressed){
  fill(mouseX,mouseY,100);
  triangle(mouseX+30, mouseY+75, mouseY+58, 20, mouseX+86, mouseY+75);  
  //noStroke();
    
  } else{
    fill(mouseX,mouseY,100);
    circle(mouseX, mouseY, 20+5*sin(x));
    //noStroke();
  }
 

  
}