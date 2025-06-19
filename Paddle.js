class Paddle{
    ball;
    x;
    y;
    width;
    height;
    constructor(width, height, ball) {
        this.ball = ball;
        this.x = width/2;
        this.y = height*0.95;
        this.width = width/5;
        this.height = height/16;
    }
    show(){
        fill(255, 0, 0);
        rectMode(CENTER);
        rect(this.x,this.y,this.width,this.height);
        if(mouseX+(this.width/2) >= width){
            this.x = width - (this.width/2);
        }else if(mouseX-(this.width/2) <= 0){
            this.x = this.width/2;
        }else{
            this.x = mouseX;
        }
        this.collide();
    }
    
    collide(){
        if(this.ball.y + (this.ball.width/2) >= this.y - (this.height/2) && 
           this.ball.y - (this.ball.width/2) <= this.y + (this.height/2) &&
           this.ball.x + (this.ball.width/2) >= this.x - (this.width/2) &&
           this.ball.x - (this.ball.width/2) <= this.x + (this.width/2)){
            this.ball.ySpeed *=-1;
            scoreAdd();
        }
    }   
}