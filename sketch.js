let entrance;

//play button is clicked
let play = false;

//about is clicked
let about = false;

//pad
let pad;

//ball
let ball;

//to check game over
let gameover = false;

//to store scores: ongoing project unfinished purpose for displaying high scores
let scores = [];

function setup(){
    createCanvas(windowWidth,windowHeight);  
    entrance = new Start(width,height);
    ball = new Ball(width,height);
    pad = new Pad(width,height,ball);  

}

function draw(){
    frameRate(60);
    background(143, 209, 235);

    if(!play&&!about){
        entrance.Show();
    }

    //play loop
    if(play){
        pad.show();
        ball.show();     
        gameover = ball.gOver();
        
        if(!gameover){
            pad.displayScore(pad.getScore());
        }
        
    }



    if(about){
        entrance.info();
    }
    if(gameover){
        pad.retry();
        pad.scoreGOver(pad.getScore());
    }

   

}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    entrance = new Start(width,height);
    pad = new Pad(width,height,ball);
    if(!gameover){
        ball = new Ball(width,height);
    }
    
  }

function mouseClicked(){
    //to click play
    if(mouseX<(width/2)+100&&mouseX>(width/2)-100&&mouseY<450&&mouseY>350){
        if(!about){
            play = true;
            gameover = false;
        }
    }
    
    //to click about
    if(mouseX<(width/2)+25&&mouseX>(width/2)-25){
        if(mouseY<275&&mouseY>225){
            if(!play){
                about = true;
            }
        }
    }

    //to click paypal link
    if(about){
        if(mouseX+(205/2)>((width/2)-23)&&mouseX-(205/2)<(width/2)-23){
            if(mouseY>185&&mouseY<205){
                window.open("https://www.paypal.me/KaiserAcosta", "_blank"); // Redirect
            }
        }
    }

    //to click gcash link
    if(about){
        if(mouseX-(35/2)<(width/2)-100 && mouseX+(35/2)>(width/2)-100){
            if(mouseY+10>217 && mouseY-10<217){
                window.open("gcashQR.html","_blank");
            }
        }
    }

    //to exit about
    if(about&&!play){
        if(mouseX-25<(width/2)+175&&mouseX+25>(width/2)+175){
            if(mouseY-25<125 && mouseY+25>125){
                about = false;
            }
        }
    }

    //retry button
    if(!about){
        if(mouseX+50>(width/2)&&mouseX-50<(width/2)){
            if(mouseY+25>300&&mouseY-25<300){ 
                play = false;
                gameover = false;
                entrance = new Start(width,height);
                ball = new Ball(width,height);
                pad = new Pad(width,height,ball);
            }
        }
    }


}


