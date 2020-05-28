function setup() {
  createCanvas(800,800);

}

function draw() {
  background(255,255,255);
  rectMode(CENTER)
  square(400,400,400)
  triangle(200,200,300,200,250,50)
  triangle(500,200,600,200,550,50)
  rect(400,125,200,150)
  triangle(300,50,500,50,400,10)
  rect(650,400,100,400)
  rect(150,400,100,400)
  triangle(600,200,700,200,650,75)
  triangle(100,200,200,200,150,75)
  console.log(mouseX,mouseY)
  drawSprites();
}