// テキスト「アニメーションの基本」
let x, y, vx, vy;
const g = 1; // 重力加速度
const vyMax = 20;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height;
  vx = 10;
  vy = 10;
}

function draw(){
  background(160, 192, 255);
  ellipse(x, y, 20, 20);
  //x += vx;

  if(keyIsDown(LEFT_ARROW)){ x -= 5; }
  if(keyIsDown(RIGHT_ARROW)){ x += 5; }
  if(keyIsDown(" ".charCodeAt(0))){ vy-=10; }
y += vy;



  // 重力（コメント機能でオンオフ切り替えて実行してみましょう）
vy = constrain(vy + g, -vyMax, vyMax);

  // 端の処理パターン (1) 反対側から出てくる
   //if(x > width){ x = 0; }
   //else if(x < 0){ x = width; }
  //if(y > height){ y = 0; }
  //if(y < 0){ y = height; }

　// 端の処理パターン (2) 跳ね返る
  if(x < 0 || x > width){ vx = -1 * vx; }
  if(y > height-10){ vy = 0; }
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
