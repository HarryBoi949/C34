 class Stone{
     constructor(x,y,r){
  var options={
      isStatic:false,
      restitution:0,
     friction:1.5,
  }
this.r=r
 this.x=x
 this.y=y

 this.body=Bodies.circle(x,y,r,options)
 World.add(world,this.body)
 this.image=loadImage("images/stone.png")
     }
     display(){
  
     imageMode(CENTER)   
     image(this.image,this.body.position.x,this.body.position.y,100,100) 
     }

 }
