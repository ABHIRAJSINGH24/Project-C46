var background1_img, background2_img;

var spacehip, spaceship_img;

var gameState = 0;

var play;

function preload(){  
    background1_img = loadImage("Images/Space1.jpg");
    background2_img = loadImage("Images/Space2.png"); 
}

function setup(){
    createCanvas(displayWidth,displayHeight);

    spaceship = new Spaceship(displayWidth/2,displayHeight-200);

    play = createButton("Play");
    play.position(displayWidth/2,displayHeight-200);
    //play.mousePressed(updateState(1))
}

function draw(){
    if(gameState == 0){
        background(background1_img);
    }

    if(gameState !== 0){
        background(background2_img);
    }

    if(gameState !== 0){
        spaceship.display();
        moveLeft(spaceship);
        moveRight(spaceship);
}
}

function moveLeft(body){
    if(keyDown(LEFT_ARROW)){
        body.x = body.x - 7
    }
}

function moveRight(body){
    if(keyDown(RIGHT_ARROW)){
        body.x = body.x + 7
    }
}

function updateState(state){
    gameState = state
}