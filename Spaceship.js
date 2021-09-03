class Spaceship{
    constructor(x,y){
        this.x = x;
        this.y = y;
        
        this.image = loadImage("Images/Spaceship.png");

        this.body = createSprite(this.x,this.y,100,100);
    }

    display(){
        imageMode(CENTER);
        image(this.image,this.x,this.y,100,100);
    }
}