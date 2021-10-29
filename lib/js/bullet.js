class Bullet{
    
    constructor(x,y){
        this.pos = createVector(x,y);
        this.size = 10;
    }
    
    
    display(){
        this.move();
        this.draw();
    }
    draw(){
        fill(255);
        circle(this.pos.x,this.pos.y,this.size);
    }

    move(){
            this.pos.y-= 3;
    }
}