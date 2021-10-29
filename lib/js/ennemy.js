class Enemy extends Car{
    
    constructor(x,y){
        super(x,y);
    }
    
    display(){
        super.display();
        this.collide();
        this.move();
    }
    
    collide(){
        if(this.pos.y > height){
            cars.splice(cars.indexOf(this),1);
            score++;
        }else if(dist(this.pos.x, this.pos.y, player.pos.x, player.pos.y)< player.size){
            cars.splice(cars.indexOf(this),1);
            score--;
        }
    }
    
    move(){
            this.pos.y+= 3;
    }
}