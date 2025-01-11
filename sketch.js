let entrance;

//play button is clicked
let play = false;

//about is clicked
let about = false;

//pad
let pad;

//ball
let ball;

function setup(){
    createCanvas(windowWidth,windowHeight);  
    entrance = new Start(width,height);
    ball = new Ball(width,height);
    pad = new Pad(width,height,ball);
    
}

function draw(){
    background(143, 209, 235);

    if(!play&&!about){
        entrance.Show();
    }
    if(play){
        pad.show();
        ball.show();
    }
    if(about){
        entrance.info();
    }

   

}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    entrance = new Start(width,height);
    ball = new Ball(width,height);
    pad = new Pad(width,height,ball);
    
  }

function mouseClicked(){
    if(mouseX<(width/2)+100&&mouseX>(width/2)-100&&mouseY<450&&mouseY>350){
        if(!about){
            play = true;
        }
    }
    
    if(mouseX<(width/2)+25&&mouseX>(width/2)-25){
        if(mouseY<275&&mouseY>225){
            if(!play){
                about = true;
            }
        }
    }

    if(about){
        if(mouseX+(205/2)>((width/2)-23)&&mouseX-(205/2)<(width/2)-23){
            if(mouseY>185&&mouseY<205){
                window.open("https://www.paypal.me/KaiserAcosta", "_blank"); // Redirect
            }
        }
    }

    if(about){
        if(mouseX-(35/2)<(width/2)-100 && mouseX+(35/2)>(width/2)-100){
            if(mouseY+10>217 && mouseY-10<217){
                window.open("gcashQR.html","_blank");
            }
        }
    }

    if(about&&!play){
        if(mouseX-25<(width/2)+175&&mouseX+25>(width/2)+175){
            if(mouseY-25<125 && mouseY+25>125){
                about = false;
            }
        }
    }


}


