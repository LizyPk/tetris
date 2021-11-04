let tetrimino
let s
let lastSecond
let type
let song
let catMeow
let sadCat
let bg
let pointsArea
let gameOverSound
let anykey

function preload()
{
    bg = loadImage('assets/fundo.png') 
    pointsArea = loadImage('assets/pointsArea.png')
    sadCat = loadImage('assets/sadCat.png')
    song = loadSound('assets/Tetris.mp3')
    catMeow = loadSound('assets/catMeow.mp3')
    gameOverSound = loadSound('assets/game_over.ogg')
}

//SETUP
function setup()
{
  anyKey = 0
  createCanvas(tamC*numC+230,tamL*numL+20);
tetrimino = new Tetrimino()
  //rect(tamC*numC,tamL*numL)

}

//DRAW
function draw()
{
    if(anyKey == 0)
    {
      background(bg)
      image(pointsArea, tamC*numC*0.35, tamL*numL*0.28, pointsArea.width*0.75, pointsArea.height*0.75)
      DrawText()
      
     if(keyIsDown(ENTER))
      {
      anyKey = 1
      }
    }
  
      else if(anyKey == 2)
    {
      DrawText(points)
      song.setVolume(0.03)
    }
  
        else if(anyKey == 3)
    {
      background(bg)
      image(sadCat, tamC*numC*0.35, tamL*numL*0.28, sadCat.width*0.75, sadCat.height*0.75)
      DrawText(points)
      song.stop()
      gameOverSound.setVolume(0.1)
      
      if (!gameOverSound.isPlaying())
      {
        gameOverSound.play()
        cleanGrid()   
      }
      if(keyIsDown(ENTER))
      {
      anyKey = 1
      }
      if(keyIsDown(67))
      {
      anyKey = 4
      }
    }
        
    else if(anyKey == 4)
    {
      background(bg)
      song.setVolume(0.03)
      DrawText()
      if(keyIsDown(27))
      {
      anyKey = 3
      }
    }
  
    else if(anyKey == 1)
    {
      background(230, 212, 117)
      drawGrid()
  
      song.setVolume(0.1)
   if (!song.isPlaying())
      {
        song.play()
      }
  
      //CORES
      fill(tetraColor(tetrimino.type))
      tetrimino.drawTetrimino()
      tetrimino.gameOver()
      automateDown()
      
      //QUADRO
      image(pointsArea, numC*numL+75, 25, pointsArea.width / 2, pointsArea.height / 2)
      DrawText(points)
      
  }
}