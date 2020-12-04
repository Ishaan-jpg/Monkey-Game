
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage,bananaGroup
var ground
var FoodGroup, obstacleGroup
var score
var survivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground= createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x = ground.width /2; 
  console.log(ground.x)

  bananaGroup = createGroup();
}


function draw() {
background("white");
 // console.log(frameCount)
   
  if (keyDown("space")&&monkey.y>=100){
    
    monkey.velocityY= -12;
    
         }
monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
   ground.x = ground.width /2;
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival time: "+survivalTime,100,50);
  obstacles();
  spawnBanana();
  drawSprites();
}
function spawnBanana(){
  if(frameCount%80 === 0){
   
    banana=createSprite(200,200,10,10);
    banana.addImage("food",bananaImage);
    banana.scale=0.1;
    banana.velocityX=-4;
    banana.lifetime=150;
    var rand=Math.round(random(120,200))
    banana.y=rand;
    bananaGroup.add(banana);
  }
}
function obstacles(){
  if(frameCount%300 === 0){
    obstacle=createSprite(80,320,10,10);
    obstacle.addImage("ob",obstaceImage);
    obstacle.scale=0.1;
    obstacle.velocityX=-4;
    obstacle.lifetime=300;
}
}




