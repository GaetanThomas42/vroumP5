let player;
let cars = [];
let width = innerWidth;
let height = innerHeight;
let images = [];
let lines = [];
let score = 10;
let freq = 25;

function setup() {
    
    createCanvas(width,height);
    imageMode(CENTER);
    rectMode(CENTER);
    for (var i = 0; i < 1; i++) { //Boucle pour load images planétes
        images.push(loadImage(`images/car${i}.png`));
    }

    for (var i = 1; i < 11; i++) { //Boucle pour load images planétes
        lines.push(new Line(width/2, i*height/10));
        lines.push(new Line(width/3, i*height/10));
        lines.push(new Line(width/1.5, i*height/10));
    }
      //Boucle pour load images planétes
   
    player = new Player(width/2,height*0.66);
}


function draw() {
    console.log(player.bullets.length)
    if(millis() % 10 == 0){
        
        cars.push(new Enemy(random(width*0.25,width*0.75)));
        
    }
    
    background(190);
    fill(100);
    rect(width/2,height/2,width*0.66,height);
    
    
    for(let line of lines){
        line.display();
    }

    for(let car of cars){
        car.display();
    }

    fill(255);
    textSize(25);
    text("Score : " + score, width /2, height /10);
    
    player.display();
        for(let bullet of player.bullets){
        bullet.display();
    }
    
}