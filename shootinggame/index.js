let canvas;
let ctx;

canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 700;

document.body.appendChild(canvas);

//변수 선언 이미지
let backgroundImage, bulletImage, gameOverImage, spaceshipImage, enemyImage;

//게임오버 변수
let gameOver = false; //true이면 게임이 끝남, false는 게임 진행 

//점수 변수
let score=0;

//우주선 좌표
let spaceshipX = canvas.width / 2 - 32;
let spaceshipY = canvas.height - 64;

//총알 
let bulletList = []; //총알들을 저장하는 배열 
function Bullet() {
  this.x = 0;
  this.y = 0;
  this.init = function () {
    this.x = spaceshipX + 20;
    this.y = spaceshipY;
    this.alive=true; //true이면 살아있는 총알 false이면 죽은 총알

    bulletList.push(this);
  };
  this.update = function () {
    this.y -= 7;
  };
  
  this.checkHit=function(){
    for(let i=0; i<enemyList.length; i++){
      if(this.y <= enemyList[i].y && this.x >= enemyList[i].x && this.x <= enemyList[i].x + 48){
        //적군이 죽게되면 적군의 우주선이 없어짐, 점수 획득
        score++;
        this.alive=false; //죽은 총알
        enemyList.splice(i,1);
      }
    }
  };
}


//적군
function generateRandom(min, max) {
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum;
}

let enemyList = [];
function Enemy() {
  this.x = 0;
  this.y = 0;
  this.init = function () {
    this.y = 0;
    this.x = generateRandom(0, canvas.width - 48);
    enemyList.push(this);
  };
  this.update = function () {
    this.y += 2; //적군의 속도

    if (this.y >= canvas.height - 48) {
      gameOver = true;
      console.log("gameover!");
    }
  }
}

function loadImage() {
  backgroundImage = new Image();
  backgroundImage.src = "/shootinggame/images/background.gif";

  bulletImage = new Image();
  bulletImage.src = "/shootinggame/images/bullet.png";

  gameOverImage = new Image();
  gameOverImage.src = "/shootinggame/images/gameover.png";

  spaceshipImage = new Image();
  spaceshipImage.src = "/shootinggame/images/spaceship.png";

  enemyImage = new Image();
  enemyImage.src = "/shootinggame/images/enemy.png";
}

let keyDown = {};

function setupKeyboardListener() {
  document.addEventListener("keydown", function (event) {
    keyDown[event.keyCode] = true;
  })
  document.addEventListener("keyup", function (event) {
    delete keyDown[event.keyCode];

    if (event.keyCode == 32) {
      createBullet(); //총알 만들기 
    }
  })
}

function createBullet() {
  console.log("총알 생성");
  let b = new Bullet(); //총알이 하나 생성됨 
  b.init();
  console.log("새로운 총알 리스트!!", bulletList);
}

//적군 찍기
function createEnemy() {
  const interval = setInterval(function () {
    let e = new Enemy();
    e.init();
  }, 1000)
}

function update() {
  //방향키 end right
  if (39 in keyDown) {
    spaceshipX += 5;
  }
  //방향키 home left
  if (37 in keyDown) {
    spaceshipX -= 5;
  }

  //우주선이 경기장 밖을 나가지 않게 x,y좌표 설정
  if (spaceshipX <= 0) {
    spaceshipX = 0;
  }
  if (spaceshipX >= canvas.width - 64) { //우주선 크기를 뺀 y값에서만 움직이도록 
    spaceshipX = canvas.width - 64;
  }

  //총알 y좌표 업데이트 하는 함수 호출 
  for (let i = 0; i < bulletList.length; i++) {
    if(bulletList[i].alive){
      bulletList[i].update();
      bulletList[i].checkHit();
    }
  }

  //적군 y좌표 업데이트 하는 함수 호출
  for (let i = 0; i < enemyList.length; i++) {
    enemyList[i].update();
  }
}

function render() {
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height); //x좌표가 왼쪽 위 0,0부터 시작
  ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY);
  ctx.fillText(`Score:${score}`,20,20);
  ctx.fillStyle="white";
  ctx.font="30px Arial";

  for (let i = 0; i < bulletList.length; i++) {
    if(bulletList[i].alive){
      ctx.drawImage(bulletImage, bulletList[i].x, bulletList[i].y);
    } 
  }
  for (let i = 0; i < enemyList.length; i++) {
    ctx.drawImage(enemyImage, enemyList[i].x, enemyList[i].y);
  }
}

function main() {
  if (!gameOver) {
    update(); //좌표값 업데이트하고 
    render(); //그리기
    requestAnimationFrame(main);
  } else {
    ctx.drawImage(gameOverImage, 10, 100, 380, 380);
  }
}

loadImage();
setupKeyboardListener();
createEnemy();
main();

//방향키를 누르면
//x,y좌표가 바뀌고
//다시 render 해준다

//총알만들기
//1. 스페이스바를 누르면 총알 발사
//2, 총일이 발사 = 총알의 y값이 -- , x값은 스페이스를 누른 순간의 우주선 x 좌표
//3. 발사된 총알을 저장할 배열 만들기
//4. 모든 총알들은 x,y 좌표가 있어야 한다
//5. 총알 배열로 render를 해준다

//적군만들기
//귀엽다..,x,y,init,update
//적군은 위치가 랜덤하다
//적군은 밑으로 내려온다 = y좌표 증가
//1초마다 하나씩 적군이 나온다
//적군의 우주선이 바닥에 닿으면 게임 오버
//적군돠 총알이 만나면 우주선이 사라진다 점수 1점 획득

//적군이 죽는다
// 총알.y <= 적군.y
//총알.x >= 적군.x && 총알.x <= 적군.x + 적군의 넗이
