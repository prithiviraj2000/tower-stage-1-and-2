class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.Visiblity=225;
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      
 display(){
   //console.log(this.body.speed);
   if(this.body.speed < 3){
    rect( this.body.position.x, this.body.position.y,this.width, this.height);
     
   }
   else{
     World.remove(world, this.body);
     
   }
   
 }
}
