let score = 0;
function playClick(){
   document.querySelector(".entrance").style.display = "none";
   document.querySelector(".scoreContainer").style.display = "block";
   currentScene++;
   dispScore();
}
function exitClick(){
   document.querySelector(".info").style.display = "none";
   document.querySelector(".entrance").style.display = "block";
}
function infoClick(){
   document.querySelector(".entrance").style.display = "none";
   document.querySelector(".info").style.display = "block";
}
function scoreAdd(){
  score+=1;
  dispScore();
}
function dispScore(){
   document.querySelector(".score").innerHTML = score;
}
function gcash(){
   document.querySelector(".qrContainer").style.display = "block";
   document.querySelector(".info").style.display = "none";
}
function restartClick(){
   currentScene = 1;
   score = 0;
   gameover = false;
   document.querySelector(".gOverScore").style.display = "none";
   document.querySelector(".scoreContainer").style.display = "none";
   document.querySelector(".entrance").style.display = "block";
   ball = new Ball(width, height);
   paddle = new Paddle(width, height, ball);
}
function exitQRClick(){
   document.querySelector(".qrContainer").style.display = "none";
   document.querySelector(".info").style.display = "block";
}
function paypal(){
   window.open('https://www.paypal.com/paypalme/KaiserAcosta', '_self');
}

