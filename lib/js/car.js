class Car{

constructor(x,y,img){
    this.color = {red:random(255),
                  green:random(255),
                  blue:random(255)
                 };
    this.pos = createVector(x,y);
    this.size = width/10;
    this.img = img;
}
  //Caracts
  display(){
      this.draw();
      this.update();
  }
  
    
  draw(){
      fill(this.color.red,this.color.green,this.color.blue,)
      image(this.img,this.pos.x,this.pos.y,this.size*0.6,this.size);
  }
    
    update(){
        if(keyIsDown(RIGHT_ARROW) && this.pos.x < width*0.75){
            this.pos.x += 5;
        }
        if(keyIsDown(LEFT_ARROW) && this.pos.x > width*0.25){
            this.pos.x -= 5;
        }
        if(keyIsDown(UP_ARROW) && this.pos.y > height*0.6){
            this.pos.y -= 10;
        }
        if(keyIsDown(DOWN_ARROW) && this.pos.y < height*0.9){
            this.pos.y+=3;
        }
        if(this.pos.y < height*0.9){
            this.pos.y+=3;
        }
    }
}
