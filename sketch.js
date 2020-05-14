var thief;
var gamestate = 1;
var box_img;
var score = 0;
var time = 3000;
var light1,light2,light3,light4,light5,light6;
var beep,beep2;

function preload(){
    box_img = loadImage("treasure.jpg");
    beep = loadSound("Caught.mp3");
    beep2 = loadSound("Loot.mp3");
    beep3 = loadSound("Movement.mp3");
    beep4 = loadSound("Win/WIN.mp3");
}

function setup(){
    createCanvas(500,600);

    

    //Upper border.
    border1 = createSprite(250,5,500,10);
    //Lower border
    border2 = createSprite(250,595,500,10);
    //right border
    border3 = createSprite(0,300,10,600);
    //left border
    border4 = createSprite(500,275,10,550);
    //border for light.
    border5 = createSprite(500,570,2,50);

    //Created from left of the canvas.
    //First vertical line.
    wall1 = createSprite(100,25,10,50);
    //Second vertical line.
    wall2 = createSprite(100,120,10,50);
    //Third vertical line.
    wall6 = createSprite(100,205,10,40);
    //Fourth vertical line.
    wall5 = createSprite(100,250,10,50);
    //Fifth vertical line.
    wall7 = createSprite(100,335,10,50);
    //Sixth vertical line.
    wall9 = createSprite(100,375,10,50);
    //Seventh vertical line.
    wall10 = createSprite(100,455,10,50);
    //Seventh vertical line.
    wall12 = createSprite(100,500,10,120);

    //First horizontal line.
    wall3 = createSprite(50,100,100,10);
    //Second horizontal line.
    wall4 = createSprite(50,225,100,10);
    //Third horizontal line.
    wall8 = createSprite(50,350,100,10);
    //Fourth horizontal line.
    wall11 = createSprite(50,475,100,10);

    //Right walls

    //First vertical line.
    floor1 = createSprite(350,120,10,225);
    //Second vertical line.
    floor4 = createSprite(350,355,10,150);
    //Third vertical line.
    floor5 = createSprite(350,530,10,125);

    //First horizontal line.
    floor2 = createSprite(400,100,100,10);
    //Second horizontal line.
    floor3 = createSprite(400,285,105,10);
    //Third horizontal line.
    floor6 = createSprite(425,425,150,10);

    block1 = createSprite(200,250,10,200);
    block2 = createSprite(225,425,150,10);
    block3 = createSprite(275,250,10,200);
    block4 = createSprite(237,150,85,10);
    block5 = createSprite(237,350,85,10);
//1,5,2,3,6,4,7.
//1:(25,120,10,10)
//2:(25,325,10,10)
//3:(25,375,10,10)
//4:(25,500,10,10)
//5:(375,25,10,10)
//6:(375,400,10,10)
//7:(375,575,10,10)
    //Treasures from top left corner.
    box1 = createSprite(25,120,10,10);
    box1.addImage("box1",box_img);
    box1.scale = 0.15;

    box2 = createSprite(375,25,10,10);
    box2.addImage("box2",box_img);
    box2.scale = 0.15;

    box3 = createSprite(25,325,10,10);
    box3.addImage("box3",box_img);
    box3.scale = 0.15;

    box4 = createSprite(25,375,10,10);
    box4.addImage("box4",box_img);
    box4.scale = 0.15;

    box5 = createSprite(375,400,10,10);
    box5.addImage("box5",box_img);
    box5.scale = 0.15;

    box6 = createSprite(25,500,10,10);
    box6.addImage("box6",box_img);
    box6.scale = 0.15;

    box7 = createSprite(375,575,10,10);
    box7.addImage("box7",box_img);
    box7.scale = 0.15;

    fill("white");
    light1 = createSprite(150,150,30,30);
    light1.shapeColor = "white";
    light2 = createSprite(300,200,30,30);
    light2.shapeColor = "white";
    light3 = createSprite(150,300,30,30);
    light3.shapeColor = "white";
    light4 = createSprite(300,350,30,30);
    light4.shapeColor = "white";
    light5 = createSprite(150,450,30,30);
    light5.shapeColor = "white";
    light6 = createSprite(300,500,30,30);
    light6.shapeColor = "white";

    thief = createSprite(50,50,20,20);
    thief.shapeColor = "red";
}
function draw(){
    background(0);

    fill("white");
    textSize(20);
    text("score: "+ score,250,50);
    text("time: "+ time,125,50);

    light1.velocityX = random(-5,5);
    light1.velocityY = random(-5,5);

    light2.velocityX = random(-5,5);
    light2.velocityY = random(-5,5);

    light3.velocityX = random(-5,5);
    light3.velocityY = random(-5,5);

    light4.velocityX = random(-5,5);
    light4.velocityY = random(-5,5);

    light5.velocityX = random(-5,5);
    light5.velocityY = random(-5,5);

    light6.velocityX = random(-5,5);
    light6.velocityY = random(-5,5);

    if(gamestate < 9){
        time = time - 1;

        if(keyDown(UP_ARROW)){
            thief.y = thief.y-5;
            beep3.play();
        }
        if(keyDown(DOWN_ARROW)){
            thief.y = thief.y+5;
            beep3.play();
        }
        if(keyDown(RIGHT_ARROW)){
            thief.x = thief.x+5;
            beep3.play();
        }
        if(keyDown(LEFT_ARROW)){
            thief.x = thief.x-5;
            beep3.play();
        }
//1,5,2,3,6,4,7.

        if(gamestate<2){
            text("Dorge the lights and loot the boxes in order",38,70);
        }

        if(gamestate<2){
            text("1",50,120);
        }
        if(gamestate<3){
            text("2",400,25);
        }
        if(gamestate<4){
            text("3",50,325);
        }
        if(gamestate<5){
            text("4",50,375);
        }
        if(gamestate<6){
            text("5",400,400);
        }
        if(gamestate<7){
            text("6",50,500);
        }
        if(gamestate<8){
            text("7",400,575);
        }
    }

    //Makes the ball collide with other objects.
    thief.collide(border1);
    thief.collide(border2);
    thief.collide(border3);
    thief.collide(border4);

    thief.collide(wall1);
    thief.collide(wall2);
    thief.collide(wall3);
    thief.collide(wall4);
    thief.collide(wall5);
    thief.collide(wall6);
    thief.collide(wall7);
    thief.collide(wall8);
    thief.collide(wall9);
    thief.collide(wall10);
    thief.collide(wall11);
    thief.collide(wall12);

    thief.collide(floor1);
    thief.collide(floor2);
    thief.collide(floor3);
    thief.collide(floor4);
    thief.collide(floor5);
    thief.collide(floor6);

    thief.collide(block1);
    thief.collide(block2);
    thief.collide(block3);
    thief.collide(block4);
    thief.collide(block5);

    light1.bounceOff(border1);
    light1.bounceOff(border2);
    light1.bounceOff(border3);
    light1.bounceOff(border4);
    
    light2.bounceOff(border1);
    light2.bounceOff(border2);
    light2.bounceOff(border3);
    light2.bounceOff(border4);

    light3.bounceOff(border1);
    light3.bounceOff(border2);
    light3.bounceOff(border3);
    light3.bounceOff(border4);

    light4.bounceOff(border1);
    light4.bounceOff(border2);
    light4.bounceOff(border3);
    light4.bounceOff(border4);

    light5.bounceOff(border1);
    light5.bounceOff(border2);
    light5.bounceOff(border3);
    light5.bounceOff(border4);

    light6.bounceOff(border1);
    light6.bounceOff(border2);
    light6.bounceOff(border3);
    light6.bounceOff(border4);

    if(thief.isTouching(light1)){
        gamestate = 10;
        light1.x = thief.x;
        light1.y = thief.y;
            beep.play();
        
    }
    if(thief.isTouching(light2)){
        gamestate = 10;
        light2.x = thief.x;
        light2.y = thief.y;
        beep.play();
    }
    if(thief.isTouching(light3)){
        gamestate = 10;
        light3.x = thief.x;
        light3.y = thief.y;
        beep.play();
    }
    if(thief.isTouching(light4)){
        gamestate = 10;
        light4.x = thief.x;
        light4.y = thief.y;
        beep.play();
    }
    if(thief.isTouching(light5)){
        gamestate = 10;
        light5.x = thief.x;
        light5.y = thief.y;
            beep.play();
    }
    if(thief.isTouching(light6)){
        gamestate = 10;
        light6.x = thief.x;
        light6.y = thief.y;
        beep.play();
    }

    if(time<=0){
        gamestate = 10;
    }

    if(gamestate === 1){
        if(thief.isTouching(box1)){
            beep2.play();
            box1.destroy(thief);
            score = 1;
            gamestate = 2;
        }
    }

    if(gamestate === 2){
        if(thief.isTouching(box2)){
            beep2.play();
            box2.destroy(thief);
            score = 2;
            gamestate = 3;
        }
    }

    if(gamestate === 3){
        if(thief.isTouching(box3)){
            beep2.play();
            box3.destroy(thief);
            score = 3;
            gamestate = 4;
        }
    }

    if(gamestate === 4){
        if(thief.isTouching(box4)){
            beep2.play();
            box4.destroy(thief);
            score = 4;
            gamestate = 5;
        }
    }

    if(gamestate === 5){
        if(thief.isTouching(box5)){
            beep2.play();
            box5.destroy(thief);
            score = 5;
            gamestate = 6;
        }
    }

    if(gamestate === 6){
        if(thief.isTouching(box6)){
            beep2.play();
            box6.destroy(thief);
            score = 6;
            gamestate = 7;
        }
    }

    if(gamestate === 7){
        if(thief.isTouching(box7)){
            box7.destroy(thief);
            score = 7;
            gamestate = 8;
        }
    }

    if(gamestate === 8){
        text("exit through the ",110,500);
        text("nearest exit",125,550);

        if(thief.isTouching(border5)){
            gamestate = 9;
        }
    }

    if(gamestate === 9){
        thief.velocityX = 1;
        text("you have robbed the house",100,580);
        beep4.play();
    }    

    if(gamestate === 10){
        text("Too slow, you have been caught.",50,580);
    }

    drawSprites();
}