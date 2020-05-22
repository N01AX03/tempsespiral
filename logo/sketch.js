var anotherAnimatedSprite;

function setup() {
  createCanvas(windowWidth, windowHeight);

  anotherAnimatedSprite = createSprite(
    windowWidth,
    windowHeight,
    windowWidth / 2,
    windowHeight / 2
  );
  anotherAnimatedSprite.addAnimation(
    "breathing",
    "assets/ezgif-frame-001.png",
    "assets/ezgif-frame-072.png"
  );
}

function draw() {
  background(255, 255, 255);

  //change the frame in relation to the mouse x position
  var frame = round(
    map(mouseX, 0, width, 0, anotherAnimatedSprite.animation.getLastFrame())
  );
  //note: frames must be integer numbers so I have to round the result of map

  anotherAnimatedSprite.animation.changeFrame(frame);

  //draw all the sprites
  drawSprites();
}
