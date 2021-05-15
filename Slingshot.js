class Slingshot 
{
   constructor (body1,point2)
   {
    var options =
    {
       bodyA: body1,
       pointB: point2,
       stiffness: 0.1,
       length: 1

    }

    this.slingshot = Constraint.create (options);
    World.add(world,this.slingshot);
   }

    display()
    {
      if (this.slingshot.bodyA)
      {
         var body1pos = this.slingshot.bodyA.position;
         var body2pos = this.slingshot.pointB;
      push();
       if(body1pos.x<300)
       {
          stroke("#301608")
          strokeWeight(7)
         line(body1pos.x-15, body1pos.y,body2pos.x-30,body2pos.y);
         line(body1pos.x+20, body1pos.y,body2pos.x+30,body2pos.y); 
       }
       else{
         stroke("#301608")
         strokeWeight(2)
         line(body1pos.x-15, body1pos.y,body2pos.x-30,body2pos.y);
         line(body1pos.x+20, body1pos.y,body2pos.x+30,body2pos.y); 
       }
     pop();
      }
    }

      

    fly()
    {
      this.slingshot.bodyA= null;
    }
}