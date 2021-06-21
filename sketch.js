
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0
var survivalTime=0
var jungle, jungleImg; 
var rand;



function preload()
{
  jungleImg = loadImage("jungle.jpg");
  monkey_still=loadImage("sprite_0.png")
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage =   loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
         
}



function setup() {
  createCanvas(400,400);
  jungle = createSprite(250, 160, 50, 40);
 jungle.addImage(jungleImg);
 jungle.velocityX = -2;
 jungle.scale = 1.2;
  
 
  
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1;
  ground = createSprite(400,350,900,10);
  ground.visible=false;
  ground.x = ground.width /2;
  console.log(ground.x);
  
  FoodGroup =  new Group();
  obstacleGroup=   new Group();

}


function draw() {
background(225);

  
  
   if (jungle.x < 0) {
      jungle.x = jungle.width/2;
}
  
  
  if(keyDown("space") && monkey.y>=159){
    monkey.velocityY=-12
  }
  
      monkey.velocityY=monkey.velocityY+0.8
    
  monkey.collide(ground)

  drawSprites();
 
  stroke=("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("SURVIVAL time:"+survivalTime,100,50);
  
  if(obstacleGroup.isTouching(monkey))
  {
    monkey.destroy();
    monkey.velocityY =0;
    jungle.velocityX = 0;
    obstacleGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    
        
  }
  
  if(FoodGroup.isTouching(monkey))
  {
 monkey.scale = 0.15
    FoodGroup.destroyEach();
  }
 switch(rand) {
      case 10 : monkey.scale = 0.12;
      break;
      
      case 20 : monkey.scale = 0.14;
      break;
      
      case 30 : monkey.scale = 0.16
      break;
      case 40 : monkey.scale = 0.18
      break;
      
      case 50 : monkey.scale = 0.12;
      break;
      
      case 60 : monkey.scale = 0.12;
      break;
      
      default: break;
    } 
  
  
  
  
   monkey.collide(ground);
  bananas();
  spawnObstacles()
  
  
}
function bananas (){
  if (frameCount % 80=== 0) {
  var banana = createSprite(600,120,20,20)
   banana.velocityX=-6
    FoodGroup.add(banana);
    banana.scale = 0.1   ;
    banana.lifetime = -200;
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.depth = monkey.depth;
    banana.depth = monkey.depth + 1;
    

    FoodGroup.add(banana)
    
  }  
  
  }
function spawnObstacles() {
  
  if (frameCount%200 === 0){
    
    obstacle = createSprite(620,320,50,50);
    obstacle.addAnimation("obstacle", obstacleImage);
    obstacle.scale = 0.13 ;
    obstacle.lifetime = 330;
    obstacleGroup.add(obstacle);
    obstacle.velocityX=-3
  } 
  
                        
}

                

   




