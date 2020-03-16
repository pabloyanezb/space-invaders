
var invasores = [
    ['X','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','X'],
    ['X','0','0','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','0','0','X'],
    ['X','0','0','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','0','0','X'],
    ['X','0','0','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','0','0','X'],
    ['X','0','0','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','0','0','X'],
    ['X','0','0','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','0','0','X'],
    ['X','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','X'],
    ['X','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','X'],
    ['X','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','X'],
    ['X','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','X'],
    ['X','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','X'],
    ['X','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','X'],
    ['X','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','X'],
    ['X','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','X'],
    ['X','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','X']
];
var vidas = 5;
var score = 0;
var nave = {
    x:10,
    y:13
}
const key = {
    right : false,
    left : false,
    space : false
}
var disparo = [];
var colision = [];


function displayInvasores(){
    var output = '';
    for (var i=0; i<invasores.length; i++){
        output += "\n<div class='row'>"
        for (var j=0; j<invasores[i].length; j++){
            if(invasores[i][j] == 'X'){
                output += "\n\t<div class='brick'></div>";
            }
            if(invasores[i][j] == '0'){
                output += "\n\t<div class='empty'></div>";
            }
            if(invasores[i][j] == '1'){
                output += "\n\t<div class='invader'></div>";
            }
        }
            output += "\n</div>";
    }
    document.getElementById('invaders').innerHTML = output;
}


var cooldown = false;
function updatePlayer(){
    if (key.left && invasores[nave.y][nave.x-1] != 'X'){
       nave.x -= 1;
    }
    else if (key.right  && invasores[nave.y][nave.x+1] != 'X'){
       nave.x += 1;
    }
    else if (cooldown == false && key.space){
        crearDisparo();
        cooldown = true;
        setTimeout(() => cooldown = false, 400);
    }
   
    displayNave();
    ganar();
}
function update(){
    updatePlayer();
   
    window.requestAnimationFrame(update);
      
}
function onKeyDown(e){
    if (e.keyCode === 37){
        key.left = true;
    }
    else if (e.keyCode === 39){
        key.right = true;
    }
    else if (e.keyCode === 32){
        key.space = true;
    }
}
function onKeyUp(e){
    if (e.keyCode === 37){
        key.left = false;
    }
    else if (e.keyCode === 39){
        key.right = false;
    }
    else if (e.keyCode === 32){
        key.space = false;
    }
}

setInterval(function(){
    var row1 = document.getElementsByClassName('row')[0];
    var ultimoRow = document.getElementsByClassName('row')[invasores.length-1];
    var mundo = document.getElementById('invaders');
    invasores.unshift(invasores.pop())
    mundo.insertBefore(ultimoRow, row1);
    perderVidas();
    }, 5000);


function disparar(){
    var disparar = document.createElement('audio');
    disparar.setAttribute('src', 'sonido/shoot.wav');
    disparar.play();
    
};
function explosion(){
    var explosion = document.createElement('audio');
    explosion.setAttribute('src', 'sonido/explosion.wav');
    explosion.play();
};
      

function displayNave(){
    document.getElementById('nave').style.top = nave.y*35+"px"
    document.getElementById('nave').style.left = nave.x*35+"px"
}
function displayScore(){
    document.getElementById('score').innerHTML = score;
}
function displayVidas(){
    document.getElementById('vidas').innerHTML = vidas;
}

displayInvasores();
displayNave();
displayScore();

function perderVidas(){
    for ( var i = 0; i <= 21 ; i++){
        
        if ( invasores[invasores.length-1][i] == '1' ){
           
            invasores[invasores.length-1][i] = '0';
            displayInvasores();
            vidas = vidas - 1;
            displayVidas();
            gameOver();
        }
    }
}
function gameOver(){
    if ( vidas <= 0 ){
        var container = document.getElementById('container');
        var gameOver = document.createElement('div');
        gameOver.className = 'game-over';
        gameOver.innerHTML = 'GAME OVER';
        container.appendChild(gameOver);
        var restart = document.createElement('a');
        restart.className = 'restart';
        restart.innerHTML = 'RESTART?';
        restart.setAttribute('href', '');
        container.appendChild(restart);
        
        vidas = 0;
        
    }
}
function ganar(){
    if ( vidas <= 0){
        return;
    }
    var container = document.getElementById('container');
    var hasChild = container.querySelector(".invader");
    if ( hasChild == null ){
        alert('YOU WIN!, your score:  '+ score)
    }
}

function crearDisparo(){
    disparo.push({
        x: nave.x
    });
    
    var mundo = document.getElementById('misiles');
    var misil = document.createElement("div");
    misil.className = "misil";
    mundo.appendChild(misil);
    
    //Posiciona al misil sobre la nave (su misma posición x al momento de disparar)
    
    //Mueve los misiles hacia arriba
    var misilX = (disparo[disparo.length-1].x+0.2);
    misil.style.transform = `translate(${misilX*35}px)`;
    
    setInterval(function(){
        
        var misilY = misil.offsetTop;
        misil.style.top = (misilY - 35 ) + 'px';
        
        //Elimina los misiles que salen de la pantalla (cuando su posición top es menor 1 cero)
        
        if ( misilY < 0 ){
            mundo.removeChild(misil);
        }
        else if (misilY > 0 && invasores[Math.floor(misilY/35)][Math.floor(disparo[disparo.length-1].x)] == '1'){
            colision.push({
                x: Math.floor(misilX),
                y: Math.floor(misilY/35)
            });
            detectarColision(misil,misilY,misilX);
            colision.pop();
        };
        
        }, 10);
        disparar();
}
function detectarColision(misil,misilY,misilX){
    var misiles = document.getElementById('misiles');
    var misil = document.getElementsByClassName('misil')[0];
    if(misilY/35 < 0 ){
        return;
    } 
    for (var i = 0; i < colision.length; i++){
        if (invasores[colision[i].y][colision[i].x] == '1'){
            invasores[colision[i].y][colision[i].x] = '0';
            if (misiles.childElementCount > 0){
                misil.remove();
            }
            displayInvasores();
            explosion();
            score = score + 10;
            
            displayScore();
    
        }
    }
     
}
window.addEventListener("keydown",onKeyDown);
window.addEventListener("keyup",onKeyUp);
window.requestAnimationFrame(update);
        
           
