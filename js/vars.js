/**********************************************************************
*********************************VARS**********************************
**********************************************************************/

//basic vars

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

var mousePosY, mousePosX;
var playerPosX, playerPosY;
var movementSpeed;
var distanceX, distanceY;

//vars modified by game
var speedRatio = 1;

/**********************************************************************
*******************************FUNCTIONS*******************************
**********************************************************************/

function getPlayerSize(){
    let height = document.querySelector(".player").offsetHeight;
    let width = document.querySelector(".player").offsetWidth;

    let playerSize = [width, height];

    return playerSize;
}

function setPlayerPos(){
    let player = document.querySelector(".player");

    player.style.left = (screenWidth/2)-25+"px";
    player.style.top = (screenHeight/2)-25+"px";
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getPlayerPos(){
    let offsets = $(".player").offset();

    let top = offsets.top;
    let left = offsets.left;

    playerPosY = top+25;
    playerPosX = left+25;
}

function getMousePos(e){
    mousePosY = e.pageY;
    mousePosX = e.pageX;
}

function setMovementSpeed(){
    distanceX = playerPosX - mousePosX;
    distanceY = playerPosY - mousePosY;

    let distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));

    movementSpeed = distance * 1.5 * speedRatio;
}

/**********************************************************************
********************************PROGRAM********************************
**********************************************************************/

$(document).ready(function(){
    setPlayerPos();
});