var bullet, speed, weight, thickness, wall, damage;

function setup(){
  createCanvas(1600, 400);
  bullet = createSprite(150, 200, 50, 10);
  bullet.shapeColor = color("white");
  bullet.velocityX = 20;

  wall = createSprite(1150, 200, thickness, height/2);




  wall.height = 200;
}

function draw(){
  background("purple");
  speed = 223;
  weight = 32;
  thickness =  83;

  damage = 0.5*weight*speed*speed/thickness*thickness*thickness

  if(bullet.isTouching(wall) && damage > 10){
    bullet.collide(wall);
    wall.shapeColor = color("red")
  } 
  if(bullet.isTouching(wall) && damage < 10){
    bullet.collide(wall);
    wall.shapeColor = color("green");
  }
  console.log(bullet.y);
  console.log(bullet.x);
  drawSprites();
}