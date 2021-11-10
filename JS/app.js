//Aqui van las clases

class Background{
    constructor(w,h){
        this.x = 0;
        this.xclouds = 0;
        this.xhouses = 0;
        this.xSky = 0;
        this.y = 0;
        this.width = w;
        this.height = h;
        this.image = new Image();
        this.image.src = "./Images/street.png"
        this.imgGameOver = new Image();
        this.imgGameOver.src = "./Images/GameOver.png"
        this.imageSky = new Image();
        this.imageSky.src = "./Images/cielo.png"
        this.imageClouds = new Image();
        this.imageClouds.src = "./Images/nubes.png"
        this.imageHouses = new Image();
        this.imageHouses.src = "./Images/housesback.png"
        
    }

    draw(){ //esto es un metodo que es igual que una funcion pero dentr de una clase 
        //metodo//para hacer que el background se mueva
        if(this.x < -canvas.width){
            this.x = 0
        }
        //this.x--;

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

    drawHouses(){
        if(this.xhouses < -canvas.width){
            this.xhouses = 0
        }
        //this.x--;

        //dibujar la imagen
        ctx.drawImage(this.imageHouses,this.xhouses,this.y,this.width,this.height)
        ctx.drawImage(
            this.imageHouses,
            this.xhouses + this.width,
            this.y,
            this.width,
            this.height
        )

    }

    drawSky(){
        if(this.xSky < -canvas.width){
            this.xSky = 0
        }
        //this.x--;

        //dibujar la imagen
        ctx.drawImage(this.imageSky,this.xSky,this.y,this.width,this.height)
        ctx.drawImage(
            this.imageSky,
            this.xSky + this.width,
            this.y,
            this.width,
            this.height
        )
    }

    

    drawClouds(){
        if(this.xclouds < -canvas.width){
            this.xclouds = 0
        }
        this.xclouds--;

        //dibujar la imagen
        ctx.drawImage(this.imageClouds,this.xclouds,this.y,this.width,this.height)
        ctx.drawImage(
            this.imageClouds,
            this.xclouds + this.width,
            this.y,
            this.width,
            this.height
        )
    }
    gameOver(){
        ctx.drawImage(this.imgGameOver,260,50,1400,1010)
        ctx.font= "80px Helvetica"
        ctx.fillStyle ="DimGray"
        ctx.fillText(`Final Score: ${score}`,705,773)
    }
}







class Candy{
    constructor(x,w,y,h){
        this.x = canvas.width;
        this.y = this.getRandomY();
        this.width = 90;
        this.height = 60;
        this.image1 = new Image();
        this.image1.src = "./Images/corncandyopeneyes.png"
        this.image2 = new Image();
        this.image2.src = "./Images/corncandycloseeyes.png"
        this.image = this.image1
    }

    draw(){
        if(frames % 8 === 0 ){ //
            
        this.image = this.image === this.image1 ? this.image2 : this.image1;
       
      } 
      this.x -= 4;
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
    }
   

    getRandomY() {
        return Math.random() * (1000 - 580) + 580;
    }
}


class LollyPop{
    constructor(x,w,y,h){
        this.x = canvas.width;
        this.y = this.getRandomY();
        this.width = 90;
        this.height = 60;
        this.image1 = new Image();
        this.image1.src = "./Images/Lolly1.png"
        this.image2 = new Image();
        this.image2.src = "./Images/Lolly2.png"
        this.image = this.image1
    }

    draw(){
        if(frames % 8 === 0 ){ //
            
        this.image = this.image === this.image1 ? this.image2 : this.image1;
       
      } 
      this.x -= 4;
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
    }
   

    getRandomY() {
        return Math.random() * (1000 - 580) + 580;
    }
}


class Wonka{
    constructor(x,w,y,h){
        this.x = canvas.width;
        this.y = this.getRandomY();
        this.width = 90;
        this.height = 60;
        this.image1 = new Image();
        this.image1.src = "./Images/WonkaBar.gif"
        this.image2 = new Image();
        this.image2.src = "./Images/WonkaBar2.gif"
        this.image = this.image1
    }

    draw(){
        if(frames % 8 === 0 ){ //
            
        this.image = this.image === this.image1 ? this.image2 : this.image1;
       
      } 
      this.x -= 4;
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
    }
   

    getRandomY() {
        return Math.random() * (1000 - 580) + 580;
    }
}


class Bonus{
    constructor(x,w,y,h){
        this.x = canvas.width;
        this.y = this.getRandomY();
        this.width = 90;
        this.height = 60;
        this.image1 = new Image();
        this.image1.src = "./Images/Bonus.gif"
        this.image2 = new Image();
        this.image2.src = "./Images/Bonus2.gif"
        this.image = this.image1
    }

    draw(){
        if(frames % 8 === 0 ){ //
            
        this.image = this.image === this.image1 ? this.image2 : this.image1;
       
      } 
      this.x -= 4;
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
    }
   

    getRandomY() {
        return Math.random() * (1000 - 580) + 580;
    }
}

