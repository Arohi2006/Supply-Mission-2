class Red{
   
constructor(x,y,width,height){

var red_option ={
    isStatic:true
}
this.red=Bodies.rectangle(x,y,width,height,red_option);
this.width=width;
this.height=height;
World.add(world,this.red);
}



display(){

var position = this.red.position
rectMode(CENTER);
fill("red");
rect(position.x,position.y,this.width,this.height);


}
    
}