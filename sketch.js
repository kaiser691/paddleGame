let xPos = [];
let yPos = [];
let ySpeed = [];
let rColor = [];
let gColor = [];
let bColor = [];
let currentScene = 1;
let gameover = false;
let paddle;
let ball;

function setup(){
    frameRate(60);
    createCanvas(windowWidth, windowHeight);
    ball = new Ball(width, height);
    paddle = new Paddle(width,height,ball);  
}
function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    paddle = new Paddle(width, height,ball);
}
function animate(){
    if(frameCount % 1 == 0){
        xPos.push(random(0, width));
        yPos.push(-50);
        ySpeed.push(random(1, 10));
        rColor.push(random(0, 255));
        gColor.push(random(0, 255));
        bColor.push(random(0, 255));
    }
    for(let i = 0; i < xPos.length; i++){
        fill(rColor[i], gColor[i], bColor[i]);
        noStroke();
        ellipse(xPos[i], yPos[i], 20, 20);
        yPos[i] += ySpeed[i];
        if(yPos[i] > height + 50){
            xPos.splice(i, 1);
            yPos.splice(i, 1);
            ySpeed.splice(i, 1);
            rColor.splice(i, 1);
            gColor.splice(i, 1);
            bColor.splice(i, 1);
            i--;
        }
    }
}

function playing(){
    paddle.show(); 
    ball.show();  
}

function sceneSelector(currentScene){
    if(currentScene == 1){
        animate();
    }else if(currentScene == 2){
        playing();
    }else if(currentScene == 3){
        document.querySelector(".gOverScoreText").textContent =  score;
        document.querySelector(".gOverScore").style.display = "block";
        document.querySelector(".scoreContainer").style.display = "none";
        xPos = [];
        yPos = [];
        ySpeed = [];
        rColor = [];
        gColor = [];
        bColor = [];
    }
}

function draw(){ 
    background(0, 221, 255);
    sceneSelector(currentScene);
}
