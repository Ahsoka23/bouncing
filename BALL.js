class BALL{
    constructor(x,y){
        this.x=x
        this.y=y
        this.radius=25
        this.velocityX=0;
        this.velocityY=0;
    }

    cratee(){
        ellipseMode(RADIUS)
        ellipse(this.x,this.y,this.radius)
        this.x+=this.velocityX;
        this.y+=this.velocityY;
    }

 
    movee(vx,vy){
        this.velocityX=vx;
        this.velocityY=vy;      
    }


    bounceOff(){
    
    if(this.y>400-this.radius||this.y<this.radius){
        this.velocityY*=-1
    }

    if(this.x>400-this.radius||this.x<this.radius){
        this.velocityX*=-1
    }
    

    }

    bounce(obj){
        if(obj.y-this.y<this.radius*2 && obj.x-this.x<this.radius*2 && bc==true){
            this.velocityY*=-1
            this.velocityX*=-1
            obj.velocityY*=-1
            obj.velocityX*=-1

            bc=false;
        } else{
            bc=true;
        }
    
        
    }
    
}