class Line{
    constructor(x,y){
        this.pos = createVector(x,y);
        this.length = height / 50;
    }
    
    display(){
        this.draw();
        this.move();
    }
    draw(){
        fill(255);
         line(this.pos.x, this.pos.y , this.pos.x, this.pos.y + this.length);
    }
    move(){
        if(this.pos.y >= height){
            this.pos.y = -this.length;
        }
        
        this.pos.y+= map(player.initialSpeed - player.speed ,1,player.initialSpeed,0,15);
        
    }
}
