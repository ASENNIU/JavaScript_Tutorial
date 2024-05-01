// 设置画布

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

const ball_num = 100

// 生成随机数的函数

function random(min,max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

// 生成随机的颜色

function randomColor() {
  return "rgb(" + 
    random(0, 255) + 
    "," + 
    random(0, 255) + 
    "," + 
    random(0, 255) + 
    ")"
}


// 小球构造器
function Ball(x, y, velX, velY, color, size) {
  this.x = x
  this.y = y
  this.velX = velX
  this.velY = velY
  this.color = color
  this.size = size

  
}

// 画出小球
Ball.prototype.draw = function () {
  ctx.beginPath()
  ctx.fillStyle = this.color
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
  ctx.fill()
}

// 让小球动起来
Ball.prototype.update = function () {
  if (this.x + this.size >= width) {
    this.velX = -this.velX
  }

  if (this.x - this.size <= 0) {
    this.velX = -this.velX
  }

  if (this.y + this.size >= height) {
    this.velY = -this.velY
  }

  if (this.y - this.size <= 0) {
    this.velY = -this.velY
  }

  this.x += this.velX
  this.y += this.velY
}


Ball.prototype.collisionDetect = function () {
  for (let j = 0; j < balls.length; ++j) {
    if (this !== balls[j]) {
      const dx = this.x - balls[j].x
      const dy = this.y - balls[j].y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < this.size + balls[j].size) {
        balls[j].color = this.color = randomColor()
      }
    }
  }
}

let balls = []

// 创建小球
while (balls.length < ball_num) {
  let size = random(10, 20)
  let ball = new Ball(
    // 为了避免绘制错误，小球至少离画布边缘本身一倍宽的距离
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomColor(),
    size,
  )
  balls.push(ball)
}


// 几乎所有的动画效果都会用到一个运动循环，也就是每一帧都自动更新视图。这是大多数游戏或者其他类似项目的基础。
function loop() {
  ctx.fillStyle = "rgb(0, 0, 0, 0.25)"
  ctx.fillRect(0, 0, width, height)

  for (let i = 0; i < balls.length; ++i) {
    balls[i].draw()
    balls[i].update()
    balls[i].collisionDetect()
  }

  // 使用 requestAnimationFrame() 方法再运行一次函数
  requestAnimationFrame(loop)
}

loop()