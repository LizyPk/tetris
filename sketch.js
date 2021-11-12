let tetrimino
let s
let lastSecond
let type
let song
let catMeow
let sadCat
let pointsArea
let gameOverSound
var anykey = 0


function preload()
{
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
  createCanvas(windowWidth,windowHeight);  
//createCanvas(tamC*numC+230,tamL*numL+20);
tetrimino = new Tetrimino()
  //rect(tamC*numC,tamL*numL)
}

//DRAW
function draw()
{
        DrawBackground()
    if(anyKey == 0)
    {
      image(pointsArea, windowWidth/2-width/4, windowHeight*0.28, pointsArea.width*0.75, pointsArea.height*0.75)
      DrawText()
      
     if(keyIsDown(ENTER))
      {
      anyKey = 1
      }
    }
  //PAUSE
      else if(anyKey == 2)
    {
      DrawText(points)
      song.setVolume(0.03)
    }
  //GAME OVER
      else if(anyKey == 3)
    {
      cleanGrid()   
      image(sadCat, windowWidth/2-sadCat.width/2.25, tamL*numL*0.28, sadCat.width*0.75, sadCat.height*0.75)
      DrawText(points)
      song.stop()
      gameOverSound.setVolume(0.1)
      
      if (!gameOverSound.isPlaying())
      {
        gameOverSound.play()
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
      song.setVolume(0.03)
      DrawText()
      if(keyIsDown(27))
      {
      anyKey = 3
      }
    }
  
    else if(anyKey == 1)
    {
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