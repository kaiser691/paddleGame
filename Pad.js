class Pad{
    constructor(w,h,ball){
        //window
        this.winW = w;
        this.winH = h; 

        //score
        this.score = 0;

        //padCollide boolean
        this.collide = false;

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
                this.collide = true;
            }else{
                this.collide = false;
            }
        }
    }
    
    displayScore(scr){
        if(frameCount%60==0){
            if(this.collide){
                this.score+=1;
            }
        }
        textSize(50);
        fill(255,0,0);
        stroke(0);
        strokeWeight(3);
        text(scr,this.winW*1/8,100);
    }

    scoreGOver(scr){
        textSize(50);
        textAlign(CENTER);
        fill(255,0,0);
        stroke(0);
        strokeWeight(3);
        text("SCORE",this.winW/2,100);
        text(scr,this.winW/2,150);

    }

    getScore(){
        return this.score;
    }

    retry(){
        rectMode(CENTER);
        fill(0,0,255);
        stroke(200,0,0);
        if(mouseX+50>(this.winW/2)&&mouseX-50<(this.winW/2)){
            if(mouseY+25>300&&mouseY-25<300){
                fill(0,0,200);
                stroke(50,0,0);
            }
        }
        rect(this.winW/2,300,100,50);
        textAlign(CENTER);
        textSize(29);
        fill(255,0,0);
        if(mouseX+50>(this.winW/2)&&mouseX-50<(this.winW/2)){
            if(mouseY+25>300&&mouseY-25<300){
                fill(200,0,0);
            }
        }
        text("RETRY",this.winW/2,310);
    }


}
