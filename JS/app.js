//Aqui van las clases

class Background{
    constructor(w,h){
        this.x = 0;
        this.y = 0;
        this.width = w;
        this.height = h;
        this.image = new Image();
        this.image.src = "../Images/animal-crossing-new-horizons-halloween-update-details-releas_1f8x.png"
        this.imgGameOver = new Image();
        this.imgGameOver.src = "../Images/145-1457399_pink-cute-cutepink-game-over-gameover-games-pink.jpg"
    }

    draw(){
        //metodo//para hacer que el background se mueva
        if(this.x < -canvas.width){
            this.x = 0
        }
        this.x--;

        //dibujar la imagen
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
        ctx.drawImage(
            this.image,
            this.x + this.width,
            this.y,
            this.width,
            this.height
        )
    }

    gameOver(){
        ctx.drawImage(this.imgGameOver,300,140,400,400)
    }
}

class Player{
    constructor(x,w,y,h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.image = new Image();
        this.image.src = "../Images/5f02e86a9fb43a0004cf0244.png"
        this.score = this.score;
        this.life = this.life;
        this.dead = false;
    }

    draw(){
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
    }

    collision(item){
        return(
            this.x < item.x + item.width &&
            this.x + this.width > item.x &&
            this.y < item.y + item.height &&
            this.y + this.height > item.y
        )
        //console.log ("life??", playerLife)
    }

    
    killPlayer(){

        Player.collision = new Player(this.life -1, this.score)

        if(this.life > 0){
            this.dead = true;
           

        }else{
            saveFinalScore();
            gameOver = true;
        }
    }



}

class Kids{
    constructor(x,w,y,h){
        this.x = this.getRandomX()
        this.y = this.getRandomY();
        this.width = 250;
        this.height = 170;
        //this.velX = velX; //velocidad horizontal
        //this.velY = velY; //vel vertical
        //this.size = size;
        this.image = new Image();
        this.image.src = "../Images/203-2033069_link-legend-of-zelda-pixel-art-hd-png.png"
    }

    draw(){
        if(frames % 2 === 0 ) this.x -= 5;
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
    }

    getRandomX() {
        return Math.random() * (1900 - 200)+ 400;
    }

    getRandomY() {
        return Math.random() * (950 - 100) + 100;
    }

    //moveRandom(){ } con movimiento o gif?
}


class Monsters{
    constructor(x,w,y,h){
        this.x = this.getRandomX();
        this.y = this.getRandomY();
        this.width = 250;
        this.height = 170;
        //this.velX = velX; //velocidad horizontal
        //this.velY = velY; //vel vertical
       // this.size = size;
        this.image = new Image();
        this.image.src = "../Images/d8zvq7c-219536d0-0b22-4e32-a8ae-bff5d2c71b8e.gif"
    }

    draw(){
        if(frames % 2 === 0 ) this.x -= 5;
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
    }

    getRandomX() {
        return Math.random() * (1900 - 200)+ 300;
    }

    getRandomY() {
        return Math.random() * (950 - 100) + 60;
    }

}

class Candy{
    constructor(x,w,y,h){
        this.x = canvas.width;
        this.y = this.getRandomY();
        this.width = 100;
        this.height = 70;
        this.image = new Image();
        this.image.src = "../Images/corncandy.png"
    }

    draw(){
        if(frames % 2 === 0 ) this.x -= 4;
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
    }

    getRandomY() {
        return Math.random() * (920 - 100) + 20;
    }

}