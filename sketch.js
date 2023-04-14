// Variáveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2 ; 

// Variáveis da Raquete
let xRaquete = 7;
let yRaquete = 150;
let cRaquete = 10;
let aRaquete = 140;

// Velocidade da Bolinha
let velocidadeXBolinha = 12
let velocidadeYBolinha = 12

let colidiu = false

function setup() {
  createCanvas(1600, 783);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisao();
  mostraRaquete();
  movimentaMinhaRaquete();
  verificaColisaoRaquete();
  colisaoMinhaRaqueteBibloteca();
}

function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro);
}

function movimentaBolinha(){
   xBolinha += velocidadeXBolinha;
   yBolinha += velocidadeYBolinha;
}


function verificaColisao(){
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(){
  rect(xRaquete, yRaquete, cRaquete, aRaquete)
} 

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + cRaquete && yBolinha - raio < yRaquete + aRaquete && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
  }
}

function colisaoMinhaRaqueteBibloteca(){
  colidiu =
  collideRectCircle(xRaquete,yRaquete,cRaquete,aRaquete, xBolinha,yBolinha, raio);
    if (colidiu){
      velocidadeXBolinha *= -1;
    }
}