class Enemy extends Car{
    
    constructor(x,y,speed){
        super(x,y,speed);
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
           
    
        }
    }
    
    move(){
            this.pos.y+= this.speed - player.speed;
    }
    
     spawn(){
        let ways = [width*0.25,width*0.5,width*0.78]
        let speeds = [6,7,8];
        let way = random(ways); 
        return new Enemy(way,-100,speeds[ways.indexOf(way)]);
    }
}