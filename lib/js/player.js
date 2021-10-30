class Player extends Car{
    
    constructor(x,y,speed){
        super(x,y,speed);
    this.bullets = [];
    this.initialSpeed = speed;
    }
    
    display(){
        super.display();
        this.move();
        this.update();
    }
    
    update(){
    
        this.speed = map(this.pos.y,0,height,0,this.initialSpeed);
        if(this.pos.y < height - this.size){
            this.pos.y += 3;
        }

        
    }
    
    move(){

        if(keyIsDown(RIGHT_ARROW) && this.pos.x < width*0.75){
            this.pos.x += 5;
        }
        if(keyIsDown(LEFT_ARROW) && this.pos.x > width*0.25){
            this.pos.x -= 5;
        }
        if(keyIsDown(UP_ARROW) && this.pos.y > height*0.1){
            
            
                
                this.pos.y -= this.speed;
                
            
            
        }
        if(keyIsDown(DOWN_ARROW)){
            
            if(this.pos.y < height - this.size){
                
                this.pos.y += this.speed/2;
                
            }
        }
        
    }
}