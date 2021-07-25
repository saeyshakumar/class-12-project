var garden,rabbit,leaf,apple;
var gardenImg,rabbitImg,appleImg,leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg= loadImage("apple.png")
  leafImg= loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  var select_sprites=Math.round(random(1.2));
  if(frameCount % 80 == 0){
    if (select_sprites == 1){
    createApples();
    }
    else
    createleaves();
  }
  edges= createEdgeSprites();
  rabbit.collide(edges);
  if(keyDown("RIGHT")){
    rabbit.x=rabbit.x+3
    }
  if(keyDown("LEFT")){
    rabbit.x=rabbit.x-3
  }
  drawSprites();
}

function createApples(){
  apple=createSprite(random(50,350),40,10,10)
  apple.addImage("a",appleImg)
  apple.scale=0.08
  apple.velocityY=4
  apple.lifetime=100
}

function createleaves(){
  leaf=createSprite(random(50,350),40,10,10)
  leaf.addImage("l",leafImg)
  leaf.scale=0.1
  leaf.velocityY=4
  leaf.lifetime=100
}