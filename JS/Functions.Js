const playerimg ="../Images/5f02e86a9fb43a0004cf0244.png"

window.onload = function(){


    //llamar clases
    const player = new Player(20,300,100,150,playerimg);
    const fondo = new Background(canvas.width, canvas.height);
   

//functions


function generateKids(){
  if(frames % 250 === 0|| frames % 600 === 0 || frames % 500 ===  0){
      
    //(max min) + min
      let w = Math.floor(Math.random() * canvas.height ) + 60
      let x = Math.floor(Math.random() * canvas.width) - 600

      const kid = new Kids(w,x)

      kids.push(kid)
      //enemies = [...enemies, enemy ]
  }
}

function drawKids(){

  kids.forEach((kid)=>{//here
      kid.draw()
      //console.log("???", kid)


  })

}


function generateMonsters(){
  if(frames % 300 === 0|| frames % 150 === 0 || frames % 600 ===  0){
      
    //(max min) + min
      let w = Math.floor(Math.random() * canvas.height ) + 80
      let x = Math.floor(Math.random() * canvas.width) - 500

      const monster = new Monsters(w,x)

      monsters.push(monster)
      //enemies = [...enemies, enemy ]
  }
}

function drawMonsters(){

  monsters.forEach((monster,index_monster)=>{//here
      monster.draw()
      //console.log("???", monster)
      //let finalLife = 0
      if(player.collision(monster)){
         playerLife --
         //console.log("life", playerLife)
      
    }

    if(monster.x + monster.width <= 0){
        monsters.splice(index_monster,1)
    }

  })

}

  function generateCandy(){
    if(frames % 200 === 0|| frames % 150 === 0 || frames % 900 ===  0){
        
      //(max min) + min
        let w = Math.floor(Math.random() * canvas.height ) + 80
        let x = Math.floor(Math.random() * canvas.width) - 500
  
        const candy = new Candy(w,x)
  
        candies.push(candy)
        //enemies = [...enemies, enemy ]
    }
  }
  
  function drawCandy(){
  
    candies.forEach((candy,index_candy)=>{//here
        candy.draw()
        //console.log("???", monster)

        if(player.collision(candy)){
          score ++
          console.log("score??", score)
       
     }
 
     /*if(candy.x + candy.width <= 0){
         candy.splice(index_candy,1)
     }*/
  
  
    })
}


/*function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Lives: "+lives, canvas.width-65, 20);
}*/




//startgame endgame
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
      }




function update(){
    frames++;
    ctx.clearRect(0,0,canvas.width,canvas.height);
  
  //elements draw
    fondo.draw();
    player.draw();

    //kids
    generateKids();
    drawKids();

 
    //enemies 
    generateMonsters();
    drawMonsters();

     //candies
     generateCandy();
     drawCandy();

     //Score, points, life
     //drawLives();

  
  
    if(requestId){
       requestAnimationFrame(update)
    }
  }


  addEventListener("keydown",(event)=>{
    //arriba o ziquierda
    if (event.keyCode === 37) {
      clearCanvas();
      if (player.y > 60 ) {
        player.y -= 30;
      }
    }
  
    //abajo o derecha
   if (event.keyCode === 39) {
      clearCanvas();
      if (player.y < 880) { 
        player.y += 30;
      }
    } 
  
    function clearCanvas() {
      canvas.width = canvas.width;
    }
  })
};