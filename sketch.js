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
    for (var i = 0; i < 1; i++) { //Boucle pour load images planétes
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
    
    if(millis() % 15 == 0){
        
        cars.push(Enemy.prototype.spawn());
        
    }
    
    background(190);
    fill(100);
    rect(width/2,height/2,width*0.8,height);
    
    
    for(let line of lines){
        line.display();
    }

    for(let car of cars){
        car.display();
    }
    
    let s = map(player.initialSpeed - player.speed,1,player.initialSpeed,0,255)
    fill(s,0,0); 
    line(width*0.04, height *0.1,map(player.initialSpeed - player.speed,1,player.initialSpeed,-width*0.01,height*0.1),0);
    textSize(width/40);
    let kmH = parseInt(map(player.initialSpeed - player.speed,1,player.initialSpeed,0,150));
    text(kmH, width*0.02, height *0.13);
    player.display();
    
    
}