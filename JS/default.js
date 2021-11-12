const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let frames = 0;
let requestId;
let kids = [];
let kids2 = [];
let monsters = [];
let monsters2 = [];
let candies = [];
let lollies = [];
let wonkas = [];
let bonusx = [];
//let noMonsters = [];
let scoreText; 
let score = 0;
let playerLife = 3;
const numberOfKids = 25;
const characterActions = ['up', 'top right', 'right', 'down right', 'down'];

//Animación de personajes
//const characterFrames = 8;

class Sprite {
    constructor(options) {
        this.context = options.context;
        this.image = new Image(); // Path to image sprite sheet
        this.image.src = options.image;
        this.x = options.x; // Coordinates on canvas
        this.y = options.y;
        this.width = options.width; // Size of sprite frame
        this.height = options.height;
        this.frames = options.frames; // Number of frames in a row
        this.frameIndex = options.frameIndex; // Current frame
        this.row = options.row; // Row of sprites
        this.ticksPerFrame = options.ticksPerFrame; // Speed of animation
        this.tickCount = options.tickCount; // How much time has passed
        this.dx = this.x + this.width / 2
        this.dy = this.y + this.height / 2
    }

    update() {
        this.tickCount += 1;
        if (this.tickCount > this.ticksPerFrame) {
            this.tickCount = 0;
            if (this.frameIndex < this.frames - 1) {
                this.frameIndex += 1;
            } else {
                this.frameIndex = 0;
            }
        }
    }

    render() {
        this.context.drawImage(
            this.image,
            this.frameIndex * this.width, // The x-axis coordinate of the top left corner
            this.row * this.height, // The y-axis coordinate of the top left corner
            this.width, // The width of the sub-rectangle
            this.height, // The height of the sub-rectangle
            this.x, // The x coordinate posicion del personaje
            this.y,// The y coordinate pos persoaje
            this.width, // The width to draw the image
            this.height // The width to draw the image
        );
        
    }
}


class Player extends Sprite {

    constructor(x, y, context, image) {
        super({
            context: context,
            image: image,
            x: x,
            y: y,
            width: 117,
            height: 124,
            frameIndex: 0,
            row: 3,
            tickCount: 0,
            ticksPerFrame: 3, //tiempo
            frames: 4,
            
        });
        this.life = playerLife
        this.status = false
    }



    right() {
        //this.frames = 8;
        this.frameIndex = 0;
        this.row = 1; //filas
        //this.ticksPerFrame =4;
    }

    up() {
        //this.frames = 4;
        this.frameIndex = 0;
        this.row = 0;
        //this.ticksPerFrame = 2;
    }

    down() {
        //this.frames = 4;
        this.frameIndex = 0;
        this.row = 3;
        //this.ticksPerFrame = 2;
    }

    stand() {
        //this.frames = 9;
        this.frameIndex = 0;
        this.row = 0;
        //this.ticksPerFrame = 2;
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

    /*killPLayer(){
        if(this.life = 0){
            gameOver()
        }
    }*/
}

class Monsters extends Sprite{
 
    constructor(x, y, context, image) {
        super({
            context: context,
            image: image,
            x: x,
            y: y,
            width: 138,
            height: 140,
            frameIndex: 0,
            row: 0,
            tickCount: 0,
            ticksPerFrame: 3, //tiempo
            frames: 4,
            
        });
        this.live = 300;
    }
  

    render() {
            if(frames % 1 === 0)this.x -= 2
            ctx.drawImage(
            this.image,
            this.frameIndex * this.width, // The x-axis coordinate of the top left corner
            this.row * this.height, // The y-axis coordinate of the top left corner
            this.width, // The width of the sub-rectangle
            this.height, // The height of the sub-rectangle
            this.x, // The x coordinate posicion del personaje
            this.y,// The y coordinate pos persoaje
            this.width, // The width to draw the image
            this.height // The width to draw the image
        );
        
    } 

}

class Monsters2 extends Sprite{
 
    constructor(x, y, context, image) {
        super({
            context: context,
            image: image,
            x: x,
            y: y,
            width: 138,
            height: 140,
            frameIndex: 0,
            row: 0,
            tickCount: 0,
            ticksPerFrame: 3, //tiempo
            frames: 4,
            
        });
        this.live = 300;
    }
  

    render() {
            if(frames % 1 === 0)this.x -= 2
            ctx.drawImage(
            this.image,
            this.frameIndex * this.width, // The x-axis coordinate of the top left corner
            this.row * this.height, // The y-axis coordinate of the top left corner
            this.width, // The width of the sub-rectangle
            this.height, // The height of the sub-rectangle
            this.x, // The x coordinate posicion del personaje
            this.y,// The y coordinate pos persoaje
            this.width, // The width to draw the image
            this.height // The width to draw the image
        );
        
    } 

}

class Kids extends Sprite{

    constructor(x, y, context, image) {
        super({
            context: context,
            image: image,
            x: x,
            y: y,
            width: 145,
            height: 145,
            frameIndex: 0,
            row: 0,
            tickCount: 0,
            ticksPerFrame: 3, //tiempo
            frames: 4,
            
        });
       // this.live = 300;
    }
  

    render() {
            if(frames % 1 === 0)this.x -= 2
            ctx.drawImage(
            this.image,
            this.frameIndex * this.width, // The x-axis coordinate of the top left corner
            this.row * this.height, // The y-axis coordinate of the top left corner
            this.width, // The width of the sub-rectangle
            this.height, // The height of the sub-rectangle
            this.x, // The x coordinate posicion del personaje
            this.y,// The y coordinate pos persoaje
            this.width, // The width to draw the image
            this.height // The width to draw the image
        );
        
    } 

}

class Kids2 extends Sprite{

    constructor(x, y, context, image) {
        super({
            context: context,
            image: image,
            x: x,
            y: y,
            width: 149,
            height: 145,
            frameIndex: 0,
            row: 0,
            tickCount: 0,
            ticksPerFrame: 3, //tiempo
            frames: 4,
            
        });
       // this.live = 300;
    }
  

    render() {
            if(frames % 1 === 0)this.x -= 2
            ctx.drawImage(
            this.image,
            this.frameIndex * this.width, // The x-axis coordinate of the top left corner
            this.row * this.height, // The y-axis coordinate of the top left corner
            this.width, // The width of the sub-rectangle
            this.height, // The height of the sub-rectangle
            this.x, // The x coordinate posicion del personaje
            this.y,// The y coordinate pos persoaje
            this.width, // The width to draw the image
            this.height // The width to draw the image
        );
        
    } 

}