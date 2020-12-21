class stone
{

   constructor(x,y,width,height)
   {
    var options  = {
                     'isStatic': false,
                     'density':1.2,
                     'restitution':0,
                     'friction':1
                   }
    this.body = Bodies.rectangle(x, y, width, height, options)
    this.width = width;
    this.height = height;
    World.add(world, this.body)
    this.image = loadImage("Plucking mangoes/stone.png")

   }

   display()
   {
     var stonePos = this.body.position;
     image(this.image, stonePos.x, stonePos.y, this.width, this.height)
     imageMode(CENTER)
   }

  

}