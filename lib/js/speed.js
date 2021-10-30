function displaySpeed(){
    
    let s = map(player.initialSpeed - player.speed,1,player.initialSpeed,0,255)
    fill(s,0,0); 
    line(width*0.04, height *0.1,map(player.initialSpeed - player.speed,1,player.initialSpeed,-width*0.01,height*0.1),0);
    textSize(width/40);
    let kmH = parseInt(map(player.initialSpeed - player.speed,1,player.initialSpeed,0,200));
    text(kmH, width*0.02, height *0.13);
}