// 定义弹球计数变量

const para = document.querySelector('p');
let count = 0;

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

// 定义 Shape 构造器
function Shape(x, y, velX, velY, exists = true) {
  this.x = x
  this.y = y
  this.velX = velX
  this.velY = velY
  this.exists = exists
}

// 定义 Ball构造器，继承自 Shape
function Ball(x, y, velX, velY, exists, color, size) {
  Shape.call(this, x, y, velX, velY, exists)

  this.color = color
  this.size = size
}

Ball.prototype = Object.create(Shape.prototype)
Ball.prototype.constructor = Ball

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

// 定义 EvilCircle
function EvilCircle(x, y, velX=20, velY=20, exists, color='white', size=10) {
  Shape.call(this, x, y, velX, velY, exists)

  this.color = color
  this.size = size
}

EvilCircle.prototype = Object.create(Shape.prototype)
EvilCircle.prototype.constructor = EvilCircle

EvilCircle.prototype.draw = function () {
  ctx.beginPath()
  ctx.strokeStyle = this.color
  ctx.lineWidth = 3
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
  ctx.stroke()
}

EvilCircle.prototype.checkBounds = function () {
  if (this.x + this.size >= width) {
    this.x -= this.size
  }

  if (this.x - this.size <= 0) {
    this.x = -this.size
  }

  if (this.y + this.size >= height) {
    this.y -= this.size
  }

  if (this.y - this.size <= 0) {
    this.y += this.size
  }
}

EvilCircle.prototype.setControls = function () {
  window.onkeydown = (e) => {
    switch (e.key) {
      case "a":
        this.x -= this.velX;
        break;
      case "d":
        this.x += this.velX;
        break;
      case "w":
        this.y -= this.velY;
        break;
      case "s":
        this.y += this.velY;
        break;
    }
  }
}

EvilCircle.prototype.collisionDetect = function () {
  for (let j = 0; j < balls.length; ++j) {
    if (balls[j].exists) {
      const dx = this.x - balls[j].x
      const dy = this.y - balls[j].y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < this.size + balls[j].size) {
        balls[j].exists = false
        count--;
        para.textContent = "剩余彩球数： " + count;
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
    true,
    randomColor(),
    size,
  )
  balls.push(ball)
  count++;
  para.textContent = "剩余彩球数： " + count
}

let evil = new EvilCircle(random(0, width), random(0, height), 20, 20, true, "white", 10)
evil.setControls()

// 几乎所有的动画效果都会用到一个运动循环，也就是每一帧都自动更新视图。这是大多数游戏或者其他类似项目的基础。
function loop() {
  ctx.fillStyle = "rgb(0, 0, 0, 0.25)"
  ctx.fillRect(0, 0, width, height)

  for (let i = 0; i < balls.length; ++i) {
    if (balls[i].exists) {
      balls[i].draw()
      balls[i].update()
      balls[i].collisionDetect()
    }
  }

  evil.draw()
  evil.checkBounds()
  evil.collisionDetect()

  // 使用 requestAnimationFrame() 方法再运行一次函数
  requestAnimationFrame(loop)
}

loop()