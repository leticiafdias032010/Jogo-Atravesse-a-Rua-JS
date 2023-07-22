function setup(){
    createCanvas(500, 400);
    sonTrilha.loop();
}


function draw(){
  background(imagemEstrada);
  mostrAtor();
  movimentAtor();
  movimentaCarros();
  mostraCarros();
  VPPICarros();
  VPPIAtor();
  VColisao();
  colidiu();
  incluiPontos();
  marcaPonto();
  PontuouVPPIA();
  VColisao();
  PontosMaiorQZero();
}