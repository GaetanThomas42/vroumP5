let player;
let cars = [];
let width = innerWidth;
let height = innerHeight;
let images = [];
let lines = [];
let score = 0;
function setup() {
    
    createCanvas(width,height);
    imageMode(CENTER);
    
    rectMode(CENTER);
  for (var i = 0; i < 1; i++) { //Boucle pour load images planétes
    images.push(loadImage(`images/car${i}.png`));
  }
    for (var i = 0; i < 10; i++) { //Boucle pour load images planétes
    lines.push(new Line(width/2, i*height/10));
    lines.push(new Line(width/3, i*height/10));
    lines.push(new Line(width/1.5, i*height/10));
  }
      //Boucle pour load images planétes
   
    player = new Car(width/2,height*0.66,images[0]);
}


function draw() {
    
    background(190);
    fill(100);
    rect(width/2,height/2,width*0.66,height);
    fill(255);
    
for(let line of lines){
    line.display();
}
    
    textSize(25);
    text("Score : " + score, width /2, height /10);
    
    player.display();
    
    
}