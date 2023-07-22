//Ator

let yAtor = 366;
let xAtor = 250;
let colisao = false;
let Pontos = 0;


function mostrAtor() {
  image(imagemAtor, xAtor, yAtor, 30, 30);
}

function movimentAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    yAtor += 3;
  }
  if (keyIsDown(LEFT_ARROW)){
    xAtor -= 3;
  }
  if (keyIsDown(RIGHT_ARROW)){
    xAtor += 3;}
}

function VPPIAtor(){
  if(xAtor < -10){
    xAtor = 250, yAtor = 367;
  }
  if(xAtor > 515){
    xAtor = 250, yAtor = 367;
  }
  if(yAtor > 415){
    yAtor = 367, xAtor = 250;
  }
}

function VColisao() {
  //collideRectCircle(x1, y1, width1, height1, cx, cy,      diameter)
  for (let i = 0; i < imagemCarros.length; i++)
  {colisao = collideRectCircle(xCarros[i],               yCarros[i], CCarro, ACarro, xAtor, yAtor, 15)
    if(colisao){      
      colidiu();
      sonColidiu.play();
    if(PontosMaiorQZero()){
     Pontos -= 1; 
     }
    }
  }
}

function colidiu() {
 if(colisao){
 yAtor = 369, xAtor = 250;} 
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(178,34,34))
  text(Pontos, width / 5, 27);
}

function PontuouVPPIA() {
  if(yAtor < -7.1){
    yAtor = 369, xAtor = 250;
  }
}

function marcaPonto(){
  if (yAtor < -7){
    Pontos += 1;
    sonPontos.play();
    PontuouVPPIA();
  }
}

function PontosMaiorQZero(){
  return Pontos > 0;
}













