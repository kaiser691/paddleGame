class Ball{
    constructor(w,h){
        this.winW = w;
        this.winH = h;

        this.size = 50;
        this.x = random(50,this.winW-50);
        this.y = random(50,100);

        this.ySpeed = random(15,25);
        this.xSpeed = random(15,25);
    }
    show(){
        fill(255);
        strokeWeight(3);
        stroke(0, 255, 42);
        ellipse(this.x,this.y,this.size,this.size);
        this.move();
        this.bounds();
    }
    move(){
        this.x+=this.xSpeed;
        this.y+=this.ySpeed;
    }
    bounds(){
        if(this.x>=this.winW-(this.size/2)||this.x<=this.size/2){
           
            this.xSpeed*=-1;
         }
         if(this.y<=this.size/2){
             this.ySpeed*=-1;
         }
    }
    gOver(){
        if(this.y+(this.size/2)>this.winH){
            return true;
        }else{
            return false;
        }
    }

}

