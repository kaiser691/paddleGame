class Ball{
    constructor(width, height){
        this.width = height/20;
        this.height = height;
        this.x = random((width/20)+10, width-(this.width+10));
        this.y = this.width+20;
        this.xSpeed = random(10,30);
        this.ySpeed = random(10,30);
    }
    show(){
        fill(255);
        noStroke();
        ellipse(this.x, this.y, this.width, this.width);
        this.move();
        this.gOver();
    }
    move(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        if(this.x + (this.width/2) >= width){
            this.xSpeed *=-1;
        }
        if(this.x-(this.width/2) <= 0){
            this.xSpeed *=-1;
        }
        if(this.y-this.width/2 <= 0){
            this.ySpeed *=-1;
        }
    }
    gOver(){
        if(this.y > height + (this.width/2)){
            gameover = true;
            currentScene = 3;
            document.querySelector(".gOverScoreText").innerHTML = score;
        }
    }
}