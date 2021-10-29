class Player extends Car{
    
    constructor(x,y){
        super(x,y);
    }
    
    display(){
        super.display();
        this.move();
        this.update();
    }
    
    update(){
        
        if(this.pos.y < height - this.size){
            this.pos.y += 3;
        }

        
    }
    
    collide(){
        
    }
     
    move(){

        if(keyIsDown(RIGHT_ARROW) && this.pos.x < width*0.75){
            this.pos.x += 5;
        }else if(keyIsDown(LEFT_ARROW) && this.pos.x > width*0.25){
            this.pos.x -= 5;
        }
        if(keyIsDown(UP_ARROW) && this.pos.y > height*0.6){
            
            this.pos.y -= 3;
            
        }else if(keyIsDown(DOWN_ARROW)){
            
            if(this.pos.y < height - this.size){
                
                this.pos.y += 3;
                
            }
        }
        
    }
}