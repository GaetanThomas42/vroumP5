let player;
let cars = [];
let width = innerWidth;
let height = innerHeight;
let images = [];
let lines = [];
let score = 0;
let freq = 25;

function setup() {
    
    createCanvas(width,height);
    imageMode(CENTER);
    rectMode(CENTER);
    for (var i = 0; i < 6; i++) { //Boucle pour load images planétes
        images.push(loadImage(`images/car${i}.png`));
    }

    for (var i = 1; i < 11; i++) { //Boucle pour load images planétes
        lines.push(new Line(width*0.37, i*height/10));
        lines.push(new Line(width*0.65, i*height/10));
    }
      //Boucle pour load images planétes
   
    player = new Player(width/2,height*0.66,10);
}


function draw() {
        
    Enemy.prototype.spawn()
    
    background(190);
    fill(100);
    rect(width/2,height/2,width*0.8,height);
    
    
    for(let line of lines){
        line.display();
    }

    for(let car of cars){
        car.display();
    }
    
    displaySpeed();
    player.display();
    
    
}