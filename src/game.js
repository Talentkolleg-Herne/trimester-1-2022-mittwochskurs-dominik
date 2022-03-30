var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

var WINDOWS_WIDTH = canvas.width;
var WIDOWS_HEIGHT = canvas.height;
var PLAYER_VELOCITY_X = 1;
var playerX = 50;
var playerY = 10;
var playerW = 10;
var playerH = 10;
var playerColor = '#FFFFFF';

var blockX = 50;
var blockY = 100;
var blockW = 200;
var blockH = 10;

var gravity_x = 0
var gravity_y = 1



function drawEnv(x, y, w, h, color) {
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function draw() {
  clear()
  drawEnv(playerX, playerY, playerW, playerH, playerColor);
  drawEnv(blockX, blockY, blockW, blockH, playerColor);

  // playerX = playerX + gravity.x;
  // playerY = playerY + gravity_y;
}


window.addEventListener('keydown', function (event) {
  console.log("Key pressed");
  console.log(event.key);
})



setInterval(draw, 10);


