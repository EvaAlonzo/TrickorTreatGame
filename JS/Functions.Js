const playerimg ="./Images/5f02e86a9fb43a0004cf0244.png"

window.onload = function(){


    //llamar clases
  
    const player = new Player(590,700, ctx, "./Images/Fantasmajuegos.png")
    const fondo = new Background(canvas.width, canvas.height);
   

//functions


function generateKids(){
  if(frames % 700 === 0|| frames % 600 === 0 || frames % 500 ===  0){
      
    //(max min) + min
      let x = Math.random() * (1900 - 200)+ 200;
      let y = Math.random() * (1000 - 495) + 495;

      const kid = new Kids(x,y,ctx,"./Images/kv.png")

      kids.push(kid)
      //enemies = [...enemies, enemy ]
  }
}

function drawKids(){

  kids.forEach((kid,index_kid)=>{//here
    kid.render()
    kid.update()
      //console.log("???", kid)
      
      //console.log("life", playerLife)  

     if(kid.x < 0){
       kids.splice(index_kid,1)
     }


  })

}

function generateKids2(){
  if(frames % 700 === 0|| frames % 600 === 0 || frames % 500 ===  0){
      
    //(max min) + min
      let x = Math.random() * (1900 - 200)+ 200;
      let y = Math.random() * (1000 - 495) + 495;

      const kid2 = new Kids2(x,y,ctx,"./Images/KidWitch.png")

      kids.push(kid2)
      //enemies = [...enemies, enemy ]
  }
}

function drawKids2(){

  kids2.forEach((kid2,index_kid2)=>{//here
    kid2.render()
    kid2.update()
      //console.log("???", kid)
      
      //console.log("life", playerLife)  

     if(kid2.x < 0){
       kids2.splice(index_kid2,1)
     }


  })

}


function generateMonsters(){
  if(frames % 1000 === 0|| frames % 800 === 0 || frames % 800 ===  0){
      
    //(max min) + min
      let x = Math.random() * (1900 - 700)+ 700;
      let y =  Math.random() * (900 - 600) + 600;
    
      const monster = new Monsters(x,y, ctx, "./Images/RealVampire.png" )

      monsters.push(monster)
      //enemies = [...enemies, enemy ]
  }
}

function drawMonsters(){

  monsters.forEach((monster,index_monster)=>{//here
      monster.render()
      monster.update()
      
      if(player.collision(monster)){
        monster.live -= 10
         
         if(monster.live < 0){
          player.life -- ;
          
          monsters.splice(index_monster,1) //Desaparece el mounstro al tocarlo
          
         }
    }

    if(monster.x + monster.width <= 0){
        monsters.splice(index_monster,1)
    }

  })

}

function generateMonsters2(){
  if(frames % 1000 === 0|| frames % 800 === 0 || frames % 800 ===  0){
      
    //(max min) + min
      let x = Math.random() * (1900 - 700)+ 700;
      let y =  Math.random() * (900 - 600) + 600;
    
      const monster2 = new Monsters(x,y, ctx, "./Images/RealWitch.png" )

      monsters2.push(monster2)
      //enemies = [...enemies, enemy ]
  }
}

function drawMonsters2(){

  monsters2.forEach((monster2,index_monster2)=>{//here
      monster2.render()
      monster2.update()
      
      if(player.collision(monster2)){
        monster2.live -= 10
        
         
         if(monster2.live < 0){
          player.life -- ;
          
          monsters2.splice(index_monster2,1) //Desaparece el mounstro al tocarlo
          
         }
    }

    if(monster2.x + monster2.width <= 0){
        monsters2.splice(index_monster2,1)
    }

  })

}

  function generateCandy(){
    if(frames % 400 === 0|| frames % 500 === 0 || frames % 900 ===  0){
        
      //(max min) + min
        let w = 50 //Math.floor(Math.random() * canvas.height ) + 80
        let x = canvas.width //Math.floor(Math.random() * canvas.width) - 500
  
        const candy = new Candy(w,x)
  
        candies.push(candy)
        //enemies = [...enemies, enemy ]
    }
  }
  
  function drawCandy(){
 
    candies.forEach((candy,index_candy)=>{//here
        candy.draw()
        
        //console.log("???", candy)

        if(player.collision(candy)){
          score ++
          candies.splice(index_candy,1)   
           
       
     }
 
     if(candy.x + candy.width < 0){
         candies.splice(index_candy,1)
     }
  
  
    })
}

function generateLolly(){
  if(frames % 800 === 0|| frames % 600 === 0 || frames % 900 ===  0){
      
    //(max min) + min
      let w = 40 //Math.floor(Math.random() * canvas.height ) + 80
      let x = canvas.width //Math.floor(Math.random() * canvas.width) - 500

      const lolly = new LollyPop(w,x)

      lollies.push(lolly)
      //enemies = [...enemies, enemy ]
  }
}

function drawLolly(){

  lollies.forEach((lolly,index_lolly)=>{//here
      lolly.draw()
      
      //console.log("???", candy)

      if(player.collision(lolly)){
        score += 2
        lollies.splice(index_lolly,1)   
         
     
   }

   if(lolly.x + lolly.width < 0){
       lollies.splice(index_lolly,1)
   }


  })
}


function generateWonka(){
  if(frames % 1800 === 0|| frames % 1500 === 0 || frames % 1300 ===  0){
      
    //(max min) + min
      let w = 55 //Math.floor(Math.random() * canvas.height ) + 80
      let x = canvas.width //Math.floor(Math.random() * canvas.width) - 500

      const wonka = new Wonka(w,x)

      wonkas.push(wonka)
      //enemies = [...enemies, enemy ]
  }
}

function drawWonka(){

  wonkas.forEach((wonka,index_wonka)=>{//here
      wonka.draw()
      
      //console.log("???", candy)

      if(player.collision(wonka)){
        score += 3
        wonkas.splice(index_wonka,1)   
         
     
   }

   if(wonka.x + wonka.width < 0){
       wonkas.splice(index_wonka,1)
   }


  })
}


function generateBonus(){
  if(frames % 2000 === 0|| frames % 3000 === 0 || frames % 4000 ===  0){
      
    //(max min) + min
      let w = 80 //Math.floor(Math.random() * canvas.height ) + 80
      let x = canvas.width //Math.floor(Math.random() * canvas.width) - 500

      const bonus = new Bonus(w,x)

      bonusx.push(bonus)
      //enemies = [...enemies, enemy ]
  }
}

function drawBonus(){

  bonusx.forEach((bonus,index_bonus)=>{//here
      bonus.draw()
      
      //console.log("???", candy)

      if(player.collision(bonus)){
        score += 3
       
        bonusx.splice(index_bonus,1)   
        player.status = true
         
     
   }

   if(bonus.x + bonus.width < 0){
       bonusx.splice(index_bonus,1)
   }


  })
}

  /*function inmunity(){
    if(player.collision()){
     
    }
   console.log("???")
}*/


//startgame endgame
const retryButton = document.getElementById("retry-button");
retryButton.onclick = function(){
  //alert("logrado")
  window.location.reload()
}

     document.getElementById("start-button").onclick = function() {
        if(requestId){
          return true
        }
        
        startGame();
      };

      function startGame() {
        requestId = requestAnimationFrame(update)
      }
    
      function gameOver(){
        fondo.gameOver()
        requestId = undefined
        

        if(requestId === undefined){
          
           retryButton.classList.remove("btnRetry");
           retryButton.classList.add("btnRetryview") 
           document.getElementById("start-button").classList.add("btnRetry")
      }
      }

       
      

      




function update(){
    frames++;
    ctx.clearRect(0,0,canvas.width,canvas.height);
  
  //elements draw
   
    fondo.drawSky();
    fondo.drawClouds();
    fondo.drawHouses();
    fondo.draw();
   
    
    player.render();
    player.update();

    //kids
    generateKids();
    drawKids();

    generateKids2();
    drawKids2();

 
    if(player.status){
      setTimeout(() => {
        player.status = false
      },6000)
    }else{
      //enemies 
      generateMonsters();
      drawMonsters();

      generateMonsters2();
      drawMonsters2();
    }
   
   

     //candies
     generateCandy();
     drawCandy();

     generateLolly();
     drawLolly();

     generateWonka();
     drawWonka();

     generateBonus();
     drawBonus();

     //inmunity
     //inmunity();

    

     //Score, points, life
     ctx.font= "80px Helvetica"
     ctx.fillStyle = "white"
     ctx.fillText(`Score: ${score}`,1500,80)

     //drawLives();
     ctx.font= "80px Helvetica"
     ctx.fillStyle = "white"
     ctx.fillText(`Lives: ${player.life}`,1160,80)
  
    if( player.life === 0){
      gameOver();
      //retry();
    }

    if(requestId){
       requestAnimationFrame(update)
    }
  }


  addEventListener("keydown",(event)=>{
    //arriba w
    if (event.keyCode === 87) {
      //clearCanvas();
      player.up()
      if (player.y > 550 ) {
        player.y -= 50;
      }
    }
  
    //abajo x
   if (event.keyCode === 88) {
      //clearCanvas();
      player.down()
      if (player.y < 958) { 
        player.y += 50;
      }

    } 

     //izquierda39 
   if (event.keyCode === 37) {
    //clearCanvas();
    if (player.x > 400) { 
      player.x -= 10;
    }
  }

     //derecha37 
     if (event.keyCode === 39) {
      //clearCanvas();
      player.right()
      if (player.x < 870) { 
        fondo.x -= 13;
        //fondo.xclouds -= 14
        fondo.xhouses -= 12
        fondo.xSky -= 20
        

      }
    }
  
    function clearCanvas() {
      canvas.width = canvas.width;
    }
  })
};