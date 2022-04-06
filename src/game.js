var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth
canvas.height = window.innerHeight

var WINDOWS_WIDTH = canvas.width;
var WIDOWS_HEIGHT = canvas.height;
var PLAYER_VELOCITY_X = 2.5;
var PLAYER_VELOCITY_Y = 10;
var playerX = 41;
var playerY = 0;
var playerW = 10;
var playerH = 10;
var playerColor = '#FFFFFF';

var blockX = 50;
var blockY = 300;
var blockW = 200;
var blockH = 10;

var gravity_x = 0
var gravity_y = 1

let keys = {
  a: {
    pressed: false
  },
  d: {
    pressed: false
  },
  space: {
    pressed: false
  }
}

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


window.addEventListener('keydown', function (event) {
  if (event.key === 'a') {
    keys.a.pressed = true;
  }
  if (event.key === 'd') {
    keys.d.pressed = true;
  }
  if (event.code === 'Space') {
    keys.space.pressed = true;
  }
})

window.addEventListener('keyup', function (event) {
  if (event.key === 'a') {
    keys.a.pressed = false;
  }
  if (event.key === 'd') {
    keys.d.pressed = false;
  }
  if (event.code === 'Space') {
    keys.space.pressed = false;
  }
})

function collide() {
  if (
    playerX < blockX + blockW &&
    playerX + playerW > blockX &&
    playerY < blockY + blockH &&
    playerY + playerH > blockY
  ) {
    return true;
  }
  return false;
}


function animate() {
  requestAnimationFrame(animate);
  clear()
  drawEnv(playerX, playerY, playerW, playerH, playerColor);
  drawEnv(blockX, blockY, blockW, blockH, playerColor);

  if (!collide()) {
    playerY = playerY + gravity_y;
  }

  if (keys.a.pressed) {
    playerX = playerX - PLAYER_VELOCITY_X;
  } else if (keys.d.pressed) {
    playerX = playerX + PLAYER_VELOCITY_X;
  }
  if (keys.space.pressed) {
    playerY = playerY - PLAYER_VELOCITY_Y;
  }
}

animate();


