var world =[
    ['X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X'],
    ['X','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','X'],
    ['X','0','0','0','0','0','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','0','0','0','0','0','X'],
    ['X','0','0','0','0','0','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','0','0','0','0','0','X'],
    ['X','0','0','0','0','0','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','0','0','0','0','0','X'],
    ['X','0','0','0','0','0','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','0','0','0','0','0','X'],
    ['X','0','0','0','0','0','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','0','0','0','0','0','X'],
    ['X','0','0','0','0','0','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','0','0','0','0','0','X'],
    ['X','0','0','0','0','0','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','0','0','0','0','0','X'],
    ['X','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','X'],
    ['X','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','X'],
    ['X','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','X'],
    ['X','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','X'],
    ['X','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','X'],
    ['X','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','X'],
    ['X','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','X'],
    ['X','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','X'],
    ['X','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','X'],
    ['X','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','X'],
    ['X','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','X'],
    ['X','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','X'],
    ['X','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','X'],
    ['X','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','X'],
    ['X','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','X'],
    ['X','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','X'],
    ['X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X','X'],
    ];
var score = 0;
var nave = {
    x:18,
    y:23
}
const key = {
    right : false,
    left : false,
    space : false
}
var disparo = [];
var colision = [];

function displayWorld(){
    var output = '';
    for (var i=0; i<world.length; i++){
        output += "\n<div class='row'>"
        for (var j=0; j<world[i].length; j++){
            if(world[i][j] == 'X'){
                output += "\n\t<div class='brick'></div>";
            }
            if(world[i][j] == '0'){
                output += "\n\t<div class='empty'></div>";
            }
            if(world[i][j] == '1'){
                output += "\n\t<div class='invader'></div>";
            }
            // if(world[i][j] == 'o'){
            //     output += "\n\t<div class='misil'></div>";
            // }
        }
            output += "\n</div>";
    }
    // console.log(output);
    document.getElementById('world').innerHTML = output;
}
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
    document.getElementById('nave').style.top = nave.y*20+"px"
    document.getElementById('nave').style.left = nave.x*20+"px"
}
function displayScore(){
    document.getElementById('score').innerHTML = score;
}

displayWorld();
displayNave();
displayScore();

var cooldown = false;
function updatePlayer(){
    if (key.left && world[nave.y][nave.x-1] != 'X'){
       nave.x -= 1;
    }
    else if (key.right  && world[nave.y][nave.x+1] != 'X'){
       nave.x += 1;
    }
    else if (cooldown == false && key.space){
        crearDisparo();
        cooldown = true;
        setTimeout(() => cooldown = false, 400);
    }
   
    displayNave();
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

function crearDisparo(){
    disparo.push({
        x: nave.x,
    });
    
    var mundo = document.getElementById('misiles');
    var misil = document.createElement("div");
    misil.className = "misil";
    mundo.appendChild(misil);
    
    //Posiciona al misil sobre la nave (su misma posición x al momento de disparar)
    
    //Mueve los misiles hacia arriba
    var misilX = (disparo[disparo.length-1].x);
    misil.style.transform = `translate(${misilX*20}px)`;
    
    setInterval(function(){
        
        var misilY = misil.offsetTop;
        misil.style.top = (misilY - 20 ) + 'px';
       
            
    //Elimina los misiles que salen de la pantalla (cuando su posición top es menor a cero)
    
        if ( misilY < 0 ){
            mundo.removeChild(misil);
            }
        else if (misilY > 0 && world[Math.floor(misilY/20)][disparo[disparo.length-1].x] == '1'){
                colision.push({
                    x: misilX,
                    y: misilY/20
                });
                console.log(colision);
                detectarColision(misil,misilY,misilX);
                
            };
            
        }, 10);
        disparar();
}
function detectarColision(misil,misilY,misilX){
    var mundo = document.getElementById('misiles');
    if(misilY/20 < 0 ){
        return;
    } 
    for (var i = 0; i < colision.length; i++){
        if (world[colision[i].y][colision[i].x] == '1'){
            world[colision[i].y][colision[i].x] = '0';
            explosion();
            score = score + 10;
            displayWorld();
            displayScore();
            mundo.removeChild(mundo.lastChild)
        }
    }
     
}
window.addEventListener("keydown",onKeyDown);
window.addEventListener("keyup",onKeyUp);
window.requestAnimationFrame(update);
        
           
