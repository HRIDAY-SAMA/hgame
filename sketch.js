
function preload(){
    rocketImg=loadImage("rocketyay.png")
    royImg=loadImage("finally.PNG")
    wasdImg=loadImage("wasd.PNG")
    spaceImg=loadImage("ss.jpg")
    ast1Img=loadImage("ast 1.PNG")
    ast2Img=loadImage("ast 2.PNG")
}
function setup(){
    createCanvas(1550,700);
    
rocket=createSprite(800,500,80,80)
rocket.addImage(rocketImg)
rocket.scale=1.5
roy=createSprite(200,609,80,80)
roy.addImage(royImg)
roy.scale=0.5
roy.velocityX=2
roy.debug=true
roy.setCollider("circle",0,0,40)
rocket.debug=true
rocket.setCollider("circle",0,0,100)
}

function draw(){
    background("#1A1E2A");
 image (wasdImg,1200,400,300,300)  
  textSize(20)
  fill(255)
text("PRESS SPACE TO START",670,100)
if(roy.isTouching(rocket)){
    roy.destroy()
}
if(keyDown('space')){
rocket.velocityY=-5.5
}
spawnast()
drawSprites()

   
}

function spawnast(){
    if(frameCount%60===0){
        ast=createSprite(100,100,10,10)
        ast.velocityY=4
        ast.x=Math.round(random(100,1200))
        rand=Math.round(random(1,2))
        switch(rand){
            case 1:ast.addImage(ast1Img)
            break;
            case 2:ast.addImage(ast2Img)
            break;
            default:break
        }
    }
}