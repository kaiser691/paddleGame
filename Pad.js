class Pad{
    constructor(w,h,ball){
        //window
        this.winW = w;
        this.winH = h;

        //ball object
        this.ball = ball;


        //pad size
        this.padW = 200;
        this.padH = 50;

        //pad position
        this.x = this.winW/2;
        this.y = this.winH*9/10;
    }
    show(){

        rectMode(CENTER);
        fill(255,0,0);

        this.x = mouseX;
        
        strokeWeight(2);
        stroke(0, 106, 255);
        rect(this.x,this.y,this.padW,this.padH);
        this.collision();
    }
    collision(){
        if(this.ball.y+(this.ball.size/2)>=this.y-(this.padH/2) && this.ball.y-(this.ball.size/2)<=this.y+(this.padH/2)){
            if(this.ball.x+25<=this.x+100 && this.ball.x-25>=this.x-100){
                this.ball.ySpeed = random(10,30);

                this.ball.ySpeed*=-1;
            }
        }
    }

}