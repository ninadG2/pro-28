class tree
{

   constructor(x,y,width,height)
   {
      var options = {
                      'isStatic':true
                    }
    //this.body = Bodies.rectangle(x, y, width, height, options)
    this.width = width;
    this.height = height;
    this.x = x
    this.y = y
    //World.add(world, this.body)
    this.image = loadImage("Plucking mangoes/tree.png")

   }

   display()
   {
     //var treePos = this.body.position;
     image(this.image, this.x, this.y, this.width, this.height)
     imageMode(CENTER)
   }

}