//movimentação
function keyPressed()
{
  if(keyIsDown(RIGHT_ARROW) || keyIsDown(68))
  {
    tetrimino.right()
  }
  if(keyIsDown(LEFT_ARROW) || keyIsDown(65))
  {
    tetrimino.left()
  }
  if(keyIsDown(UP_ARROW) || keyIsDown(87))
  {
    tetrimino.rotateL()
  }
  if(keyIsDown(DOWN_ARROW) || keyIsDown(83))
  {
    tetrimino.botLimit()
  }
  if(keyIsDown(32))
  {
    tetrimino.perfectDown()
  }
  
    if(keyIsDown(27))
  {
    if(anyKey == 1)
     {
       anyKey = 2
     }
    else if(anyKey == 2)
     {
       anyKey = 1
     }
  }
}

function DrawText(points)
{
    if(anyKey == 0)
     {
      fill(0);
      textAlign(CENTER)
      textSize(35)
      text('PRESS ENTER', tamC*numC-20, tamL*numL-220)
      fill(255);
      text('Lizy Novo', 390, 450)
     }
  
    else if(anyKey == 1)
     {
      fill(0);
      textAlign(LEFT)
      textSize(20)
      text(points, 365, 116)
      text('points:', 300, 114)
      text('Press ESC to pause', 277, 200)
      textAlign(CENTER)
      text('Lizy Novo', 375, 500)
     }
  
      else if(anyKey == 2)
     {
      fill(255)
      textAlign(CENTER, CENTER)
      textSize(45)
      text('PAUSE', width*0.5, height*0.5-20)
      textSize(30)
      text('||', width*0.5, height*0.5+15)
     }  
  
       else if(anyKey == 3) 
     {
      fill(255)
      textAlign(CENTER, CENTER)
      textSize(45)
      text('GAME OVER', width*0.5, height*0.5+35)
      textSize(30)
      text(points, width*0.5, height*0.5+75)
      textSize(20)
      
      text('ENTER TO RESTART', width*0.5, height*0.5+120)
      text('"C" TO CREDITS', width*0.5, height*0.5+142)
      text('Lizy Novo', 240, 450)
     }
  
        else if(anyKey == 4)
     {
      fill(255)
      textAlign(CENTER, CENTER)
       
      textSize(45)
      text('CREDITS', width*0.5, height*0.5-130)
       
      textSize(30)       
      text('Development:', width*0.5, height*0.5-50)
      text('Beta testers:', width*0.5, height*0.5+50)

      textSize(20)
      text('Lizy Novo', width*0.5, height*0.5-20)
      text('Gabriel Przybysz', width*0.5, height*0.5+80)
      text('Guilherme Sehna', width*0.5, height*0.5+105)
      text('Paulo Godinho', width*0.5, height*0.5+130)
       
      text('ESC TO EXIT', width*0.5, height*0.5+180)
     }
}