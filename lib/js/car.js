class Car{

constructor(x,y,speed){
    
    this.color = {
                    red:random(255),
                    green:random(255),
                    blue:random(255),
                 };
    
    this.pos = createVector(x,y);
    this.size = width/10;
    this.speed = speed;
}
    
    display(){
        this.draw();
    }
  
    draw(){
      fill(this.color.red,this.color.green,this.color.blue);
      rect(this.pos.x,this.pos.y,this.size*0.6,this.size);
    }

}
