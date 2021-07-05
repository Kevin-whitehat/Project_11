var path;
var runner;
var invisWallLeft;
var invisWallRight;
function preload() {
  //pre-load images
  trackImage = loadImage("path.png")
  runnerAnimation = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup() {
  createCanvas(400, 400);
  //create sprites here
  path = createSprite(200, 200)
  path.addImage("path", trackImage)
  path.velocityY = 4
  runner = createSprite(200, 200)
  runner.addAnimation("running", runnerAnimation)
  runner.scale = 0.05
  invisWallLeft = createSprite(60, 200, 3, 400)
  invisWallRight = createSprite(340, 200, 3, 400)
  invisWallLeft.visible = false
  invisWallRight.visible = false

}

function draw() {
  if (keyIsDown(LEFT_ARROW)) {
    runner.velocityX = -5
  }
  if (keyIsDown(RIGHT_ARROW)) {
    runner.velocityX = 5
  }
  runner.bounceOff(invisWallLeft);
  runner.bounceOff(invisWallRight);

  if (path.y > 400) {
    path.y = path.width / 2
  }
  background(0);
  drawSprites();

}
