
class Start{
    constructor(w,h){
        this.w = w;
        this.h = h;
        this.xPos = [];
        this.yPos = [];
        this.ySpeed = [];
        
    }
    Show(){
        this.animate();
        this.name();
        this.playB(mouseX,mouseY);
        this.about();
    }
    animate(){
        this.xPos.push(random(10,this.w-10));
        this.yPos.push(-10);
        this.ySpeed.push(random(1,10));

        for(let i = 0;i<this.xPos.length;i++){
            fill(255,255,255);
            noStroke();
            ellipse(this.xPos[i],this.yPos[i],10,10);
            this.yPos[i]+=this.ySpeed[i];
            
        }
        for(let i = 0;i<this.xPos.length;i++){
            if(this.yPos[i]>=this.h+10){
                this.xPos.splice(i,1);
                this.yPos.splice(i,1);
                this.ySpeed.splice(i,1);
            }
        }
    }
    name(){
        fill(255,0,0);
        rectMode(CENTER);
        strokeWeight(10);
        stroke(0, 179, 255);
        rect(this.w/2,90,470,80);
        textAlign(CENTER);
        textSize(50);
        fill(255);
        stroke(37, 186, 116);
        textFont(loadFont('/assets/Italic.ttf'));
        strokeWeight(5);
        text("Kaiser's Paddle Game", this.w/2, 105); 
    }

    playB(x,y){
        rectMode(CENTER);
        strokeWeight(3);
        fill(255);
        if(x<(this.w/2)+100&&x>(this.w/2)-100&&y<450&&y>350){
            fill(200);
        }
        rect(this.w/2,400,200,100);
        textAlign(CENTER);
        textSize(50);
        fill(255,0,0);
        if(x<(this.w/2)+100&&x>(this.w/2)-100&&y<450&&y>350){
            fill(200,0,0);
        }
        text("PLAY",this.w/2,410);
    }

    about(){
        rectMode(CENTER);
        fill(255,255,255);
        strokeWeight(5);
        stroke(0);
        if(mouseX<(this.w/2)+25&&mouseX>(this.w/2)-25){
            if(mouseY<275&&mouseY>225){
                fill(200,200,200);
                stroke(255,50,50);
            }
        }
        rect(this.w/2,250,50,50);
        textAlign(CENTER);
        text("i",this.w/2,268);
    }

    info(){
        
        rectMode(CENTER);
        fill(255,255,255);
        strokeWeight(5);
        stroke(255,0,0);
        rect(this.w/2,300,400,400);
        fill(0);
        textAlign(LEFT);
        textSize(20);
        noStroke();
        text("Creator: Kaiser B. Acosta",(this.w/2)-190,150);
        text("For Donations:",(this.w/2)-190,180);
        text("PayPal: ",(this.w/2)-190,200);
        fill(0,0,255);
        if(mouseX+(205/2)>((this.w/2)-23)&&mouseX-(205/2)<(this.w/2)-23){
            if(mouseY>185&&mouseY<205){
                fill(255,0,0);
            }
        }
        text("              paypal.me/KaiserAcosta",(this.w/2)-190,200);
        fill(0,0,0);
        text("GCash: ",(this.w/2)-190,223);
        fill(0,0,255);
        if(mouseX-(35/2)<(this.w/2)-100 && mouseX+(35/2)>(this.w/2)-100){
            if(mouseY+10>217 && mouseY-10<217){
                fill(255,0,0);
            }
        }
        text("               QR",(this.w/2)-190,223);

        //to delete
        //rectMode(CENTER);
        //stroke(0);
        //noFill();
        //rect((this.w/2)-100,217,35,20);
        //end

        //QR
        //imageMode(CENTER);
        //image(img,this.w/2,0);

        this.aboutExit();
    }
    aboutExit(){
        //rect(this.w/2,300,400,400);
        rectMode(CENTER);
        fill(0,255,0);
        strokeWeight(2);
        stroke(2);
        if(mouseX-25<(this.w/2)+175&&mouseX+25>(this.w/2)+175){
            if(mouseY-25<125 && mouseY+25>125){
                fill(0,200,0);
            }
        }
        rect((this.w/2)+175,125,50,50);
        textSize(50);
        fill(255,0,0);
        if(mouseX-25<(this.w/2)+175&&mouseX+25>(this.w/2)+175){
            if(mouseY-25<125 && mouseY+25>125){
                fill(200,0,0);
            }
        }
        text("X",(this.w/2)+160,143);
        
    }

    
}
