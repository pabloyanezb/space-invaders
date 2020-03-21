
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
    ['X','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','X'],
    ['X','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','X']
];
var vidas = ['v','v','v','v','v','v','v'];
var score = 0;
var nave = {
    x:10,
    y:13
}
var victoria = false;
var game_over = false;
const key = {
    right : false,
    left : false,
    space : false
}
var disparo = [];
var colision = [];
var cooldown = false;

// Dibuja los invasores según la grilla
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

// Muestra las vidas de forma visual en la pantalla, en forma de "divs" con imágenes de corazones
function displayVidas(){
    var output = '';
    for (var i=0; i<vidas.length; i++){
        if(vidas[i] == 'v'){
            output += "<div id='vida'></div>";
        }
        if(vidas[i] == '0'){
            output += "<div class='empty'></div>";
        }
    }
    document.getElementById('vidas').innerHTML = output;
}

// Actualiza el movimiento del jugador
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
// Hace que los invasores bajen
setInterval(function(){
    var row1 = document.getElementsByClassName('row')[0];
    var ultimoRow = document.getElementsByClassName('row')[invasores.length-1];
    var mundo = document.getElementById('invaders');
    invasores.unshift(invasores.pop())
    mundo.insertBefore(ultimoRow, row1);
    perderVidas();
    }, 4500);
// Setea la posición de la nave
function displayNave(){
    document.getElementById('nave').style.top = nave.y*35+"px"
    document.getElementById('nave').style.left = nave.x*35+"px"
}
function displayScore(){
    document.getElementById('puntaje').innerHTML = score;
}

displayVidas();
displayInvasores();
displayNave();
displayScore();

function perderVidas(){
    for ( var i = 0; i <= 21 ; i++){
        // Detecta cuando los invasores logran pasar por debajo de la línea en que se mueve el jugador
        if ( invasores[invasores.length-1][i] == '1' ){
            invasores[invasores.length-1][i] = '0';
            displayInvasores();
            vidas.pop();
            displayVidas();
        }
            gameOver();
    }
}
// Detecta cuando el jugador se queda sin vidas y crea el "mensaje" de derrota
function gameOver(){
    if ( vidas.length == 0 && game_over == false){
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
        game_over = true;
    }
}
// Detecta cuando el jugador gana y crea el "mensaje" de victoria
function ganar(){
    if ( vidas <= 0){
        return;
    }
    var container = document.getElementById('container');
    var hasChild = container.querySelector(".invader");
    if ( hasChild == null && victoria == false){
        var victory = document.createElement('div');
        victory.className = 'victory';
        victory.innerHTML = 'VICTORY';
        container.appendChild(victory);
        var yourScore = document.createElement('div');
        yourScore.className = 'your-score';
        yourScore.innerHTML = 'Your score: '+score;
        container.appendChild(yourScore);
        var restart = document.createElement('a');
        restart.className = 'restart';
        restart.innerHTML = 'RESTART  ?';
        restart.setAttribute('href', '');
        container.appendChild(restart);
        victoria = true;
    }
}
// Crea los sonidos de disparo y explosión
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

function crearDisparo(){
    disparo.push({
        x: nave.x
    });
    var mundo = document.getElementById('misiles');
    var misil = document.createElement("div");
    misil.className = "misil";
    mundo.appendChild(misil);
    
    // Posiciona al misil sobre la nave (su misma posición x al momento de disparar)
    var misilX = (disparo[disparo.length-1].x+0.2);
    misil.style.transform = `translate(${misilX*35}px)`;
    
    // Mueve los misiles hacia arriba
    setInterval(function(){
        var misilY = misil.offsetTop;
        misil.style.top = (misilY - 35 ) + 'px';
        
        // Elimina los misiles que salen de la pantalla (cuando su posición top es menor 1 cero)
        if ( misilY < 0 ){
            mundo.removeChild(misil);
        }
        // Guarda las coordenadas de colisión con los invasores
        else if (misilY > 0 && invasores[Math.floor(misilY/35)][Math.floor(disparo[disparo.length-1].x)] == '1'){
            colision.push({
                x: Math.floor(misilX),
                y: Math.floor(misilY/35)
            });
            detectarColision(misil,misilY);
            colision.pop();
        };
        }, 10);
        disparar();
}
// Detecta la colisión del misil con los invasores
function detectarColision(misil,misilY){
    var misiles = document.getElementById('misiles');
    var misil = document.getElementsByClassName('misil')[0];
    if(misilY/35 < 0 ){
        return;
    } 
    // Elimina los invasores reemplazándolos por bloques vacíos
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
// Mueve el background
var posx = '0px';
var posy = null;
function moverFondo(){
    posy++;
    document.getElementsByTagName('body')[0].style.backgroundPosition = posx+' '+posy+'px';
}
window.setInterval(moverFondo, 100);

window.addEventListener("keydown",onKeyDown);
window.addEventListener("keyup",onKeyUp);
window.requestAnimationFrame(update);