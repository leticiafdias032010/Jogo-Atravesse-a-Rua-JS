//Carros

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 90, 150, 210, 260, 315];
let VCarros = [7.5, 6, 8.5, 5.5, 9, 4.5];
let CCarro = 50;    
let ACarro = 40;

function mostraCarros(){
  for(let i = 0; i < imagemCarros.length; i++){
  image(imagemCarros[i], xCarros[i], yCarros[i], CCarro,     ACarro);}
}

function movimentaCarros(){
  for(let i = 0; i < imagemCarros.length; i++){
  xCarros[i] -= VCarros[i];}
}

function VPPICarros(){
  for(let i = 0; i < imagemCarros.length; i++)
 { if(xCarros[i] < -50){
    xCarros[i]= 600;} }
}
