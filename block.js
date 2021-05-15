class Block{
    constructor(x, y, width, height) 
      {
        var options = 
        {
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visiblity = 255;
        this.image= loadImage("block.png")
        this.bodyRemoved = false
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        if(this.body.speed>7 & !this.bodyRemoved)
        {            
        World.remove(world, this.body);  
        this.bodyRemoved = true        
        }
        
        if(this.bodyRemoved)
        {
          push();
          translate(pos.x, pos.y);
          rotate(angle);  
          imageMode(CENTER);
          tint(255, this.visiblity)
          image(this.image,0,0,this.width,this.height)
          this.visiblity = this.visiblity - 5;
          pop();
        }
        else
        {
          push();
          translate(pos.x, pos.y);
          rotate(angle);          
          imageMode(CENTER);
          image(this.image,0,0,this.width,this.height)         
          pop();
        }

 }
}